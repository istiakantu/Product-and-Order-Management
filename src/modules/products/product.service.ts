import { ObjectId } from "mongoose";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// Product Services

// Create a Product
const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};

// Get all Product
const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

// Get Single Product
const getProductsById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductsById,
};
