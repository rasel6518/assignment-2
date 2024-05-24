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
exports.OrderController = void 0;
const orders_service_1 = require("./orders.service");
const orders_validator_1 = require("./orders.validator");
const createOder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productdata = req.body;
    //Validation with zod
    const zodParsedData = orders_validator_1.OrderValidationSchema.parse(productdata);
    const result = yield orders_service_1.OrderService.createOrder(zodParsedData);
    res.json({
        success: true,
        message: "Order created successfully!",
        data: result
    });
});
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    try {
        let result;
        if (email && typeof email === 'string') {
            result = yield orders_service_1.OrderService.getOrdersByEmail(email);
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: result,
            });
        }
        else {
            result = yield orders_service_1.OrderService.getAllOrder();
            res.status(200).json({
                success: true,
                message: "All orders fetched successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch orders!",
            error: err.message,
        });
    }
});
exports.OrderController = {
    createOder,
    getOrders,
};
