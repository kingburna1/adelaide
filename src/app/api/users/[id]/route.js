import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

// ✅ GET user by ID
export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("adelaagri_db");
    const { id } = params;

    const user = await db.collection("users").findOne({ _id: new ObjectId(id) });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// ✅ PATCH (update user by ID)
export async function PATCH(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("adelaagri_db");
    const { id } = params;
    const data = await req.json();

    const result = await db.collection("users").updateOne(
      { _id: new ObjectId(id) },
      { $set: data }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, message: "User updated" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// ✅ DELETE user by ID
export async function DELETE(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("adelaagri_db");
    const { id } = params;

    const result = await db.collection("users").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, message: "User deleted" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
