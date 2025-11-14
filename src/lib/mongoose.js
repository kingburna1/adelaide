import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI environment variable in .env");
}

// Prevent multiple connections in dev (Next.js hot reload)
let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;
  try {
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB Connected via Mongoose");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
