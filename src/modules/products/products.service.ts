/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from "./products.interface"
import { Product } from "./products.model"

const createProduct = async (payload: TProduct) => {
    const result = await Product.create(payload)
    return result
}
const getAllProducts = async () => {
    const result = await Product.find()
    return result
}
const getProductById = async (id: string) => {
    const result = await Product.findById(id)
    return result;
}
const updatedProductById = async (id: string, payload: Partial<TProduct>) => {
    try {
        const result = await Product.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
        return result;
    } catch (error: any) {
        console.error('Error updating product by ID:', error);
        throw new Error(`Could not update product with ID ${id}: ${error.message}`);
    }
};

const deleteProductById = async (id: string) => {
    try {
        const result = await Product.findByIdAndDelete(id);
        return result;
    } catch (error) {
        console.error('Error deleting product by ID:', error);
        throw new Error(`Could not delete product with ID ${id}: ${error.message}`);
    }
};




export const productService = {
    createProduct,
    getAllProducts,
    getProductById,
    updatedProductById,
    deleteProductById
}