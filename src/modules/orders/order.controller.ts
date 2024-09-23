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

// Get orders
const getOrders = async (req: Request, res: Response) => {
  try {
    const email: string = req.query.email as string;
    const result = await OrderServices.getOrders(email);
    if (email) {
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Order fetched successfully!",
        data: result,
      });
    }
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: "Order not found",
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getOrders,
};
