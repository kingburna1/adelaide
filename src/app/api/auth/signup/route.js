
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { signToken, setTokenCookie } from "@/lib/auth";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Email and password required" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("adelaagri_db");
    const users = db.collection("users");

    // check existing
    const existing = await users.findOne({ email: email.toLowerCase() });
    if (existing) {
      return new Response(JSON.stringify({ error: "Email already in use" }), { status: 409 });
    }

    const hashed = await bcrypt.hash(password, 10);
    const newUser = {
      name: name || "",
      email: email.toLowerCase(),
      password: hashed,
      role: "user",  
      createdAt: new Date(),
    };

    const result = await users.insertOne(newUser);
    const userId = result.insertedId.toString();

    const token = signToken({ id: userId, email: newUser.email });

    const cookie = setTokenCookie(null, token); // we only need the cookie string

    return new Response(JSON.stringify({ success: true, user: { id: userId, email: newUser.email, name: newUser.name } }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": cookie,
      },
    });
  } catch (err) {
    console.error("Signup error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
