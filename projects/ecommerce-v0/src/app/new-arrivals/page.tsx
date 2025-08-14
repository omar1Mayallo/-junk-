import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Filter, Grid, List } from "lucide-react";
import Link from "next/link";

const newArrivals = [
  {
    id: 1,
    name: "Premium Silk Scarf",
    price: 89,
    originalPrice: null,
    image: "/products/glass.png?height=300&width=300",
    rating: 4.8,
    reviews: 24,
    isNew: true,
    colors: ["Red", "Blue", "Green"],
    sizes: ["One Size"],
  },
  {
    id: 2,
    name: "Designer Sunglasses",
    price: 159,
    originalPrice: null,
    image: "/products/bag.png?height=300&width=300",
    rating: 4.9,
    reviews: 18,
    isNew: true,
    colors: ["Black", "Tortoise", "Gold"],
    sizes: ["One Size"],
  },
  {
    id: 3,
    name: "Cashmere Blend Sweater",
    price: 199,
    originalPrice: null,
    image: "/products/shirt.png?height=300&width=300",
    rating: 4.7,
    reviews: 31,
    isNew: true,
    colors: ["Cream", "Navy", "Charcoal"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Minimalist Watch",
    price: 249,
    originalPrice: null,
    image: "/products/shoes.png?height=300&width=300",
    rating: 4.6,
    reviews: 42,
    isNew: true,
    colors: ["Silver", "Gold", "Rose Gold"],
    sizes: ["One Size"],
  },
  {
    id: 5,
    name: "Leather Ankle Boots",
    price: 179,
    originalPrice: null,
    image: "/products/glass.png?height=300&width=300",
    rating: 4.8,
    reviews: 27,
    isNew: true,
    colors: ["Black", "Brown", "Tan"],
    sizes: ["6", "7", "8", "9", "10", "11"],
  },
  {
    id: 6,
    name: "Organic Cotton Dress",
    price: 129,
    originalPrice: null,
    image: "/products/shirt.png?height=300&width=300",
    rating: 4.5,
    reviews: 19,
    isNew: true,
    colors: ["White", "Navy", "Olive"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Titanium Bracelet",
    price: 99,
    originalPrice: null,
    image: "/products/shoes.png?height=300&width=300",
    rating: 4.7,
    reviews: 15,
    isNew: true,
    colors: ["Silver", "Black"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 8,
    name: "Wool Blend Coat",
    price: 299,
    originalPrice: null,
    image: "/products/bag.png?height=300&width=300",
    rating: 4.9,
    reviews: 33,
    isNew: true,
    colors: ["Camel", "Navy", "Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

export default function NewArrivalsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">New Arrivals</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover the latest additions to our collection
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Just Landed - Fresh Styles Weekly
          </Badge>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">New Arrivals</li>
        </ol>
      </nav>

      {/* Filters and Sort */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">View:</span>
              <Button variant="outline" size="sm">
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/products/glass.png"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-2 left-2 bg-green-500">
                      NEW
                    </Badge>
                  )}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-8 h-8 p-0"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" className="w-8 h-8 p-0">
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">
                        ${product.price}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      {product.colors.slice(0, 3).map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{
                            backgroundColor:
                              color.toLowerCase() === "white"
                                ? "#ffffff"
                                : color.toLowerCase() === "black"
                                ? "#000000"
                                : color.toLowerCase() === "navy"
                                ? "#1e3a8a"
                                : color.toLowerCase() === "red"
                                ? "#dc2626"
                                : color.toLowerCase() === "blue"
                                ? "#2563eb"
                                : color.toLowerCase() === "green"
                                ? "#16a34a"
                                : color.toLowerCase() === "brown"
                                ? "#92400e"
                                : color.toLowerCase() === "tan"
                                ? "#d2b48c"
                                : color.toLowerCase() === "cream"
                                ? "#f5f5dc"
                                : color.toLowerCase() === "charcoal"
                                ? "#374151"
                                : color.toLowerCase() === "olive"
                                ? "#84cc16"
                                : color.toLowerCase() === "camel"
                                ? "#d2691e"
                                : color.toLowerCase() === "silver"
                                ? "#c0c0c0"
                                : color.toLowerCase() === "gold"
                                ? "#ffd700"
                                : color.toLowerCase() === "rose gold"
                                ? "#e8b4b8"
                                : color.toLowerCase() === "tortoise"
                                ? "#8b4513"
                                : "#6b7280",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
