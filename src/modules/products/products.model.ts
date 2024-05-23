import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./products.interface";

const VariantSchema = new Schema<TVariant>({
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
});

const InventorySchema = new Schema<TInventory>({
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
    },
    inStock: {
        type: Boolean,
        required: true
    },
});

const ProductSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: [true, "Product Name is required"],
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    tags: {
        type: [String],
        required: true
    },
    variants: {
        type: [VariantSchema],
        required: true
    },
    inventory: {
        type: InventorySchema,
        required: true
    },
});

export const Product = model<TProduct>('Product', ProductSchema)