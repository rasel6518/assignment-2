import express, { Request, Response } from 'express'
import { ProductsRoute } from './modules/products/products.route'
const app = express()

// parsers

app.use(express.json())

app.use('/api/products', ProductsRoute)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app