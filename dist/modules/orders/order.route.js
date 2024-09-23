"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
// Order routes
//Create an order
router.post("/", order_controller_1.OrderControllers.createOrder);
// Get all orders or email search term
router.get("/", order_controller_1.OrderControllers.getOrders);
exports.OrderRoutes = router;
