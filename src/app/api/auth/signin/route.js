// src/app/api/auth/signin/route.js
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { signToken, setTokenCookie } from "@/lib/auth";


export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Email and password required" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("adelaagri_db");
    const users = db.collection("users");

    const user = await users.findOne({ email: email.toLowerCase() });
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
    }

    const token = signToken({ id: user._id.toString(), email: user.email });
    const cookie = setTokenCookie(null, token);

    return new Response(JSON.stringify({ success: true, user: { id: user._id.toString(), email: user.email, name: user.name } }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": cookie,
      },
    });
  } catch (err) {
    console.error("Signin error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
