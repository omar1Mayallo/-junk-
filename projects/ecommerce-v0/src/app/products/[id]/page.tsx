"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiArrowLeft,
  FiHeart,
  FiShoppingCart,
  FiStar,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiMinus,
  FiPlus,
} from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Brown");
  const [selectedSize, setSelectedSize] = useState("Medium");

  const product = {
    id: 2,
    name: "Leather Backbag",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 50,
    badge: "Best Seller",
    images: [
      "/products/bag.png?height=600&width=600",
      "/products/backbag-1.jpg?height=600&width=600",
      "/products/backbag-2.jpg?height=600&width=600",
      "/products/backbag-3.jpg?height=600&width=600",
    ],
    colors: ["Brown", "Black", "Tan"],
    sizes: ["Small", "Medium", "Large"],
    description:
      "Premium leather backpack perfect for work, travel, or everyday use. Crafted from genuine leather with multiple compartments for organization.",
    features: [
      "Genuine leather construction",
      "Multiple compartments and pockets",
      'Padded laptop compartment (fits up to 15")',
      "Adjustable shoulder straps",
      "Water-resistant coating",
      "Lifetime warranty",
    ],
    specifications: {
      Material: "Genuine Leather",
      Dimensions: '18" x 12" x 6"',
      Weight: "2.5 lbs",
      Capacity: "25 liters",
      "Laptop Compartment": "Up to 15 inches",
      Warranty: "Lifetime",
    },
  };

  const relatedProducts = [
    {
      id: 6,
      name: "Canvas Tote Bag",
      price: 34.99,
      image: "/products/bag-1.png?height=300&width=300",
      href: "/products/canvas-tote-bag",
    },
    {
      id: 7,
      name: "Travel Duffel Bag",
      price: 79.99,
      image: "/products/bag-2.png?height=300&width=300",
      href: "/products/travel-duffel-bag",
    },
    {
      id: 8,
      name: "Crossbody Bag",
      price: 49.99,
      image: "/products/bag-3.png?height=300&width=300",
      href: "/products/crossbody-bag",
    },
  ];

  const reviews = [
    {
      name: "John D.",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Excellent quality leather and craftsmanship. Perfect size for daily use and travel.",
    },
    {
      name: "Sarah M.",
      rating: 5,
      date: "1 month ago",
      comment:
        "Love this backpack! Great for work and fits my laptop perfectly. Highly recommend.",
    },
    {
      name: "Mike R.",
      rating: 4,
      date: "2 months ago",
      comment:
        "Good quality bag, though it took a few days to break in the leather. Worth the price.",
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
              <Link href="/categories/bags" className="hover:text-primary">
                Bags
              </Link>
              <span>/</span>
              <span className="text-foreground">Leather Backbag</span>
            </nav>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/categories/bags">
                  <FiArrowLeft className="mr-2 h-4 w-4" />
                  Back to Bags
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                  <img
                    src={product.images[selectedImage] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  {product.badge && (
                    <Badge
                      className="mb-2"
                      variant={
                        product.badge === "Sale" ? "destructive" : "default"
                      }
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                    {product.name}
                  </h1>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-500 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-3xl font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                    <Badge variant="destructive">
                      Save $
                      {(product.originalPrice! - product.price).toFixed(2)}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Color Selection */}
                <div>
                  <h3 className="font-semibold mb-3">Color: {selectedColor}</h3>
                  <div className="flex space-x-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          selectedColor === color
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-muted hover:border-primary"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="font-semibold mb-3">Size: {selectedSize}</h3>
                  <div className="flex space-x-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          selectedSize === size
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-muted hover:border-primary"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <h3 className="font-semibold mb-3">Quantity</h3>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <FiMinus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-semibold">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <FiPlus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <Button size="lg" className="flex-1">
                      <FiShoppingCart className="mr-2 h-5 w-5" />
                      Add to Cart - ${(product.price * quantity).toFixed(2)}
                    </Button>
                    <Button variant="outline" size="lg">
                      <FiHeart className="h-5 w-5" />
                    </Button>
                  </div>
                  <Button variant="outline" size="lg" className="w-full">
                    Buy Now
                  </Button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
                  <div className="flex items-center space-x-2">
                    <FiTruck className="h-5 w-5 text-primary" />
                    <span className="text-sm">Free Shipping</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiShield className="h-5 w-5 text-primary" />
                    <span className="text-sm">Lifetime Warranty</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiRefreshCw className="h-5 w-5 text-primary" />
                    <span className="text-sm">30-Day Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">
                  Reviews ({product.reviews})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-8">
                <div className="bg-background rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Product Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="mt-8">
                <div className="bg-background rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-2 border-b"
                        >
                          <span className="font-medium">{key}:</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <div className="bg-background rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <div
                        key={index}
                        className="border-b pb-6 last:border-b-0"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <span className="font-semibold">{review.name}</span>
                            <div className="flex items-center">
                              {[...Array(review.rating)].map((_, i) => (
                                <FiStar
                                  key={i}
                                  className="h-4 w-4 text-yellow-500 fill-current"
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <span className="text-lg font-bold">${product.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
