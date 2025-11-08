import clientPromise from "@/lib/mongodb";

// ✅ GET all products
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("adelaagri_db");
    const products = await db.collection("products").find({}).toArray();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// ✅ POST add new product(s)
export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("adelaagri_db");
    const data = await req.json();

    if (Array.isArray(data)) {
      await db.collection("products").insertMany(data);
    } else {
      await db.collection("products").insertOne(data);
    }

    return new Response(JSON.stringify({ success: true, message: "Product(s) added" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error inserting product:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// ✅ DELETE all products (careful!)
export async function DELETE() {
  try {
    const client = await clientPromise;
    const db = client.db("adelaagri_db");

    await db.collection("products").deleteMany({});
    return new Response(JSON.stringify({ success: true, message: "All products deleted" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
