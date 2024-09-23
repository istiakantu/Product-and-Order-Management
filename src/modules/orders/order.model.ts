import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

export const orderSchema: Schema = new Schema<TOrder>({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  productId: {
    type: String,
    required: [true, "Product ID is required"],
    minlength: [24, "Product ID must be exactly 24 characters long"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be a positive integer"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [0, "Quantity must be a non-negative integer"],
  },
});

export const Order = model<TOrder>("Order", orderSchema);
