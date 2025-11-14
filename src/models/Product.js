import mongoose from 'mongoose';

// Define the schema based on the product data provided
const productSchema = new mongoose.Schema({
  // Unique identifier for product (maps to your original "id")
  itemId: {
    type: String,
    required: [true, 'Item ID is required'],
    unique: true,
    trim: true,
  },
  // Main image path
  imageSource: {
    type: String,
    required: [true, 'Main image source is required'],
  },
  // Product name
  productName: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  // Price (stored as a string since currency formatting is included)
  price: {
    type: String,
    required: [true, 'Price is required'],
    trim: true,
  },
  // Short description or subtitle
  subTitle: {
    type: String,
    required: false, // Not strictly required
    trim: true,
  },
  // Additional image paths (optional)
  image2Source: {
    type: String,
    required: false,
  },
  image3Source: {
    type: String,
    required: false,
  },
  image4Source: {
    type: String,
    required: false,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Check if the model is already defined before compiling it (Essential for Next.js/Hot Reloading)
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;