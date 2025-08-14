"use client";

import {
  FiClock,
  FiGlobe,
  FiMapPin,
  FiPackage,
  FiShield,
  FiTruck,
} from "react-icons/fi";

export default function ShippingPage() {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      price: "Free",
      time: "3-5 business days",
      description: "Free shipping on all orders over $50",
      icon: FiTruck,
    },
    {
      name: "Express Shipping",
      price: "$9.99",
      time: "1-2 business days",
      description: "Fast delivery for urgent orders",
      icon: FiClock,
    },
    {
      name: "Overnight Shipping",
      price: "$19.99",
      time: "Next business day",
      description: "Get your order the next business day",
      icon: FiPackage,
    },
  ];

  const internationalRates = [
    { region: "Canada", price: "$12.99", time: "5-7 business days" },
    { region: "Europe", price: "$19.99", time: "7-10 business days" },
    { region: "Asia Pacific", price: "$24.99", time: "10-14 business days" },
    { region: "Rest of World", price: "$29.99", time: "14-21 business days" },
  ];

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Shipping Information
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fast, reliable, and secure shipping options to get your orders
                delivered safely and on time.
              </p>
            </div>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Domestic Shipping Options
              </h2>
              <p className="text-muted-foreground">
                Choose the shipping method that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {shippingOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <div
                    key={index}
                    className="bg-background rounded-2xl p-8 shadow-sm border text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {option.name}
                    </h3>
                    <div className="text-2xl font-bold text-primary mb-2">
                      {option.price}
                    </div>
                    <div className="text-muted-foreground mb-4">
                      {option.time}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* International Shipping */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                International Shipping
              </h2>
              <p className="text-muted-foreground">
                We ship to over 50 countries worldwide
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-2xl p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {internationalRates.map((rate, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FiGlobe className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-1">{rate.region}</h4>
                      <div className="text-lg font-bold text-primary mb-1">
                        {rate.price}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {rate.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Policy */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Shipping Policy & Guidelines
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <FiPackage className="mr-2 h-5 w-5 text-primary" />
                      Order Processing
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Orders are processed within 1-2 business days</li>
                      <li>
                        • Orders placed after 2 PM EST ship the next business
                        day
                      </li>
                      <li>• Weekend orders are processed on Monday</li>
                      <li>
                        • You'll receive a confirmation email once your order
                        ships
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <FiMapPin className="mr-2 h-5 w-5 text-primary" />
                      Delivery Information
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Signature may be required for high-value orders</li>
                      <li>• We ship to PO boxes and APO/FPO addresses</li>
                      <li>• Delivery times are estimates, not guarantees</li>
                      <li>• Weather and holidays may cause delays</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <FiShield className="mr-2 h-5 w-5 text-primary" />
                      Package Protection
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• All packages are insured against loss or damage</li>
                      <li>• Secure packaging to protect your items</li>
                      <li>• Tracking provided for all shipments</li>
                      <li>
                        • Contact us immediately if package arrives damaged
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <FiTruck className="mr-2 h-5 w-5 text-primary" />
                      Special Circumstances
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • Large items may require special delivery arrangements
                      </li>
                      <li>
                        • International orders may be subject to customs fees
                      </li>
                      <li>• Address changes must be made before shipping</li>
                      <li>
                        • Refused packages are subject to return shipping fees
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Shipping FAQ</h2>
              <p className="text-muted-foreground">
                Common questions about our shipping process
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">When will my order ship?</h3>
                <p className="text-muted-foreground">
                  Most orders ship within 1-2 business days. You'll receive a
                  tracking number via email once your order is on its way.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">
                  Can I change my shipping address?
                </h3>
                <p className="text-muted-foreground">
                  Address changes can only be made before your order ships.
                  Contact us immediately if you need to update your address.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">
                  What if my package is lost or damaged?
                </h3>
                <p className="text-muted-foreground">
                  All packages are insured. If your package is lost or arrives
                  damaged, contact us within 48 hours and we'll resolve the
                  issue.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">
                  Do you offer expedited shipping?
                </h3>
                <p className="text-muted-foreground">
                  Yes! We offer express (1-2 days) and overnight shipping
                  options for urgent orders. Rates vary by location.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
