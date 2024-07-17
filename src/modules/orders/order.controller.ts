import { Request, Response } from "express";
import { OrderServices } from "./order.service";

// Order controllers

// Create an order
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

// Get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrders();
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetched orders",
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
