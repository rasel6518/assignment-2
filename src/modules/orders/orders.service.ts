import { TOrder } from "./orders.interface"
import { Order } from "./orders.model"

const createOrder = async (payload: TOrder) => {
    const result = await Order.create(payload)
    return result
}

const getAllOrder = async () => {
    return await Order.find().exec();
};
const getOrdersByEmail = async (email: string) => {
    return await Order.find({ email }).exec();
};

export const OrderService = {
    createOrder,
    getOrdersByEmail,
    getAllOrder

}