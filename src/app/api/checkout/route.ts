import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia'
});

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.NEXT_PUBLIC_BASE_URL) {
    console.error('Missing environment variables');
    return NextResponse.json(
      { error: 'Internal server configuration error' },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { name, price, image } = body;

    if (!name || typeof price !== 'number' || !image) {
      return NextResponse.json(
        { error: 'Missing required fields or invalid price' },
        { status: 400 }
      );
    }

    // Ensure base URL doesn't end with a slash
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!.replace(/\/$/, '');

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: name,
              images: [image],
            },
            unit_amount: Math.round(price * 100), // Convert to cents and ensure it's an integer
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
} 