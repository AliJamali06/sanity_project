import { groq } from "next-sanity";

// Fetch all products
export const allProducts = groq`*[_type == "product"]`;

// Fetch the first four products
export const four = groq`*[_type == "product"][0..3]`;
