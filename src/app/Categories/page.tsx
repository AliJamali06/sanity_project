"use client";

import { client } from "@/sanity/lib/client"; // Point to your Sanity client config
import Image from 'next/image';

import React, { useEffect, useState } from "react";

// Define the Product type
interface Product {
  _id: string;
  productName: string;
  price: number;
  image?: {
    asset: {
      url: string;
    };
  };
}

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // GROQ Query for Sanity
        const query = `*[_type == "products"]{
          _id,
          productName,
          price,
          image {
            asset -> {
              url
            }
          }
        }`;

        const data = await client.fetch(query); // Fetching data from Sanity
        setProducts(data); // Setting fetched data
      } catch (err) {
        console.error("Failed to fetch products:", err); // Debugging errors
        setError("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-black text-3xl py-4 px-4">All products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-lg rounded-lg p-4">
            {/* Image Section */}
            <Image 
              src={product.image?.asset?.url || "/placeholder.jpg"}
              alt={product.productName}
              width={300}
              height={300}
              className="w-full h-auto object-cover rounded"
            />
            {/* Product Details */}
            <div className="mt-4">
              <h2 className="text-lg font-bold">{product.productName}</h2>
              <p className="text-gray-700">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;



