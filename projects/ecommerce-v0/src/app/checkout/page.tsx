"use client";

import type React from "react";
import { useState } from "react";
import { FiLock, FiCreditCard, FiCheck } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
    phone: "",
    saveInfo: false,
    shippingMethod: "standard",
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const cartItems = [
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
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const shippingOptions = [
    {
      id: "standard",
      name: "Standard Shipping",
      price: 9.99,
      time: "5-7 business days",
    },
    {
      id: "express",
      name: "Express Shipping",
      price: 19.99,
      time: "2-3 business days",
    },
    {
      id: "overnight",
      name: "Overnight Shipping",
      price: 39.99,
      time: "1 business day",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Process order
      console.log("Processing order...");
    }
  };

  return (
    <div className="min-h-screen">
      <main>
        {/* Header */}
        <section className="py-8 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl lg:text-3xl font-bold">Checkout</h1>
              <div className="flex items-center text-sm text-muted-foreground">
                <FiLock className="mr-1 h-4 w-4" />
                Secure Checkout
              </div>
            </div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-8">
              {[
                { step: 1, title: "Information" },
                { step: 2, title: "Shipping" },
                { step: 3, title: "Payment" },
              ].map((item) => (
                <div key={item.step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= item.step
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > item.step ? (
                      <FiCheck className="h-4 w-4" />
                    ) : (
                      item.step
                    )}
                  </div>
                  <span className="ml-2 text-sm font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checkout Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Contact Information */}
                  {currentStep === 1 && (
                    <div className="bg-background rounded-2xl p-8 shadow-sm border">
                      <h2 className="text-xl font-bold mb-6">
                        Contact Information
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            placeholder="your@email.com"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="firstName"
                              className="block text-sm font-medium mb-2"
                            >
                              First Name *
                            </label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  firstName: e.target.value,
                                })
                              }
                              placeholder="John"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="lastName"
                              className="block text-sm font-medium mb-2"
                            >
                              Last Name *
                            </label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  lastName: e.target.value,
                                })
                              }
                              placeholder="Doe"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium mb-2"
                          >
                            Address *
                          </label>
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                address: e.target.value,
                              })
                            }
                            placeholder="123 Main Street"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium mb-2"
                            >
                              City *
                            </label>
                            <Input
                              id="city"
                              value={formData.city}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  city: e.target.value,
                                })
                              }
                              placeholder="New York"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="state"
                              className="block text-sm font-medium mb-2"
                            >
                              State *
                            </label>
                            <Select
                              value={formData.state}
                              onValueChange={(value) =>
                                setFormData({ ...formData, state: value })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="NY">New York</SelectItem>
                                <SelectItem value="CA">California</SelectItem>
                                <SelectItem value="TX">Texas</SelectItem>
                                <SelectItem value="FL">Florida</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label
                              htmlFor="zipCode"
                              className="block text-sm font-medium mb-2"
                            >
                              ZIP Code *
                            </label>
                            <Input
                              id="zipCode"
                              value={formData.zipCode}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  zipCode: e.target.value,
                                })
                              }
                              placeholder="10001"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium mb-2"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="saveInfo"
                            checked={formData.saveInfo}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                saveInfo: checked as boolean,
                              })
                            }
                          />
                          <label htmlFor="saveInfo" className="text-sm">
                            Save this information for next time
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Shipping Method */}
                  {currentStep === 2 && (
                    <div className="bg-background rounded-2xl p-8 shadow-sm border">
                      <h2 className="text-xl font-bold mb-6">
                        Shipping Method
                      </h2>
                      <div className="space-y-4">
                        {shippingOptions.map((option) => (
                          <div
                            key={option.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                              formData.shippingMethod === option.id
                                ? "border-primary bg-primary/5"
                                : "border-muted"
                            }`}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                shippingMethod: option.id,
                              })
                            }
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">{option.name}</div>
                                <div className="text-sm text-muted-foreground">
                                  {option.time}
                                </div>
                              </div>
                              <div className="font-bold">${option.price}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Payment */}
                  {currentStep === 3 && (
                    <div className="bg-background rounded-2xl p-8 shadow-sm border">
                      <h2 className="text-xl font-bold mb-6">
                        Payment Information
                      </h2>
                      <Tabs
                        value={formData.paymentMethod}
                        onValueChange={(value) =>
                          setFormData({ ...formData, paymentMethod: value })
                        }
                      >
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="card">Credit Card</TabsTrigger>
                          <TabsTrigger value="paypal">PayPal</TabsTrigger>
                        </TabsList>

                        <TabsContent value="card" className="space-y-4 mt-6">
                          <div>
                            <label
                              htmlFor="cardNumber"
                              className="block text-sm font-medium mb-2"
                            >
                              Card Number *
                            </label>
                            <Input
                              id="cardNumber"
                              value={formData.cardNumber}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  cardNumber: e.target.value,
                                })
                              }
                              placeholder="1234 5678 9012 3456"
                              required
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label
                                htmlFor="expiryDate"
                                className="block text-sm font-medium mb-2"
                              >
                                Expiry Date *
                              </label>
                              <Input
                                id="expiryDate"
                                value={formData.expiryDate}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    expiryDate: e.target.value,
                                  })
                                }
                                placeholder="MM/YY"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="cvv"
                                className="block text-sm font-medium mb-2"
                              >
                                CVV *
                              </label>
                              <Input
                                id="cvv"
                                value={formData.cvv}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    cvv: e.target.value,
                                  })
                                }
                                placeholder="123"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="nameOnCard"
                              className="block text-sm font-medium mb-2"
                            >
                              Name on Card *
                            </label>
                            <Input
                              id="nameOnCard"
                              value={formData.nameOnCard}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  nameOnCard: e.target.value,
                                })
                              }
                              placeholder="John Doe"
                              required
                            />
                          </div>
                        </TabsContent>

                        <TabsContent value="paypal" className="mt-6">
                          <div className="text-center py-8">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <FiCreditCard className="h-8 w-8 text-blue-600" />
                            </div>
                            <p className="text-muted-foreground">
                              You will be redirected to PayPal to complete your
                              payment securely.
                            </p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(currentStep - 1)}
                      >
                        Back
                      </Button>
                    )}
                    <div className="ml-auto">
                      <Button type="submit">
                        {currentStep === 3 ? "Complete Order" : "Continue"}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                {/* Order Items */}
                <div className="bg-background rounded-2xl p-6 shadow-sm border">
                  <h3 className="font-semibold mb-4">Order Summary</h3>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <div className="text-xs text-muted-foreground">
                            Qty: {item.quantity}
                          </div>
                        </div>
                        <div className="font-medium">${item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-background rounded-2xl p-6 shadow-sm border">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
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
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                  <div className="flex items-center text-green-800">
                    <FiLock className="mr-2 h-4 w-4" />
                    <span className="text-sm font-medium">
                      Your payment information is secure
                    </span>
                  </div>
                  <p className="text-green-700 text-xs mt-1">
                    We use industry-standard encryption to protect your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
