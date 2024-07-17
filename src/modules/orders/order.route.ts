import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

// Order routes

//create an order
router.post("/", OrderControllers.createOrder);

export const OrderRoutes = router;
