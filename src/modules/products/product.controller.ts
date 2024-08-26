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
  } catch (err: any) {
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
  } catch (err: any) {
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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not update product",
      error: err,
    });
  }
};

//

//

// Search Products
const searchProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    if (!searchTerm || typeof searchTerm !== "string") {
      return res.status(400).json({
        success: false,
        message: "Search term is required",
      });
    }

    const result = await ProductServices.searchProducts(searchTerm);

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No products found matching search term '${searchTerm}'`,
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch products",
      error: err.message || err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductsById,
  deleteProduct,
  updateProduct,
  searchProducts,
};
