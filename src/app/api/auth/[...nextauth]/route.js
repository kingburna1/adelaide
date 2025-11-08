import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    // 🔹 Google Sign-in
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // 🔹 Email + Password Sign-in
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db("adelaagri_db");
        const user = await db.collection("users").findOne({ email: credentials.email });

        if (!user) throw new Error("User not found");

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) throw new Error("Invalid password");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role || "user",
        };
      },
    }),
  ],

  // Custom Signin Page
  pages: {
    signIn: "/signin",
  },

  // 🔥 Custom redirect logic
  callbacks: {
    async jwt({ token, user }) {
     
      if (user) {
        token.role = user.role || "user"; // store the role directly
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role; // attach role to session
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
    
      return baseUrl; // default redirect after sign in
    },
  },
  

  secret: process.env.JWT_SECRET,
});

export { handler as GET, handler as POST };
