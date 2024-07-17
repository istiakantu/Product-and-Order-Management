import { Request, Response } from "express";
import { OrderServices } from "./order.service";

// Order controllers

// Create a Order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const result = await OrderServices.createOrder(orderData);

    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not get the order",
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
};
