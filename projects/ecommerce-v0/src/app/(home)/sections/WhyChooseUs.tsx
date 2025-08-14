"use client";

import {
  FiShield,
  FiTruck,
  FiHeadphones,
  FiAward,
  FiRefreshCw,
  FiCreditCard,
} from "react-icons/fi";

export default function WhyChooseUs() {
  const features = [
    {
      icon: FiShield,
      title: "Secure Shopping",
      description:
        "Your data is protected with industry-standard encryption and security measures.",
    },
    {
      icon: FiTruck,
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping with real-time tracking for all your orders.",
    },
    {
      icon: FiHeadphones,
      title: "24/7 Support",
      description:
        "Our customer service team is always ready to help you with any questions.",
    },
    {
      icon: FiAward,
      title: "Quality Guarantee",
      description:
        "We stand behind every product with our comprehensive quality assurance.",
    },
    {
      icon: FiRefreshCw,
      title: "Easy Returns",
      description:
        "Hassle-free returns within 30 days if you're not completely satisfied.",
    },
    {
      icon: FiCreditCard,
      title: "Flexible Payment",
      description:
        "Multiple payment options including buy now, pay later solutions.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Choose ShopHub?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience
            through exceptional service and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
