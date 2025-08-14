"use client";

import Link from "next/link";
import {
  FiCheck,
  FiTruck,
  FiMail,
  FiDownload,
  FiCalendar,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function OrderConfirmationPage() {
  const orderDetails = {
    orderNumber: "ORD-2024-001234",
    orderDate: "December 19, 2024",
    estimatedDelivery: "December 26, 2024",
    total: 149.97,
    items: [
      {
        id: 1,
        name: "Aviator Sunglasses",
        price: 29.99,
        quantity: 1,
        image: "/products/glass.png?height=80&width=80",
      },
      {
        id: 2,
        name: "Leather Backbag",
        price: 99.99,
        quantity: 1,
        image: "/products/bag.png?height=80&width=80",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
    },
    paymentMethod: "•••• •••• •••• 1234",
  };

  return (
    <div className="min-h-screen">
      <main>
        {/* Success Header */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-green-500/10 to-green-600/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheck className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Order Confirmed!
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Thank you for your purchase. Your order has been successfully
                placed and is being processed.
              </p>
              <div className="bg-background rounded-2xl p-6 shadow-sm border inline-block">
                <div className="text-sm text-muted-foreground">
                  Order Number
                </div>
                <div className="text-xl font-bold text-primary">
                  {orderDetails.orderNumber}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Items */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-background rounded-2xl p-8 shadow-sm border">
                  <h2 className="text-xl font-bold mb-6">Order Items</h2>
                  <div className="space-y-6">
                    {orderDetails.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <div className="text-muted-foreground">
                            Quantity: {item.quantity}
                          </div>
                        </div>
                        <div className="font-bold">${item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-background rounded-2xl p-8 shadow-sm border">
                  <h2 className="text-xl font-bold mb-6">
                    Shipping Information
                  </h2>
                  <div className="space-y-2">
                    <div className="font-medium">
                      {orderDetails.shippingAddress.name}
                    </div>
                    <div className="text-muted-foreground">
                      {orderDetails.shippingAddress.address}
                    </div>
                    <div className="text-muted-foreground">
                      {orderDetails.shippingAddress.city},{" "}
                      {orderDetails.shippingAddress.state}{" "}
                      {orderDetails.shippingAddress.zipCode}
                    </div>
                    <div className="text-muted-foreground">
                      {orderDetails.shippingAddress.country}
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <div className="bg-background rounded-2xl p-6 shadow-sm border">
                  <h3 className="font-semibold mb-4">Order Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Order Date</span>
                      <span>{orderDetails.orderDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment Method</span>
                      <span>{orderDetails.paymentMethod}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${orderDetails.total}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <div className="flex items-center mb-3">
                    <FiTruck className="mr-2 h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">
                      Estimated Delivery
                    </span>
                  </div>
                  <div className="text-blue-700 font-medium">
                    {orderDetails.estimatedDelivery}
                  </div>
                  <p className="text-blue-600 text-sm mt-2">
                    You'll receive tracking information via email once your
                    order ships.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <Link href="/account/orders">Track Your Order</Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FiDownload className="mr-2 h-4 w-4" />
                    Download Receipt
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What's Next?</h2>
              <p className="text-muted-foreground">
                Here's what you can expect from your order
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FiMail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Order Confirmation</h3>
                <p className="text-muted-foreground text-sm">
                  You'll receive an email confirmation with your order details
                  shortly.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FiTruck className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Order Processing</h3>
                <p className="text-muted-foreground text-sm">
                  We'll prepare your order and send you tracking information
                  when it ships.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FiCalendar className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  Your order will be delivered to your address by the estimated
                  date.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Shopping */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Continue Shopping</h2>
              <p className="text-muted-foreground mb-8">
                Discover more amazing products and enjoy free shipping on orders
                over $50.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/shop">Shop Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/account">View Account</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
