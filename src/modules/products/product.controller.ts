import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.validation";

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
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: "Could not created product",
      error: err,
    });
  }
};

// Get products
const getProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm: string = req.query.searchTerm as string;
    const result = await ProductServices.getProducts(searchTerm);
    if (searchTerm) {
      res.status(200).json({
        success: true,
        message: `Products matching search term ${searchTerm} fetched successfully!`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: "Could not fetched products",
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
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: "Could not fetched products",
      error: err,
    });
  }
};

// Delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: "Could not deleted product",
      error: err,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;

    // Data validation using Zod
    const zodParseData = productValidationSchema.parse(productData);

    const updatedProduct = await ProductServices.updateProduct(
      productId,
      zodParseData
    );

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
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: "Could not update product",
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getProducts,
  getProductsById,
  deleteProduct,
  updateProduct,
};
