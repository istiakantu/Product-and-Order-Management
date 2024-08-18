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

// Delete a Product
const deleteProduct = async (_id: string) => {
  const result = await Product.updateOne({ _id }, { isDeleted: true });
  return result;
};

// Search Products
// const searchProducts = async (searchTerm: string) => {
//   const searchRegex = new RegExp(searchTerm, "i"); // Case-insensitive search
//   const result = await Product.find({
//     $or: [
//       { name: { $regex: searchRegex } },
//       { description: { $regex: searchRegex } },
//       { category: { $regex: searchRegex } },
//       { tags: { $regex: searchRegex } },
//     ],
//   });
//   return result;
// };

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductsById,
  deleteProduct,
  // searchProducts,
};
