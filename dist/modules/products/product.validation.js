"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define Zod schema for TVariant
const variantValidationSchema = zod_1.z.object({
    type: zod_1.z.string().min(1, "Type is required"),
    value: zod_1.z.string().min(1, "Value is required"),
});
// Define Zod schema for TInventory
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number().int().min(0, "Quantity must be a non-negative integer"),
    inStock: zod_1.z.boolean(),
});
// Define Zod schema for TProduct
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required").max(35),
    description: zod_1.z.string().min(1, "Description is required"),
    price: zod_1.z.number().positive("Price must be a positive number"),
    category: zod_1.z.string().min(1, "Category is required"),
    tags: zod_1.z.array(zod_1.z.string().min(1, "Tag cannot be empty")),
    variants: zod_1.z.array(variantValidationSchema),
    inventory: inventoryValidationSchema,
    // isDeleted: z.boolean().default(false),
});
exports.default = productValidationSchema;
