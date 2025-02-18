"use client";

import { useCart, CartItem } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';

const builder = imageUrlBuilder(client);
const urlFor = (source: string) => builder.image(source).url();

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const router = useRouter();

  // ✅ Sync cart with LocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Load cart from LocalStorage on page refresh
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (storedCart.length > 0) {
      storedCart.forEach((item: CartItem) => updateQuantity(item._id, item.quantity));
    }
  }, [updateQuantity]);

  // ✅ Calculate Total Price
  const calculateTotal = (): string => {
    return cartItems.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      // Calculate total price and prepare line items
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Cart Items',
          price: parseFloat(calculateTotal()), // Convert string to number
          image: cartItems[0]?.image?.asset?._ref 
            ? urlFor(cartItems[0].image.asset._ref) 
            : '/placeholder.jpg',
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to initiate checkout. Please try again.');
    }
  };

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
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Your Cart</h1>

      {cartItems.map((item: CartItem) => (
        <div key={item._id} className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4">
          {/* Image */}
          <Image 
            src={urlFor(item.image).url()}
            alt={item.name}
            width={100}
            height={100}
            className="w-24 h-24 object-cover rounded-md"
          />

          {/* Item Details */}
          <div className="flex-1 ml-4">
            <p className="font-semibold">{item.title}</p>
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
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeFromCart(item._id)}
            className="text-white w-40 h-10 bg-red-500 rounded-lg hover:text-red-700 ml-auto"
          >
          Remove
          </button>
        </div>
      ))}

      {/* Total Amount */}
      <div className="w-full flex justify-center items-center py-6 px-4 bg-white rounded-lg shadow-lg border-t border-gray-300">
  <p className="text-xl font-semibold text-gray-800">
    Total: <span className="text-green-600 text-2xl">${calculateTotal()}</span>
  </p>
</div>

      {/* Checkout and Clear Cart Buttons */}
      <div className="w-full flex flex-col gap-4">
        <button
          onClick={clearCart}
          className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600"
        >
          Clear Cart
        </button>
        <button
          onClick={handleCheckout}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
          disabled={cartItems.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
