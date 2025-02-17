import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function GET(req: Request) {
  try {
    // Get the last 30 days of payments
    const thirtyDaysAgo = Math.floor(Date.now() / 1000) - 30 * 24 * 60 * 60;
    
    const payments = await stripe.paymentIntents.list({
      limit: 10,
      created: { gte: thirtyDaysAgo },
    });

    // Process the payments data
    const recentOrders = payments.data.map((payment) => ({
      id: payment.id,
      customerName: 'Customer', // Since we don't store customer names
      amount: payment.amount / 100, // Convert from cents to dollars
      status: payment.status,
      date: new Date(payment.created * 1000).toISOString(),
      items: [], // We don't have item details in basic Stripe data
    }));

    // Calculate statistics
    const totalSales = recentOrders.reduce((sum, order) => sum + order.amount, 0);
    const totalOrders = recentOrders.length;
    const averageOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;

    return NextResponse.json({
      totalSales,
      totalOrders,
      averageOrderValue,
      recentOrders,
    });
  } catch (error) {
    console.error('Dashboard data fetch error:', error);
    return NextResponse.json(
      { error: 'Error fetching dashboard data' },
      { status: 500 }
    );
  }
} 