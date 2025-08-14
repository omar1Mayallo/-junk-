"use client";

import Link from "next/link";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Aviator Sunglasses",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.6,
      reviews: 80,
      image: "/products/glass.png?height=300&width=300",
      badge: "Sale",
      href: "/products/aviator-sunglasses",
    },
    {
      id: 2,
      name: "Leather Backbag",
      price: 99.99,
      originalPrice: 129.99,
      rating: 4.8,
      reviews: 50,
      image: "/products/bag.png?height=300&width=300",
      badge: "Best Seller",
      href: "/products/leather-backbag",
    },
    {
      id: 3,
      name: "Graphic T-Shirt",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.4,
      reviews: 120,
      image: "/products/shirt.png?height=300&width=300",
      badge: "Sale",
      href: "/products/graphic-shirt",
    },
    {
      id: 4,
      name: "Formal Shoes",
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.7,
      reviews: 100,
      image: "/products/shoes.png?height=300&width=300",
      badge: "Sale",
      href: "/products/formal-shoes",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of top-rated products that our
            customers love most.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                {product.badge && (
                  <Badge
                    className="absolute top-3 left-3 z-10"
                    variant={
                      product.badge === "Sale" ? "destructive" : "default"
                    }
                  >
                    {product.badge}
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 z-10 bg-background/80 hover:bg-background"
                >
                  <FiHeart className="h-4 w-4" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
                <Link href={product.href}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <Link
                    href={product.href}
                    className="hover:text-primary transition-colors"
                  >
                    <h3 className="font-semibold line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center space-x-1 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-500 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <Button className="w-full" size="sm">
                  <FiShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
