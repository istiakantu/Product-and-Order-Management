import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

// Create a product
router.post("/", ProductControllers.createProduct);

// Get all products
router.get("/", ProductControllers.getAllProducts);

// Get single product
router.get("/:productId", ProductControllers.getProductsById);

export const ProductRoutes = router;
