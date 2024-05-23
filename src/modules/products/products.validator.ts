import { z } from "zod";

export const VariantSchema = z.object({
    type: z.string().min(1, { message: "Type is required" }),
    value: z.string().min(1, { message: "Value is required" }),
});

export const InventorySchema = z.object({
    quantity: z.number().min(0, { message: "Quantity must be at least 0" }),
    inStock: z.boolean(),
});

export const ProductValidationSchema = z.object({
    name: z.string().min(1, { message: "Product Name is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    price: z.number().positive({ message: "Price must be a positive number" }),
    category: z.string().min(1, { message: "Category is required" }),
    tags: z.array(z.string().min(1, { message: "Tag must be a non-empty string" })),
    variants: z.array(VariantSchema),
    inventory: InventorySchema,
});


