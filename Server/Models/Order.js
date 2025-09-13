
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId : { 
    type: String,
     ref: "User",
      required: true },
  items: [{
    product: {
       type: String,
       required: true,
       ref: 'product',
       },
    quantity: {
       type: Number,
       requred: true,
       },
  }],
  amount: {
    type: Number,
    required: true,
  },
  address: {
    type: Number,
    required: true,
    ref: "address"
  },
  status: {
    type: Number,
    default: "Order Placed",
  },
  paymentType: {
    type: String,
    required: true,
  },
  isPaid : {
    type: Boolean,
    required: true,
    default: false,
  },

}, { timestamps: true });

const Order = mongoose.models.order ||  mongoose.model("Order", orderSchema);
export default Order;
