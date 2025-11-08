import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("adelaagri_db"); // ✅ Fixed database name
    const users = await db.collection("users").find({}).toArray();

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("adelaagri_db");
    const body = await req.json();

    // Insert one or many
    if (Array.isArray(body)) {
      await db.collection("users").insertMany(body);
    } else {
      await db.collection("users").insertOne(body);
    }

    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (error) {
    console.error("Error inserting users:", error);
    return new Response(JSON.stringify({ error: "Database error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE() {
    try {
      const client = await clientPromise;
      const db = client.db("adelaagri_db");
      await db.collection("users").deleteMany({});
      return new Response(JSON.stringify({ success: true, message: "All users deleted" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }