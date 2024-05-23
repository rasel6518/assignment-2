import { TOrder } from "./orders.interface"
import { Order } from "./orders.model"

const createOrder = async (payload: TOrder) => {
    const result = await Order.create(payload)
    return result
}

export const OrderService = {
    createOrder,

}