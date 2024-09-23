"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
// Product Controller
// Create a Product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        // Data validation using zod
        const zodParseData = product_validation_1.default.parse(productData);
        const result = yield product_service_1.ProductServices.createProduct(zodParseData);
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not created product",
            error: err,
        });
    }
});
// Get products
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield product_service_1.ProductServices.getProducts(searchTerm);
        if (searchTerm) {
            res.status(200).json({
                success: true,
                message: `Products matching search term ${searchTerm} fetched successfully!`,
                data: result,
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetched products",
            error: err,
        });
    }
});
// Get single product
const getProductsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getProductsById(productId);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetched products",
            error: err,
        });
    }
});
// Delete product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not deleted product",
            error: err,
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        // Data validation using Zod
        const zodParseData = product_validation_1.default.parse(productData);
        const updatedProduct = yield product_service_1.ProductServices.updateProduct(productId, zodParseData);
        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: updatedProduct,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not update product",
            error: err,
        });
    }
});
exports.ProductControllers = {
    createProduct,
    getProducts,
    getProductsById,
    deleteProduct,
    updateProduct,
};
