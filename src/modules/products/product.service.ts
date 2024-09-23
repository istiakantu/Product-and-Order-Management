import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// Product Services

// Create a Product
const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};

// Get Products
const getProducts = async (searchTerm?: string) => {
  //eslint-disable-next-line
  const filterDoc: any = {};

  if (searchTerm) {
    filterDoc.$or = [
      { name: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
      { category: { $regex: searchTerm, $options: "i" } },
      { tags: { $regex: searchTerm, $options: "i" } },
    ];
  }

  // Use filterDoc for either search or fetching all
  const result = await Product.find(filterDoc);
  return result;
};

// Get Single Product
const getProductsById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// Delete a Product
const deleteProduct = async (_id: string) => {
  const result = await Product.findByIdAndDelete(_id);
  return result;
};

// Update a Product
const updateProduct = async (id: string, payLoad: TProduct) => {
  const updatedProduct = await Product.findByIdAndUpdate(id, payLoad, {
    new: true,
  });
  return updatedProduct;
};

export const ProductServices = {
  createProduct,
  getProducts,
  getProductsById,
  deleteProduct,
  updateProduct,
};
