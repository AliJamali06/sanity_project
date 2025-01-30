"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiShoppingCart } from "react-icons/pi";
import { createClient } from "@sanity/client";

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number; // Optional property
  badge?: string; // Optional property
  description?: string; // Optional property
  inventory: number;
  imageUrl: string; // Image URL string
  category: {
    title: string; // Category title
  };
  tags?: string[]; // Optional array of tags
}

// Initialize Sanity client
const client = createClient({
  projectId: "9khvxqrm", 
  dataset: "production", 
  useCdn: true, 
  apiVersion: "2025-01-20", 
});

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]); // Use the Product[] type

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products"]{
        _id,
        title,
        price,
        priceWithoutDiscount,
        badge,
        description,
        inventory,
        "imageUrl": image.asset->url,
        category->{
          title
        },
        tags
      }`;
      const data: Product[] = await client.fetch(query); // Explicitly type the fetched data
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="font-[sans-serif] mx-auto lg:max-w-7xl w-full px-4 mb-24">
      <h2 className="text-black text-center text-3xl font-bold mb-10">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative"
          >
            {/* Badge */}
            {product.badge && (
              <button
                className={`w-16 h-7 font-normal text-xs text-white rounded-md absolute top-4 left-4 z-10 ${
                  product.badge.toLowerCase() === "new"
                    ? "bg-[#3ad680]"
                    : product.badge.toLowerCase() === "sale"
                      ? "bg-[#F5813F]"
                      : "bg-gray-500"
                }`}
              >
                {product.badge}
              </button>
            )}

            {/* Image */}
            <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-72">
              <Image
                src={product.imageUrl}
                alt={product.title}
                layout="responsive"
                width={312}
                height={312}
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-4 bg-white flex flex-col gap-2">
              <h3 className="text-lg font-bold text-[#007580]">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <h4 className="text-lg text-black font-bold mt-1">
                ${product.price}{" "}
                {product.priceWithoutDiscount && (
                  <span className="line-through text-gray-500 text-sm">
                    ${product.priceWithoutDiscount}
                  </span>
                )}
              </h4>
              {product.inventory <= 5 && product.inventory > 0 && (
                <p className="text-sm text-red-500">
                  Only {product.inventory} left in stock!
                </p>
              )}
              {product.inventory === 0 && (
                <p className="text-sm text-gray-500">Out of Stock</p>
              )}

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Add to Cart Button */}
            <div className="p-4 bg-white flex items-center justify-between">
              <button className="w-12 h-12 bg-[#029FAE] text-black flex items-center justify-center rounded-md">
                <PiShoppingCart className="text-white w-8 h-8" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
