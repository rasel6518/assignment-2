import express from 'express'
import { OrderController } from './orders.controller'
const router = express.Router()

router.post('/', OrderController.createOder)
router.get("/", OrderController.getOrders);



export const OrdersRoute = router