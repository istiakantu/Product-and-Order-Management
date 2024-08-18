import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

// Create a product
router.post("/", ProductControllers.createProduct);

// Get all products
router.get("/", ProductControllers.getAllProducts);

// Get single product
router.get("/:productId", ProductControllers.getProductsById);

// Delete a product
router.delete("/:productId", ProductControllers.deleteProduct);

// Search or Get all products
// router.get("/", ProductControllers.searchOrGetAllProducts);

export const ProductRoutes = router;
