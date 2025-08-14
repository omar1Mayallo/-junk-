"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function FeaturedCategories() {
  const categories = [
    {
      name: "Accessories",
      description: "Stylish accessories to elevate your look",
      image: "/categories/accessories.png?height=300&width=400",
      href: "/categories/accessories",
    },
    {
      name: "Bags",
      description: "Trendy and functional bags for everyday use",
      image: "/categories/bags.png?height=300&width=400",
      href: "/categories/bags",
    },
    {
      name: "Clothes",
      description: "Fresh and fashionable clothes for any occasion",
      image: "/categories/clothes.png?height=300&width=400",
      href: "/categories/clothes",
    },
    {
      name: "Shoes",
      description: "Comfortable and stylish shoes for every step",
      image: "/categories/shoes.png?height=300&width=400",
      href: "/categories/shoes",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our wide range of products across different categories,
            carefully curated for quality and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`aspect-[4/5] bg-gradient-to-br from-neutral-500/5 to-neutral-600/2 rounded-2xl border p-6 flex flex-col justify-between`}
              >
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-75 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Shop now
                    <FiArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/categories">
              View All Categories
              <FiArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
