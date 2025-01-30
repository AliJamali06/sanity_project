
"use client"
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
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
        const data = await client.fetch(query);
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.image?.asset?.url || "/placeholder.jpg"}
              alt={product.productName}
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-4">
              <h2 className="text-lg font-bold">{product.productName}</h2>
              <p className="text-gray-700">${product.price}</p>
              <Link href={`/productdetails/${product._id}`}>
                <p className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 block text-center">
                  more Details
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;  

