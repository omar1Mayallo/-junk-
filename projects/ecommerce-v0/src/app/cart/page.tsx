"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingBag,
  FiTruck,
  FiShield,
  FiTag,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Aviator Sunglasses",
      price: 29.99,
      originalPrice: 39.99,
      quantity: 1,
      image: "/products/glass.png?height=200&width=200",
      color: "Black",
      size: "One Size",
      href: "/products/aviator-sunglasses",
    },
    {
      id: 2,
      name: "Leather Backbag",
      price: 99.99,
      originalPrice: 129.99,
      quantity: 1,
      image: "/products/bag.png?height=200&width=200",
      color: "Brown",
      size: "Medium",
      href: "/products/leather-backbag",
    },
    {
      id: 3,
      name: "Graphic T-Shirt",
      price: 19.99,
      originalPrice: 24.99,
      quantity: 2,
      image: "/products/shirt.png?height=200&width=200",
      color: "Navy",
      size: "Large",
      href: "/products/graphic-shirt",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setAppliedPromo("SAVE10");
      setPromoCode("");
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const savings = cartItems.reduce((sum, item) => {
    const itemSavings = item.originalPrice
      ? (item.originalPrice - item.price) * item.quantity
      : 0;
    return sum + itemSavings;
  }, 0);
  const promoDiscount = appliedPromo === "SAVE10" ? subtotal * 0.1 : 0;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = (subtotal - promoDiscount) * 0.08;
  const total = subtotal - promoDiscount + shipping + tax;

  return (
    <div className="min-h-screen">
      <main>
        {/* Breadcrumb */}
        <section className="py-4 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">Shopping Cart</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="py-12 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Shopping Cart
            </h1>
            <p className="text-muted-foreground">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
              your cart
            </p>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiShoppingBag className="h-12 w-12 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Looks like you haven't added anything to your cart yet. Start
                  shopping to fill it up!
                </p>
                <Button size="lg" asChild>
                  <Link href="/shop">Continue Shopping</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-background rounded-2xl p-6 shadow-sm border"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-32 h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                          <Link href={item.href}>
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </Link>
                        </div>

                        <div className="flex-1 space-y-3">
                          <div>
                            <Link
                              href={item.href}
                              className="hover:text-primary transition-colors"
                            >
                              <h3 className="font-semibold">{item.name}</h3>
                            </Link>
                            <div className="text-sm text-muted-foreground">
                              Color: {item.color} • Size: {item.size}
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold">
                              ${item.price}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                ${item.originalPrice}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                              >
                                <FiMinus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                              >
                                <FiPlus className="h-4 w-4" />
                              </Button>
                            </div>

                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <FiTrash2 className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="space-y-6">
                  {/* Promo Code */}
                  <div className="bg-background rounded-2xl p-6 shadow-sm border">
                    <h3 className="font-semibold mb-4">Promo Code</h3>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button onClick={applyPromoCode} disabled={!promoCode}>
                        Apply
                      </Button>
                    </div>
                    {appliedPromo && (
                      <div className="mt-3 flex items-center text-green-600 text-sm">
                        <FiTag className="mr-1 h-4 w-4" />
                        {appliedPromo} applied - 10% off
                      </div>
                    )}
                  </div>

                  {/* Order Summary */}
                  <div className="bg-background rounded-2xl p-6 shadow-sm border">
                    <h3 className="font-semibold mb-4">Order Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      {savings > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Savings</span>
                          <span>-${savings.toFixed(2)}</span>
                        </div>
                      )}
                      {appliedPromo && (
                        <div className="flex justify-between text-green-600">
                          <span>Promo Discount</span>
                          <span>-${promoDiscount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>
                          {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full mt-6" size="lg">
                      Proceed to Checkout
                    </Button>
                  </div>

                  {/* Benefits */}
                  <div className="bg-background rounded-2xl p-6 shadow-sm border">
                    <h3 className="font-semibold mb-4">Your Benefits</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <FiTruck className="mr-2 h-4 w-4 text-green-600" />
                        <span>
                          {shipping === 0
                            ? "Free shipping included"
                            : "Free shipping on orders over $50"}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FiShield className="mr-2 h-4 w-4 text-blue-600" />
                        <span>Secure checkout</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FiTag className="mr-2 h-4 w-4 text-purple-600" />
                        <span>30-day return policy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Continue Shopping */}
        {cartItems.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Need something else?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Continue shopping to discover more amazing products
                </p>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/shop">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
