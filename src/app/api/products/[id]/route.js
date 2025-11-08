import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

//  GET product by ID
export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("adelaagri_db");
    const { id } = params;

    const product = await db.collection("products").findOne({ _id: new ObjectId(id) });

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

//  PATCH update product by ID
export async function PATCH(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("adelaagri_db");
    const { id } = params;
    const updateData = await req.json();

    const result = await db.collection("products").updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, message: "Product updated" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

//  DELETE product by ID
export async function DELETE(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("adelaagri_db");
    const { id } = params;

    const result = await db.collection("products").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, message: "Product deleted" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
