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
exports.productService = void 0;
const products_model_1 = require("./products.model");
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.create(payload);
    return result;
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.find();
    return result;
});
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findById(id);
    return result;
});
const updatedProductById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findByIdAndUpdate(id, payload);
    return result;
});
exports.productService = {
    createProduct,
    getAllProducts,
    getProductById,
    updatedProductById
};
