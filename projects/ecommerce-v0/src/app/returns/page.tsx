"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiPackage,
  FiRefreshCw,
  FiTruck,
} from "react-icons/fi";

export default function ReturnsPage() {
  const returnSteps = [
    {
      step: 1,
      title: "Initiate Return",
      description: "Contact us within 30 days of delivery to start your return",
      icon: FiRefreshCw,
    },
    {
      step: 2,
      title: "Package Items",
      description: "Pack items in original packaging with all tags attached",
      icon: FiPackage,
    },
    {
      step: 3,
      title: "Ship Back",
      description:
        "Use our prepaid return label or your preferred shipping method",
      icon: FiTruck,
    },
    {
      step: 4,
      title: "Get Refund",
      description:
        "Receive your refund within 5-7 business days after we receive your return",
      icon: FiCheckCircle,
    },
  ];

  const returnableItems = [
    "Clothing items with original tags",
    "Shoes in original box and condition",
    "Accessories in original packaging",
    "Bags with all original components",
  ];

  const nonReturnableItems = [
    "Items worn or used beyond trying on",
    "Items without original tags or packaging",
    "Personalized or customized items",
    "Items damaged by customer",
  ];

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Returns & Exchanges
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Not completely satisfied with your purchase? No problem! We
                offer hassle-free returns within 30 days of delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Return Policy Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FiClock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">30-Day Window</h3>
                <p className="text-muted-foreground">
                  Return items within 30 days of delivery for a full refund
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FiTruck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Returns</h3>
                <p className="text-muted-foreground">
                  We provide prepaid return labels for your convenience
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FiRefreshCw className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Process</h3>
                <p className="text-muted-foreground">
                  Simple 4-step return process with full support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How to Return Items</h2>
              <p className="text-muted-foreground">
                Follow these simple steps to return your items
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {returnSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                          <IconComponent className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">
                            {step.step}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Return Conditions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <FiCheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-xl font-semibold text-green-800">
                      Returnable Items
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {returnableItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-green-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <FiAlertCircle className="h-6 w-6 text-red-600 mr-2" />
                    <h3 className="text-xl font-semibold text-red-800">
                      Non-Returnable Items
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {nonReturnableItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-red-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exchanges */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Exchanges</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Need a different size or color? We make exchanges easy and
                convenient.
              </p>

              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Size Exchanges
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Free size exchanges within 30 days</li>
                      <li>• Items must be unworn with tags attached</li>
                      <li>• New size will be shipped immediately</li>
                      <li>• Return original item using prepaid label</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Color/Style Exchanges
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Exchange for different color or style</li>
                      <li>• Subject to availability</li>
                      <li>• Price difference may apply</li>
                      <li>• Same return conditions apply</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Return FAQ</h2>
              <p className="text-muted-foreground">
                Common questions about returns and exchanges
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">
                  How long do I have to return items?
                </h3>
                <p className="text-muted-foreground">
                  You have 30 days from the delivery date to initiate a return.
                  Items must be in original condition with tags attached.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">
                  Who pays for return shipping?
                </h3>
                <p className="text-muted-foreground">
                  We provide free prepaid return labels for all returns within
                  the US. International return shipping costs may apply.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">
                  When will I receive my refund?
                </h3>
                <p className="text-muted-foreground">
                  Refunds are processed within 2-3 business days after we
                  receive your return. It may take 5-7 business days to appear
                  in your account.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Can I return sale items?</h3>
                <p className="text-muted-foreground">
                  Yes, sale items can be returned within 30 days as long as they
                  meet our return conditions. All sales are final on clearance
                  items.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Need to Start a Return?
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to return an item? Contact our support team to get started
                with your return process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Return Process</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/support">Contact Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
