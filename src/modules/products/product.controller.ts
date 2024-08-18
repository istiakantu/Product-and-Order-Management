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

// Search Products or Get All Products
// const searchOrGetAllProducts = async (req: Request, res: Response) => {
//   try {
//     const { searchTerm } = req.query as { searchTerm?: string };
//     let result;

//     if (searchTerm) {
//       result = await ProductServices.searchProducts(searchTerm);
//       res.status(200).json({
//         success: true,
//         message: `Products matching search term '${searchTerm}' fetched successfully!`,
//         data: result,
//       });
//     } else {
//       result = await ProductServices.getAllProducts();
//       res.status(200).json({
//         success: true,
//         message: "Products fetched successfully!",
//         data: result,
//       });
//     }
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch products",
//       error: err.message || err,
//     });
//   }
// };

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductsById,
  deleteProduct,
  // searchOrGetAllProducts,
};
