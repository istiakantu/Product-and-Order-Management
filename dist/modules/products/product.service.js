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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
// Product Services
// Create a Product
const createProduct = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payLoad);
    return result;
});
// Get Products
const getProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    //eslint-disable-next-line
    const filterDoc = {};
    if (searchTerm) {
        filterDoc.$or = [
            { name: { $regex: searchTerm, $options: "i" } },
            { description: { $regex: searchTerm, $options: "i" } },
            { category: { $regex: searchTerm, $options: "i" } },
            { tags: { $regex: searchTerm, $options: "i" } },
        ];
    }
    // Use filterDoc for either search or fetching all
    const result = yield product_model_1.Product.find(filterDoc);
    return result;
});
// Get Single Product
const getProductsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(id);
    return result;
});
// Delete a Product
const deleteProduct = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndDelete(_id);
    return result;
});
// Update a Product
const updateProduct = (id, payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProduct = yield product_model_1.Product.findByIdAndUpdate(id, payLoad, {
        new: true,
    });
    return updatedProduct;
});
exports.ProductServices = {
    createProduct,
    getProducts,
    getProductsById,
    deleteProduct,
    updateProduct,
};
