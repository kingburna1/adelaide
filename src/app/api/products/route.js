import { connectDB } from "@/lib/mongoose";// Updated import to use your utility
import Product from '@/models/Product'; 

/**
 * @method GET
 * @description Fetches all products using Mongoose.
 */
export async function GET() {
  try {
    await connectDB(); // Use your connection function
    
    // Mongoose: Find all documents in the Product collection
    const products = await Product.find({}); 

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET Products Error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products." }), { status: 500 });
  }
}

/**
 * @method POST
 * @description Adds one or more new products using Mongoose.
 */
export async function POST(req) {
  try {
    await connectDB(); // Use your connection function
    const data = await req.json();

    // Mongoose: Product.create() handles both single objects and arrays
    const newProducts = await Product.create(data); 

    return new Response(JSON.stringify({ success: true, message: "Product(s) added successfully", data: newProducts }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("POST Products Error:", error);
    // 400 status is generally better for validation or input errors
    return new Response(JSON.stringify({ error: error.message }), { status: 400 }); 
  }
}

/**
 * @method DELETE
 * @description Deletes all products using Mongoose (Careful!).
 */
export async function DELETE() {
  try {
    await connectDB(); // Use your connection function

    // Mongoose: Delete all documents
    await Product.deleteMany({}); 

    return new Response(JSON.stringify({ success: true, message: "All products deleted" }), {
      status: 200,
    });
  } catch (error) {
    console.error("DELETE Products Error:", error);
    return new Response(JSON.stringify({ error: "Failed to delete products." }), { status: 500 });
  }
}