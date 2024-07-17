import { z } from "zod";

// Define Zod schema for TVariant
const variantValidationSchema = z.object({
  type: z.string().min(1, "Type is required"),
  value: z.string().min(1, "Value is required"),
});

// Define Zod schema for TInventory
const inventoryValidationSchema = z.object({
  quantity: z.number().int().min(0, "Quantity must be a non-negative integer"),
  inStock: z.boolean(),
});

// Define Zod schema for TProduct
const productValidationSchema = z.object({
  name: z.string().min(1, "Name is required").max(25),
  description: z.string().min(1, "Description is required"),
  price: z.number().positive("Price must be a positive number"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string().min(1, "Tag cannot be empty")),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
