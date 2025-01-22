"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

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

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const { productId } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        console.log("Product ID:", productId);
        const query = `*[_type == "products" && _id == $productId][0]{
          _id,
          productName,
          price,
          image {
            asset -> {
              url
            }
          }
        }`;
        const data = await client.fetch(query, { productId });
        if (data) {
          setProduct(data);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError("Failed to fetch product details. Please try again later.");
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <img
        src={product.image?.asset?.url || "/placeholder.jpg"}
        alt={product.productName}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{product.productName}</h1>
      <p className="text-lg text-gray-700">${product.price}</p>
    </div>
  );
};

export default ProductDetails;
