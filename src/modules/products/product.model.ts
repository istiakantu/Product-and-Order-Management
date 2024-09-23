import { model, Schema } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

export const variantSchema: Schema = new Schema<TVariant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

export const inventorySchema: Schema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

export const productSchema: Schema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
  // isDeleted: {
  //   type: Boolean,
  //   required: false,
  //   default: false,
  // },
});

// Query Middleware
// productSchema.pre("find", function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });
// productSchema.pre("findOne", function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// // fixed aggregate for deleted product
// productSchema.pre("aggregate", function (next) {
//   this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
//   next();
// });

export const Product = model<TProduct>("Product", productSchema);

export default Product;
