"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiHeart,
  FiShoppingCart,
  FiTrash2,
  FiShare2,
  FiGrid,
  FiList,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function WishlistPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Aviator Sunglasses",
      price: 29.99,
      originalPrice: 39.99,
      image: "/products/glass.png?height=300&width=300",
      badge: "Sale",
      inStock: true,
      href: "/products/aviator-sunglasses",
    },
    {
      id: 2,
      name: "Leather Backbag",
      price: 99.99,
      originalPrice: 129.99,
      image: "/products/bag.png?height=300&width=300",
      badge: "Best Seller",
      inStock: true,
      href: "/products/leather-backbag",
    },
    {
      id: 3,
      name: "Graphic T-Shirt",
      price: 19.99,
      originalPrice: 24.99,
      image: "/products/shirt.png?height=300&width=300",
      badge: "Sale",
      inStock: false,
      href: "/products/graphic-shirt",
    },
    {
      id: 4,
      name: "Classic Watch",
      price: 149.99,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300",
      badge: "New",
      inStock: true,
      href: "/products/classic-watch",
    },
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  const addToCart = (id: number) => {
    // Add to cart logic here
    console.log(`Added item ${id} to cart`);
  };

  const shareWishlist = () => {
    // Share wishlist logic here
    console.log("Sharing wishlist");
  };

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
              <span className="text-foreground">Wishlist</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="py-12 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  My Wishlist
                </h1>
                <p className="text-muted-foreground">
                  {wishlistItems.length}{" "}
                  {wishlistItems.length === 1 ? "item" : "items"} saved for
                  later
                </p>
              </div>
              <div className="mt-6 lg:mt-0">
                <Button variant="outline" onClick={shareWishlist}>
                  <FiShare2 className="mr-2 h-4 w-4" />
                  Share Wishlist
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Controls */}
        <section className="py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Showing {wishlistItems.length} items
              </div>
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
        </section>

        {/* Wishlist Items */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {wishlistItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiHeart className="h-12 w-12 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Your wishlist is empty
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Start adding items you love to your wishlist. You can save
                  items for later or share your wishlist with friends.
                </p>
                <Button size="lg" asChild>
                  <Link href="/shop">Start Shopping</Link>
                </Button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    : "space-y-6"
                }
              >
                {wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className={
                      viewMode === "grid"
                        ? "group bg-background rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-300"
                        : "group bg-background rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-300 flex"
                    }
                  >
                    <div
                      className={
                        viewMode === "grid"
                          ? "relative aspect-square overflow-hidden"
                          : "w-48 relative"
                      }
                    >
                      {item.badge && (
                        <Badge
                          className="absolute top-3 left-3 z-10"
                          variant={
                            item.badge === "Sale" ? "destructive" : "default"
                          }
                        >
                          {item.badge}
                        </Badge>
                      )}
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                          <span className="text-white font-medium">
                            Out of Stock
                          </span>
                        </div>
                      )}
                      <Link href={item.href}>
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
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
                          href={item.href}
                          className="hover:text-primary transition-colors"
                        >
                          <h3 className="font-semibold line-clamp-2">
                            {item.name}
                          </h3>
                        </Link>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-lg font-bold">
                            ${item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${item.originalPrice}
                            </span>
                          )}
                        </div>
                        {!item.inStock && (
                          <p className="text-red-500 text-sm mt-1">
                            Currently out of stock
                          </p>
                        )}
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button
                          className="flex-1"
                          size="sm"
                          disabled={!item.inStock}
                          onClick={() => addToCart(item.id)}
                        >
                          <FiShoppingCart className="mr-2 h-4 w-4" />
                          {item.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          <FiTrash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Recommendations */}
        {wishlistItems.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">You Might Also Like</h2>
                <p className="text-muted-foreground">
                  Based on your wishlist preferences
                </p>
              </div>
              <div className="text-center">
                <Button size="lg" asChild>
                  <Link href="/shop">Discover More Products</Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
