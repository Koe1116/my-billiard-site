import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  items: [{ name: String, price: Number, quantity: Number }],
  total: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Order", OrderSchema);
