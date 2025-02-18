'use client';

import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface Product {
  _id: string;
  name: string;
  price: number;
  image: any; // or more specific type from Sanity
  description?: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ProductDetail({ params }: PageProps) {
  // Fetch product data using params.id
  const product = await getProduct(params.id); // Implement this function

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }
      
      // Create checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: product.name,
          price: product.price,
          image: product.image,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Redirect to Stripe checkout
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

  return (
    <div>
      {/* Your existing product details */}
      <button
        onClick={handleCheckout}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Checkout
      </button>
    </div>
  );
} 