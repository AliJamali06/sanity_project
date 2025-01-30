// "use client";
// import { useRouter } from "next/navigation";
// import { useCart } from "../context/CartContext";
// import { CartItem } from "../context/CartContext";
// import { client } from "@/sanity/lib/client";
// import imageUrlBuilder from "@sanity/image-url";

// // Initialize Sanity Image Builder
// const builder = imageUrlBuilder(client);
// const urlFor = (source: string) => builder.image(source).url();

// const CartPage = () => {
//   const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();

//   // Calculate total price from cart items
//   const calculateTotal = (): string => {
//     return cartItems
//       .reduce((total, item: CartItem) => total + item.price * item.quantity, 0)
//       .toFixed(2);
//   };

//   if (cartItems.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen text-center">
//         <p className="text-lg font-semibold">Your cart is empty. Add some products!</p>
//         <button
//           onClick={() => router.push("/productpage")}
//           className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
//         >
//           Shop Now
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center p-6 max-w-lg mx-auto">
//       <h1 className="text-2xl font-bold text-center mb-4">Your Cart</h1>
      
//       {cartItems.map((item: CartItem) => (
//         <div key={item._id} className="w-full bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col items-center">
//           <img
//             src={item.image?.asset?._ref ? urlFor(item.image.asset._ref) : "/placeholder.jpg"}
//             alt={item.productName}
//             className="w-32 h-32 object-cover rounded-lg mb-2"
//           />
//           <p className="font-semibold text-center">{item.productName}</p>
//           <p className="text-green-600 text-lg font-bold">${item.price.toFixed(2)}</p>

//           {/* Quantity Control */}
//           <div className="flex items-center mt-2">
//             <button
//               onClick={() => updateQuantity(item._id, item.quantity - 1)}
//               className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-lg hover:bg-gray-300"
//               disabled={item.quantity <= 1}
//             >
//               -
//             </button>
//             <span className="px-4">{item.quantity}</span>
//             <button
//               onClick={() => updateQuantity(item._id, item.quantity + 1)}
//               className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-lg hover:bg-gray-300"
//             >
//               +
//             </button>
//           </div>

//           {/* Remove Button */}
//           <button
//             onClick={() => removeFromCart(item._id)}
//             className="mt-2 text-red-500 underline hover:text-red-700"
//           >
//             Remove
//           </button>
//         </div>
//       ))}

//       {/* Total Amount */}
//       <div className="w-full text-center py-4 border-t border-gray-300">
//         <p className="text-lg font-bold">Total: <span className="text-green-600">${calculateTotal()}</span></p>
//       </div>

//       {/* Checkout and Clear Cart Buttons */}
//       <div className="w-full flex flex-col gap-4">
//         <button
//           onClick={() => clearCart()}
//           className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600"
//         >
//           Clear Cart
//         </button>
//         <button
//           className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600"
//         >
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
"use client";

import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import { CartItem } from "../context/CartContext";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect } from "react";

// Initialize Sanity Image Builder
const builder = imageUrlBuilder(client);
const urlFor = (source: { _ref: string }) => builder.image(source._ref).url();

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const router = useRouter();

  // Calculate total price
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Auto-update cart when returning from product detail page
  useEffect(() => {
    console.log("Cart updated: ", cartItems);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <p className="text-lg font-semibold">Your cart is empty. Add some products!</p>
        <button
          onClick={() => router.push("/productpage")}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Your Cart</h1>
      
      {cartItems.map((item) => (
        <div key={item._id} className="w-full bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col items-center">
          <img
            src={item.image?.asset?._ref ? urlFor(item.image.asset) : "/placeholder.jpg"}
            alt={item.productName}
            className="w-32 h-32 object-cover rounded-lg mb-2"
          />

          <p className="font-semibold text-center">{item.productName}</p>
          <p className="text-green-600 text-lg font-bold">${item.price.toFixed(2)}</p>

          {/* Quantity Control */}
          <div className="flex items-center mt-2">
            <button
              onClick={() => updateQuantity(item._id, item.quantity - 1)}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-lg hover:bg-gray-300"
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span className="px-4">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item._id, item.quantity + 1)}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-lg hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeFromCart(item._id)}
            className="mt-2 text-red-500 underline hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Total Amount */}
      <div className="w-full text-center py-4 border-t border-gray-300">
        <p className="text-lg font-bold">Total: <span className="text-green-600">${calculateTotal()}</span></p>
      </div>

      {/* Checkout and Clear Cart Buttons */}
      <div className="w-full flex flex-col gap-4">
        <button
          onClick={() => clearCart()}
          className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600"
        >
          Clear Cart
        </button>
        <button
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
