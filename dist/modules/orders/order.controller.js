"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
// Order controllers
// Create an order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield order_service_1.OrderServices.createOrder(orderData);
        res.json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not get the order",
            error: err,
        });
    }
});
// Get all orders
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderServices.getAllOrders();
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
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Order not found",
            error: err,
        });
    }
});
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
exports.OrderControllers = {
    createOrder,
    getAllOrders,
    // getOrdersByEmail,
};
