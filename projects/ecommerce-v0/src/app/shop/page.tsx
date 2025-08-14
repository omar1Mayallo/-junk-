"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiGrid,
  FiList,
  FiHeart,
  FiShoppingCart,
  FiStar,
  FiSearch,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const allProducts = [
    {
      id: 1,
      name: "Aviator Sunglasses",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.6,
      reviews: 80,
      image: "/products/glass.png?height=300&width=300",
      badge: "Sale",
      category: "Accessories",
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
      category: "Bags",
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
      category: "Clothes",
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
      category: "Shoes",
      href: "/products/formal-shoes",
    },
  ];

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <main>
        {/* Page Header */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Shop All Products</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our complete collection of fashion items, accessories,
                and lifestyle products.
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="bags">Bags</SelectItem>
                    <SelectItem value="clothes">Clothes</SelectItem>
                    <SelectItem value="shoes">Shoes</SelectItem>
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
                Showing {filteredProducts.length} of {allProducts.length}{" "}
                products
              </p>
            </div>

            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-6"
              }
            >
              {filteredProducts.map((product) => (
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
                      <div className="text-xs text-muted-foreground mb-1">
                        {product.category}
                      </div>
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

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No products found matching your search.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
