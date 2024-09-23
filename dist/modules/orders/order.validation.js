"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderValidation = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    productId: zod_1.z
        .string()
        .length(24, { message: "Product ID must be exactly 24 characters long" }),
    price: zod_1.z.number().positive({ message: "Price must be a positive integer" }),
    quantity: zod_1.z
        .number()
        .int()
        .nonnegative({ message: "Quantity must be a non-negative integer" }),
});
exports.default = orderValidation;
