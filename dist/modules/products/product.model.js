"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.productSchema = exports.inventorySchema = exports.variantSchema = void 0;
const mongoose_1 = require("mongoose");
exports.variantSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});
exports.inventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});
exports.productSchema = new mongoose_1.Schema({
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
        type: [exports.variantSchema],
        required: true,
    },
    inventory: {
        type: exports.inventorySchema,
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
exports.Product = (0, mongoose_1.model)("Product", exports.productSchema);
