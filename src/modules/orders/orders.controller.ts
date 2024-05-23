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


export const OrderController = {
    createOder,

}