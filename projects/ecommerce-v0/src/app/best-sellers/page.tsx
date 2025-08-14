import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Heart,
  ShoppingCart,
  Filter,
  Grid,
  List,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const bestSellers = [
  {
    id: 1,
    name: "Classic Leather Handbag",
    price: 199,
    originalPrice: null,
    image: "/products/bag.png?height=300&width=300",
    rating: 4.9,
    reviews: 156,
    soldCount: 1200,
    colors: ["Black", "Brown", "Tan"],
    sizes: ["One Size"],
  },
  {
    id: 2,
    name: "Comfort Fit Jeans",
    price: 89,
    originalPrice: null,
    image: "/products/shoes.png?height=300&width=300",
    rating: 4.8,
    reviews: 243,
    soldCount: 2100,
    colors: ["Blue", "Black", "Gray"],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: 3,
    name: "Wireless Earbuds Pro",
    price: 149,
    originalPrice: null,
    image: "/products/shirt.png?height=300&width=300",
    rating: 4.7,
    reviews: 189,
    soldCount: 890,
    colors: ["White", "Black", "Rose Gold"],
    sizes: ["One Size"],
  },
  {
    id: 4,
    name: "Essential White Sneakers",
    price: 129,
    originalPrice: null,
    image: "/products/glass.png?height=300&width=300",
    rating: 4.8,
    reviews: 312,
    soldCount: 1800,
    colors: ["White", "Black", "Gray"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },
  {
    id: 5,
    name: "Cozy Knit Sweater",
    price: 79,
    originalPrice: null,
    image: "/products/bag.png?height=300&width=300",
    rating: 4.6,
    reviews: 198,
    soldCount: 1450,
    colors: ["Cream", "Navy", "Gray", "Pink"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Stainless Steel Watch",
    price: 299,
    originalPrice: null,
    image: "/products/shoes.png?height=300&width=300",
    rating: 4.9,
    reviews: 127,
    soldCount: 650,
    colors: ["Silver", "Gold", "Black"],
    sizes: ["One Size"],
  },
  {
    id: 7,
    name: "Crossbody Mini Bag",
    price: 69,
    originalPrice: null,
    image: "/products/bag.png?height=300&width=300",
    rating: 4.7,
    reviews: 234,
    soldCount: 1900,
    colors: ["Black", "Beige", "Red", "Navy"],
    sizes: ["One Size"],
  },
  {
    id: 8,
    name: "Performance Running Shoes",
    price: 159,
    originalPrice: null,
    image: "/products/shirt.png?height=300&width=300",
    rating: 4.8,
    reviews: 276,
    soldCount: 1100,
    colors: ["Black", "White", "Blue", "Red"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },
];

export default function BestSellersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-8 h-8 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold">Best Sellers</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Customer favorites that everyone's talking about
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Top Rated & Most Loved
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
          <li className="text-gray-900 font-medium">Best Sellers</li>
        </ol>
      </nav>

      {/* Stats Section */}
      <div className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              10,000+
            </div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">4.8★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
        </div>
      </div>

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
              <option>Most Popular</option>
              <option>Highest Rated</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2 bg-orange-500">
                    BEST SELLER
                  </Badge>
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
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-600 transition-colors">
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
                  <div className="text-sm text-gray-500 mb-2">
                    {product.soldCount.toLocaleString()} sold
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
                                : color.toLowerCase() === "brown"
                                ? "#92400e"
                                : color.toLowerCase() === "tan"
                                ? "#d2b48c"
                                : color.toLowerCase() === "cream"
                                ? "#f5f5dc"
                                : color.toLowerCase() === "gray"
                                ? "#6b7280"
                                : color.toLowerCase() === "pink"
                                ? "#ec4899"
                                : color.toLowerCase() === "beige"
                                ? "#f5f5dc"
                                : color.toLowerCase() === "silver"
                                ? "#c0c0c0"
                                : color.toLowerCase() === "gold"
                                ? "#ffd700"
                                : color.toLowerCase() === "rose gold"
                                ? "#e8b4b8"
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
