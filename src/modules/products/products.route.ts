import express from 'express'
import { productController } from './products.controller'
const router = express.Router()

router.post('/', productController.createProduct)
router.get('/:productId', productController.getProductById)
router.get('/', productController.getAllProducts)
router.put('/:productId', productController.updatedProductById)
router.delete('/:productId', productController.deleteProductById);

export const ProductsRoute = router