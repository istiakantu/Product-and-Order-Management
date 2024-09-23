import Product from "../products/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

//Order Services

// Create an Order

const createOrder = async (order: TOrder) => {
  const id = order.productId;
  const ProductData = await Product.findById(id);
  const NewQuantity =
    (ProductData?.inventory.quantity as number) - order.quantity;
  if (!ProductData) {
    throw new Error("Cloudn't found the product");
  } else {
    if (
      ProductData.inventory.inStock &&
      ProductData.inventory.quantity > 0 &&
      ProductData.inventory.quantity >= order.quantity
    ) {
      const result = await Order.create(order);
      const UpdateData = await Product.updateOne(
        { _id: ProductData.id },
        {
          "inventory.quantity": NewQuantity,
          "inventory.inStock": NewQuantity > 0,
        }
      );
      console.log(UpdateData);
      return result;
    } else {
      throw new Error("Insufficient quantity available in inventory");
    }
  }
};

// Get Order
const getOrders = async (email: string) => {
  //eslint-disable-next-line
  const filter: any = {};
  if (email) {
    filter.email = email;
  }
  const result = await Order.find(filter);
  return result;
};

export const OrderServices = {
  createOrder,
  getOrders,
  // getOrdersByEmail,
};
