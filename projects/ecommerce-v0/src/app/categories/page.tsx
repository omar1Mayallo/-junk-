"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CategoriesPage() {
  const categories = [
    {
      name: "Accessories",
      description: "Stylish accessories to elevate your look",
      image: "/categories/accessories.png?height=400&width=600",
      href: "/categories/accessories",
      productCount: 45,
    },
    {
      name: "Bags",
      description: "Trendy and functional bags for everyday use",
      image: "/categories/bags.png?height=400&width=600",
      href: "/categories/bags",
      productCount: 32,
    },
    {
      name: "Clothes",
      description: "Fresh and fashionable clothes for any occasion",
      image: "/categories/clothes.png?height=400&width=600",
      href: "/categories/clothes",
      productCount: 78,
    },
    {
      name: "Shoes",
      description: "Comfortable and stylish shoes for every step",
      image: "/categories/shoes.png?height=400&width=600",
      href: "/categories/shoes",
      productCount: 56,
    },
  ];

  return (
    <div className="min-h-screen">
      <main>
        {/* Page Header */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Shop by Category
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our carefully curated categories to find exactly what
                you're looking for.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`aspect-[3/2] bg-gradient-to-br border rounded-2xl p-8 flex items-end relative`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative border z-10 bg-background/90 backdrop-blur-sm rounded-xl p-6 w-full">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">
                            {category.name}
                          </h3>
                          <p className="text-muted-foreground mb-2">
                            {category.description}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {category.productCount} products
                          </p>
                        </div>
                        <div className="flex items-center text-primary">
                          <span className="text-sm font-medium mr-2">
                            Shop now
                          </span>
                          <FiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-muted-foreground mb-8">
                Browse all our products or contact our customer service team for
                assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Browse All Products
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
