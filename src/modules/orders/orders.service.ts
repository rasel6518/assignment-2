/* eslint-disable @typescript-eslint/no-explicit-any */
import { TOrder } from "./orders.interface";
import { Order } from "./orders.model";

const createOrder = async (payload: TOrder) => {
    try {
        const result = await Order.create(payload);
        return result;
    } catch (error: any) {
        throw new Error(`Failed to create order: ${error.message}`);
    }
};

const getAllOrder = async () => {
    try {
        return await Order.find().exec();
    } catch (error: any) {
        throw new Error(`Failed to fetch orders: ${error.message}`);
    }
};

const getOrdersByEmail = async (email: string) => {
    try {
        return await Order.find({ email }).exec();
    } catch (error: any) {
        throw new Error(`Failed to fetch orders for email ${email}: ${error.message}`);
    }
};

export const OrderService = {
    createOrder,
    getOrdersByEmail,
    getAllOrder
};
