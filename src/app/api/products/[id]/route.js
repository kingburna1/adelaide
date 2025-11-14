import { connectDB } from "@/lib/mongoose"; // Your Mongoose connection function
import Product from '@/models/Product'; // Your Mongoose Product Model
// No need to import 'ObjectId' or 'clientPromise' anymore!

/**
 * @method GET
 * @description Fetches a single product by the custom 'itemId' (passed as 'id' in params).
 */
export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = params; 

    // Mongoose: Find one document by the custom unique key 'itemId'
    const product = await Product.findOne({ itemId: id });

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET Product Error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch product." }), { status: 500 });
  }
}

/**
 * @method PATCH
 * @description Updates an existing product by 'itemId'.
 */
export async function PATCH(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const updateData = await req.json();

    // Mongoose: Find by itemId and update. 
    // { new: true } returns the updated document.
    // { runValidators: true } enforces schema validation during the update.
    const updatedProduct = await Product.findOneAndUpdate(
      { itemId: id }, 
      updateData, 
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, message: "Product updated", data: updatedProduct }), { 
      status: 200, 
      headers: { "Content-Type": "application/json" } 
    });
  } catch (error) {
    console.error("PATCH Product Error:", error);
    // Use 400 for errors related to invalid update data
    return new Response(JSON.stringify({ error: error.message }), { status: 400 }); 
  }
}

/**
 * @method DELETE
 * @description Deletes a single product by 'itemId'.
 */
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = params;

    // Mongoose: Use deleteOne based on the 'itemId' field
    const result = await Product.deleteOne({ itemId: id });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, message: "Product deleted" }), { status: 200 });
  } catch (error) {
    console.error("DELETE Product Error:", error);
    return new Response(JSON.stringify({ error: "Failed to delete product." }), { status: 500 });
  }
}