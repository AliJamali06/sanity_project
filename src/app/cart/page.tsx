"use client";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import { CartItem } from "../context/CartContext"; // Only import CartItem
import { client } from "@/sanity/lib/client"; // Import your sanity client
import imageUrlBuilder from "@sanity/image-url";

// Initialize Sanity Image Builder
const builder = imageUrlBuilder(client);
const urlFor = (source: string) => builder.image(source).url();

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const router = useRouter();

  // Calculate total price from cart items
  const calculateTotal = (): string => {
    return cartItems
      .reduce((total, item: CartItem) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Your cart is empty. Add some products!</p>
        <button
          onClick={() => router.push("/productpage")}
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div style={{ flex: 3 }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Your Cart</h1>
        {cartItems.map((item: CartItem) => (
          <div key={item._id} style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
            {/* Ensure both _ref and _type are defined for image */}
            <img
              src={item.image?.asset?._ref ? urlFor(item.image.asset._ref) : "/placeholder.jpg"}
              alt={item.productName}
              style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "20px" }}
            />
            <div>
              <p>{item.productName} (x{item.quantity}): ${item.price * item.quantity}</p>
              <button
                onClick={() => removeFromCart(item._id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#ff3b3b",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          flex: 1,
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Order Summary</h2>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {cartItems.map((item: CartItem) => (
            <li key={item._id} style={{ marginBottom: "10px" }}>
              <p>{item.productName} (x{item.quantity}): ${item.price * item.quantity}</p>
            </li>
          ))}
        </ul>
        <p style={{ fontWeight: "bold" }}>Total Price: ${calculateTotal()}</p>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Proceed to Checkout
        </button>
        <button
          onClick={() => router.push("/productpage")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartPage;
