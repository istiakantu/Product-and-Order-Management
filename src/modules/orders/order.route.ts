import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

// Order routes

//Create an order
router.post("/", OrderControllers.createOrder);
// Get all orders
router.get("/", OrderControllers.getAllOrders);

router.get("/", OrderControllers.getOrdersByEmail);

export const OrderRoutes = router;
