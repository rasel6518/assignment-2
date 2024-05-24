"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidationSchema = exports.InventorySchema = exports.VariantSchema = void 0;
const zod_1 = require("zod");
exports.VariantSchema = zod_1.z.object({
    type: zod_1.z.string().min(1, { message: "Type is required" }),
    value: zod_1.z.string().min(1, { message: "Value is required" }),
});
exports.InventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().min(0, { message: "Quantity must be at least 0" }),
    inStock: zod_1.z.boolean(),
});
exports.ProductValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Product Name is required" }),
    description: zod_1.z.string().min(1, { message: "Description is required" }),
    price: zod_1.z.number().positive({ message: "Price must be a positive number" }),
    category: zod_1.z.string().min(1, { message: "Category is required" }),
    tags: zod_1.z.array(zod_1.z.string().min(1, { message: "Tag must be a non-empty string" })),
    variants: zod_1.z.array(exports.VariantSchema),
    inventory: exports.InventorySchema,
});
