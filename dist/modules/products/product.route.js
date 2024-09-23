"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// Create a product
router.post("/", product_controller_1.ProductControllers.createProduct);
// Get all products
router.get("/", product_controller_1.ProductControllers.getAllProducts);
// Get single product
router.get("/:productId", product_controller_1.ProductControllers.getProductsById);
// Delete a product
router.delete("/:productId", product_controller_1.ProductControllers.deleteProduct);
// Update a product
router.put("/:productId", product_controller_1.ProductControllers.updateProduct);
// Search or Get all products
// router.get("/", ProductControllers.searchProducts);
exports.ProductRoutes = router;
