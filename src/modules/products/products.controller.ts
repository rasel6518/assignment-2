/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express"
import { productService } from "./products.service"
import { ProductValidationSchema } from "./products.validator"



// Product create controller


const createProduct = async (req: Request, res: Response) => {

    const productdata = req.body

    //Validation with zod
    const zodParsedData = ProductValidationSchema.parse(productdata)

    const result = await productService.createProduct(zodParsedData)
    res.json({
        success: true,
        message: "Product created successfully!",
        data: result
    })

}

// Product Get All controller

const getAllProducts = async (req: Request, res: Response) => {
    const { searchTerm } = req.query;

    try {
        let result;
        if (searchTerm && typeof searchTerm === 'string') {
            result = await productService.searchProducts(searchTerm);
            res.status(200).json({
                success: true,
                message: `Products matching search term '${searchTerm}' fetched successfully!`,
                data: result,
            });
        } else {
            result = await productService.getAllProducts();
            res.status(200).json({
                success: true,
                message: "Products are fetched successfully!",
                data: result,
            });
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not fetch products!",
            error: err.message,
        });
    }
};
// Product Get By Id controller
const getProductById = async (req: Request, res: Response) => {

    try {


        const { productId } = req.params;
        const result = await productService.getProductById(productId);

        res.status(200).json({
            success: true,
            message: "Products are fetched successfully !",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not fetch Products!",
            error: err,
        });



    }
}

// Product Upated by Id controller

const updatedProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const productdata = req.body

        //validation with zod 

        const zodParsedData = ProductValidationSchema.parse(productdata)
        const result = await productService.updatedProductById(productId, zodParsedData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not fetch Products!",
            error: err,
        });
    }

}

// Product Delete By ID controller

const deleteProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productService.deleteProductById(productId);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: 'Product not found!',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: null,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: 'Could not delete Product!',
            error: err.message,
        });
    }
};

export const productController = {
    createProduct,
    getAllProducts,
    getProductById,
    updatedProductById,
    deleteProductById
}