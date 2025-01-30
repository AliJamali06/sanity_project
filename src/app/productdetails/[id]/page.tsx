// "use client";
// import { Product } from "@/types/product";
// import { useRouter } from "next/navigation";
// import { client } from "@/sanity/lib/client";
// import { useEffect, useState } from "react";
// import { useCart } from "../../context/CartContext";
// import Swal from "sweetalert2";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";

// // Initialize Sanity Image Builder
// const builder = imageUrlBuilder(client);
// const urlFor = (source: string) => builder.image(source).url();

// // The ProductDetailPage component
// const ProductDetailPage = ({ params }: { params: { id: string } }) => {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   const { addToCart } = useCart();

//   // Fetch product details from Sanity
//   useEffect(() => {
//     const fetchProductDetail = async () => {
//       try {
//         const query = `*[_type == "products" && _id == $id][0]{
//           _id,
//           title,
//           productName,
//           description,
//           price,
//           image {
//             asset {
//               _ref
//             }
//           }
//         }`;
//         const data = await client.fetch(query, { id: params.id });

//         if (data) {
//           setProduct(data);
//         } else {
//           setError("Product not found.");
//         }
//       } catch (err) {
//         console.error("Failed to fetch product details:", err);
//         setError("Failed to fetch product details. Please try again later.");
//       }
//     };

//     fetchProductDetail();
//   }, [params.id]);

//   const handleAddToCart = () => {
//     if (product) {
//       addToCart({
//         _id: product._id,
//         productName: product.productName,
//         price: product.price,
//         image: product.image || { asset: { _ref: "" } }, // Ensure it matches the expected type
//         quantity: 1,
//         title: product.productName, // Add the missing title property
//         _type: "product",
//       });
//       Swal.fire({
//         icon: "success",
//         title: "Added to Cart",
//         text: `✔️ "${product.productName}" has been added to your cart!`,
//         showConfirmButton: false,
//         timer: 2000,
//       });

//       router.push("/cart");
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Product is not available to add to cart.",
//       });
//     }
//   };

//   // If there is an error in fetching data
//   if (error) {
//     return <div className="flex items-center justify-center h-screen text-red-500 text-lg">{error}</div>;
//   }

//   // If product data is still being fetched
//   if (!product) {
//     return <div className="flex items-center justify-center h-screen text-gray-600 text-lg">Loading...</div>;
//   }

//   // Product detail display
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
//         <div className="flex flex-col md:flex-row items-center gap-6">
//           <Image
//             src={product.image?.asset?._ref ? urlFor(product.image.asset._ref) : "/placeholder.jpg"}
//             alt={product.productName}
//             width={400} // Adjust width
//             height={400} // Adjust height
//             className="w-full md:w-1/2 object-cover rounded-lg"
//           />
//           <div className="flex-1 text-center md:text-left">
//             <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.productName}</h1>
//             <p className="text-gray-600 text-lg mb-4">{product.description}</p>
//             <p className="text-2xl font-semibold text-gray-800 mb-6">${product.price}</p>
//             {product && (
//               <button
//                 onClick={handleAddToCart}
//                 className="w-full md:w-auto bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
//               >
//                 Add to Cart
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

"use client";

import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import Swal from "sweetalert2";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

// Initialize Sanity Image Builder
const builder = imageUrlBuilder(client);
const urlFor = (source: string) => builder.image(source).url();

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-500 text-xl">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
};

// Product Detail Page Component
const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { addToCart } = useCart();

  // Fetch product details from Sanity
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const query = `*[_type == "products" && _id == $id][0]{
          _id,
          title,
          productName,
          description,
          price,
          category,
          availability,
          rating,
          image {
            asset {
              _ref
            }
          }
        }`;
        const data = await client.fetch(query, { id: params.id });

        if (data) {
          setProduct(data);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        console.error("Failed to fetch product details:", err);
        setError("Failed to fetch product details. Please try again later.");
      }
    };

    fetchProductDetail();
  }, [params.id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        _id: product._id,
        productName: product.productName,
        price: product.price,
        image: product.image || { asset: { _ref: "" } },
        quantity: 1,
        title: product.productName,
        _type: "product",
      });
      Swal.fire({
        icon: "success",
        title: "Added to Cart",
        text: `✔️ "${product.productName}" has been added to your cart!`,
        showConfirmButton: false,
        timer: 2000,
      });

      router.push("/cart");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Product is not available to add to cart.",
      });
    }
  };

  // If there is an error in fetching data
  if (error) {
    return <div className="flex items-center justify-center h-screen text-red-500 text-lg">{error}</div>;
  }

  // If product data is still being fetched
  if (!product) {
    return <div className="flex items-center justify-center h-screen text-gray-600 text-lg">Loading...</div>;
  }

  // Image URL Fix
  const imageUrl = product.image?.asset?._ref
    ? urlFor(product.image.asset._ref)
    : "/placeholder.jpg";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Product Image */}
          <Image
            src={imageUrl}
            alt={product.productName}
            width={400}
            height={400}
            className="w-full md:w-1/2 object-cover rounded-lg"
          />

          {/* Product Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.productName}</h1>
            <p className="text-gray-600 text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-gray-800 mb-6">${product.price}</p>

            {/* Availability */}
            <div className="flex items-center text-green-600 font-semibold text-lg mb-2">
              <IoCheckmarkCircleOutline className="mr-2 text-2xl" />
              Availability: <span className="ml-1">{String(product.availability) || "In Stock"}</span>
            </div>

            {/* Category */}
            <div className="flex items-center text-gray-700 font-medium text-lg mb-2">
              <MdCategory className="mr-2 text-2xl" />
              Category: <span className="ml-1">{String(product.category) || "Furniture"}</span>
            </div>

            {/* Star Rating */}
            <div className="flex items-center text-gray-700 font-medium text-lg mb-6">
              <span className="mr-2">Rating:</span>
              <StarRating rating={Number(product.rating) || 4.5} />
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full md:w-auto bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
