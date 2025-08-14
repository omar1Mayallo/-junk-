"use client";

import Link from "next/link";
import { FiTruck, FiHeart, FiTarget, FiAward } from "react-icons/fi";
import { FaLeaf, FaRecycle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function SustainabilityPage() {
  const initiatives = [
    {
      icon: FaLeaf,
      title: "Carbon Neutral Shipping",
      description:
        "We offset 100% of our shipping emissions through verified carbon offset programs.",
      impact: "50,000 tons CO2 offset annually",
    },
    {
      icon: FaRecycle,
      title: "Sustainable Packaging",
      description:
        "All our packaging is made from recycled materials and is fully recyclable.",
      impact: "90% reduction in packaging waste",
    },
    {
      icon: FiTruck,
      title: "Green Logistics",
      description:
        "Optimized delivery routes and electric vehicle partnerships reduce our carbon footprint.",
      impact: "30% reduction in delivery emissions",
    },
    {
      icon: FiHeart,
      title: "Ethical Sourcing",
      description:
        "We partner only with suppliers who meet our strict ethical and environmental standards.",
      impact: "100% ethical supplier certification",
    },
  ];

  const goals = [
    {
      year: "2025",
      target: "Carbon Neutral Operations",
      description:
        "Achieve net-zero carbon emissions across all our operations and facilities.",
      progress: 75,
    },
    {
      year: "2026",
      target: "100% Renewable Energy",
      description:
        "Power all our facilities and data centers with renewable energy sources.",
      progress: 60,
    },
    {
      year: "2027",
      target: "Zero Waste to Landfill",
      description:
        "Eliminate all waste sent to landfills through recycling and circular economy practices.",
      progress: 45,
    },
    {
      year: "2030",
      target: "Sustainable Supply Chain",
      description:
        "Ensure 100% of our supply chain partners meet our sustainability standards.",
      progress: 30,
    },
  ];

  const partnerships = [
    {
      name: "Climate Action Network",
      description:
        "Supporting global climate action initiatives and carbon offset programs.",
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      name: "Sustainable Packaging Coalition",
      description:
        "Advancing sustainable packaging solutions across the industry.",
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      name: "Fair Trade Foundation",
      description:
        "Promoting fair trade practices and ethical sourcing standards.",
      logo: "/placeholder.svg?height=60&width=120",
    },
  ];

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-green-500/10 to-green-600/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Sustainability
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We're committed to building a more sustainable future through
                responsible business practices, environmental stewardship, and
                ethical partnerships.
              </p>
              <Button size="lg" asChild>
                <Link href="#initiatives">Learn About Our Initiatives</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-green-800">
                  Our Commitment
                </h2>
                <p className="text-green-700 leading-relaxed">
                  At ShopHub, we believe that business success and environmental
                  responsibility go hand in hand. We're dedicated to minimizing
                  our environmental impact while creating positive change
                  throughout our industry and communities.
                </p>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-16">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    50K
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Tons CO2 Offset
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    90%
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Packaging Recycled
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    100%
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Ethical Suppliers
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    30%
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Emission Reduction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Initiatives */}
        <section id="initiatives" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Initiatives</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the specific actions we're taking to reduce our
                environmental impact and promote sustainability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {initiatives.map((initiative, index) => {
                const IconComponent = initiative.icon;
                return (
                  <div
                    key={index}
                    className="bg-background rounded-2xl p-8 shadow-sm border"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold">{initiative.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {initiative.description}
                    </p>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-sm font-medium text-green-800">
                        Impact:
                      </div>
                      <div className="text-sm text-green-700">
                        {initiative.impact}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sustainability Goals */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Goals</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We've set ambitious targets to drive meaningful environmental
                change and track our progress transparently.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 shadow-sm border"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Target: {goal.year}
                        </span>
                        <div className="flex items-center">
                          <FiTarget className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm text-muted-foreground">
                            {goal.progress}% Complete
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{goal.target}</h3>
                      <p className="text-muted-foreground">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We collaborate with leading organizations to amplify our impact
                and drive industry-wide change.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {partnerships.map((partner, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 shadow-sm border text-center"
                >
                  <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="font-bold mb-3">{partner.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainable Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-2xl p-8 shadow-sm border">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  Sustainable Product Collection
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We've curated a special collection of eco-friendly products
                  from brands that share our commitment to sustainability. From
                  organic clothing to recycled accessories, discover products
                  that make a positive impact on the planet.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FaLeaf className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-1">Organic Materials</h4>
                    <p className="text-sm text-muted-foreground">
                      Products made from certified organic materials
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FaRecycle className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-1">Recycled Content</h4>
                    <p className="text-sm text-muted-foreground">
                      Items made from recycled and upcycled materials
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FiAward className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-1">Certified Brands</h4>
                    <p className="text-sm text-muted-foreground">
                      Products from sustainability-certified brands
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <Button asChild>
                    <Link href="/shop?category=sustainable">
                      Shop Sustainable Products
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-muted-foreground mb-8">
                Together, we can create a more sustainable future. Learn how you
                can get involved and make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/shop?category=sustainable">
                    Shop Sustainably
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Partner With Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
