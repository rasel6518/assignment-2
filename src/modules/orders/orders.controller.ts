/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express"
import { OrderService } from "./orders.service"
import { OrderValidationSchema } from "./orders.validator"


const createOder = async (req: Request, res: Response) => {

    const productdata = req.body

    //Validation with zod
    const zodParsedData = OrderValidationSchema.parse(productdata)

    const result = await OrderService.createOrder(zodParsedData)
    res.json({
        success: true,
        message: "Order created successfully!",
        data: result
    })

}


const getOrders = async (req: Request, res: Response) => {
    const { email } = req.query;

    try {
        let result;
        if (email && typeof email === 'string') {
            result = await OrderService.getOrdersByEmail(email);
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: result,
            });
        } else {
            result = await OrderService.getAllOrder();
            res.status(200).json({
                success: true,
                message: "All orders fetched successfully!",
                data: result,
            });
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not fetch orders!",
            error: err.message,
        });
    }
};


export const OrderController = {
    createOder,
    getOrders,


}