"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiArrowLeft,
  FiGrid,
  FiList,
  FiHeart,
  FiShoppingCart,
  FiStar,
} from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BagsCategoryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const bagProducts = [
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
      id: 6,
      name: "Canvas Tote Bag",
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.5,
      reviews: 90,
      image: "/products/bag-1.png?height=300&width=300",
      badge: "Sale",
      href: "/products/canvas-tote-bag",
    },
    {
      id: 7,
      name: "Travel Duffel Bag",
      price: 79.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 35,
      image: "/products/bag-2.png?height=300&width=300",
      badge: "New",
      href: "/products/travel-duffel-bag",
    },
    {
      id: 8,
      name: "Crossbody Bag",
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.6,
      reviews: 78,
      image: "/products/bag-3.png?height=300&width=300",
      badge: "Sale",
      href: "/products/crossbody-bag",
    },
  ];

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
              <Link href="/categories" className="hover:text-primary">
                Categories
              </Link>
              <span>/</span>
              <span className="text-foreground">Bags</span>
            </nav>
          </div>
        </section>

        {/* Category Header */}
        <section className="py-16 bg-gradient-to-br from-pink-500/10 to-pink-600/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/categories">
                  <FiArrowLeft className="mr-2 h-4 w-4" />
                  Back to Categories
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Bags Collection
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Discover our trendy and functional bags perfect for everyday
                  use, travel, and special occasions.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">
                      {bagProducts.length}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Products
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">4.6</div>
                    <div className="text-sm text-muted-foreground">
                      Avg Rating
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">253</div>
                    <div className="text-sm text-muted-foreground">Reviews</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/bags.png?height=400&width=600"
                  alt="Bags collection"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Select>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-50">Under $50</SelectItem>
                    <SelectItem value="50-100">$50 - $100</SelectItem>
                    <SelectItem value="over-100">Over $100</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Materials</SelectItem>
                    <SelectItem value="leather">Leather</SelectItem>
                    <SelectItem value="canvas">Canvas</SelectItem>
                    <SelectItem value="nylon">Nylon</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-4">
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <FiGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <FiList className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {bagProducts.length} products
              </p>
            </div>

            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-6"
              }
            >
              {bagProducts.map((product) => (
                <div
                  key={product.id}
                  className={
                    viewMode === "grid"
                      ? "group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                      : "group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex"
                  }
                >
                  <div
                    className={
                      viewMode === "grid"
                        ? "relative aspect-square overflow-hidden"
                        : "w-48 relative"
                    }
                  >
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

                  <div
                    className={
                      viewMode === "grid"
                        ? "p-4 space-y-3"
                        : "flex-1 p-6 flex flex-col justify-between"
                    }
                  >
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

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold">
                          ${product.price}
                        </span>
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
