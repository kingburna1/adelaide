import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongoose";
import User from "@/models/User";
import { signToken, setTokenCookie } from "@/lib/auth";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email and password required" }),
        { status: 400 }
      );
    }

    // ✅ Connect to MongoDB using Mongoose
    await connectDB();

    // ✅ Find user by email
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return new Response(
        JSON.stringify({ error: "Invalid credentials" }),
        { status: 401 }
      );
    }

    // ✅ Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(
        JSON.stringify({ error: "Invalid credentials" }),
        { status: 401 }
      );
    }

    // ✅ Create token and cookie
    const token = signToken({
      id: user._id.toString(),
      email: user.email,
      role: user.role,
    });
    const cookie = setTokenCookie(null, token);

    // ✅ Return success response
    return new Response(
      JSON.stringify({
        success: true,
        user: {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
          image: user.image || null,
        },
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": cookie,
        },
      }
    );
  } catch (err) {
    console.error("Signin error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
import NextAuth from "next-auth";