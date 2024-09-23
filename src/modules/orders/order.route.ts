import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

// Order routes

//Create an order
router.post("/", OrderControllers.createOrder);
// Get all orders or email search term
router.get("/", OrderControllers.getOrders);

export const OrderRoutes = router;
