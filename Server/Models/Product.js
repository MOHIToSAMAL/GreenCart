
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
     type: String,
      required: true
     },
  image: { 
    type: String
     },
  price: {
     type: Number,
      required: true
     },
  offerPrice: {
     type: Number,
      required: true
     },
  category: {
     type: String,
      required: true
     },
  description: {
     type: String
     },
  inStock: {
     type: Number,
      default: 0
     }
}, { timestamps: true });

const Product = mongoose.models.product || mongoose.model("Product", productSchema);
export default Product;
