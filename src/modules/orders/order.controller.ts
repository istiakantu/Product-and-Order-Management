import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidation from "./order.validation";
import { z } from "zod";

// Order controllers

// Create an order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const ValidationData = orderValidation.parse(orderData);

    const result = await OrderServices.createOrder(ValidationData);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      // Zod validation errors handling
      res.status(400).json({
        success: false,
        message: "Validation failed",
        error,
      });
    } else {
      // Other errors handling
      res.status(400).json({
        success: false,
        message: (error as Error).message,
      });
    }
  }
};

// Get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrders();
    if (!result.length) {
      return res.status(404).json({
        success: false,
        message: "No order found yet",
      });
    }
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: "Order not found",
      error: err,
    });
  }
};

// Get Orders by email
// const getOrdersByEmail = async (req: Request, res: Response) => {
//   try {
//     const { email } = req.query;
//     if (!email || typeof email !== "string") {
//       return res.status(400).json({
//         success: false,
//         message: "Valid email required",
//       });
//     }

//     const result = await OrderServices.getOrdersByEmail(email);
//     if (result.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: `No orders found for email '${email}'`,
//         data: [],
//       });
//     }
//     res.status(200).json({
//       success: true,
//       message: "Orders fetched successfully for user email!",
//       data: result,
//     });
//   } catch (err: unknown) {
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch orders",
//     });
//   }
// };

export const OrderControllers = {
  createOrder,
  getAllOrders,
  // getOrdersByEmail,
};
