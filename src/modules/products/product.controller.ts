import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.validation";
import { error } from "console";

// Product Controller

// Create a Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    // Data validation using zod
    const zodParseData = productValidationSchema.parse(productData);

    const result = await ProductServices.createProduct(zodParseData);

    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not created product",
      error: err,
    });
  }
};

// Get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch products",
      error: err,
    });
  }
};

// Get single product
const getProductsById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getProductsById(productId);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch products",
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductsById,
};
