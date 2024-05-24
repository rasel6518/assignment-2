"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const products_service_1 = require("./products.service");
const products_validator_1 = require("./products.validator");
// Product create controller
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productdata = req.body;
    //Validation with zod
    const zodParsedData = products_validator_1.ProductValidationSchema.parse(productdata);
    const result = yield products_service_1.productService.createProduct(zodParsedData);
    res.json({
        success: true,
        message: "Product created successfully!",
        data: result
    });
});
// Product Get All controller
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.query;
    try {
        let result;
        if (searchTerm && typeof searchTerm === 'string') {
            result = yield products_service_1.productService.searchProducts(searchTerm);
            res.status(200).json({
                success: true,
                message: `Products matching search term '${searchTerm}' fetched successfully!`,
                data: result,
            });
        }
        else {
            result = yield products_service_1.productService.getAllProducts();
            res.status(200).json({
                success: true,
                message: "Products are fetched successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch products!",
            error: err.message,
        });
    }
});
// Product Get By Id controller
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield products_service_1.productService.getProductById(productId);
        res.status(200).json({
            success: true,
            message: "Products are fetched successfully !",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch Products!",
            error: err,
        });
    }
});
// Product Upated by Id controller
const updatedProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productdata = req.body;
        //validation with zod 
        const zodParsedData = products_validator_1.ProductValidationSchema.parse(productdata);
        const result = yield products_service_1.productService.updatedProductById(productId, zodParsedData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch Products!",
            error: err,
        });
    }
});
// Product Delete By ID controller
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield products_service_1.productService.deleteProductById(productId);
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
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Could not delete Product!',
            error: err.message,
        });
    }
});
exports.productController = {
    createProduct,
    getAllProducts,
    getProductById,
    updatedProductById,
    deleteProductById
};
