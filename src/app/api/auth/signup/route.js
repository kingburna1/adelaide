import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongoose";
import User from "@/models/User";
import { signToken, setTokenCookie } from "@/lib/auth";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Email and password required" }), { status: 400 });
    }

    await connectDB();

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "Email already in use" }), { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name: name || "",
      email: email.toLowerCase(),
      password: hashedPassword,
      role: "user",
    });

    const token = signToken({ id: newUser._id.toString(), email: newUser.email });
    const cookie = setTokenCookie(null, token);

    return new Response(
      JSON.stringify({
        success: true,
        user: { id: newUser._id, email: newUser.email, name: newUser.name },
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": cookie,
        },
      }
    );
  } catch (err) {
    console.error("Signup error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
