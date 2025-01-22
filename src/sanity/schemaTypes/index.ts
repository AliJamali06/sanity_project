import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "../schemaTypes/products";
import { categorySchema } from "../schemaTypes/categories";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema],
};