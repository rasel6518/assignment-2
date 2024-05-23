import express, { Request, Response } from 'express'
import { ProductsRoute } from './modules/products/products.route'
import { OrdersRoute } from './modules/orders/orders.route'
const app = express()

// parsers

app.use(express.json())

app.use('/api/products', ProductsRoute)
app.use('/api/orders', OrdersRoute)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app