import express from 'express'
import { OrderController } from './orders.controller'
const router = express.Router()

router.post('/', OrderController.createOder)


export const OrdersRoute = router