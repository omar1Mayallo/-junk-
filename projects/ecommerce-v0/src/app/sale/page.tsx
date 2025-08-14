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
  Clock,
  Percent,
} from "lucide-react";
import Link from "next/link";

const saleProducts = [
  {
    id: 1,
    name: "Designer Leather Jacket",
    price: 199,
    originalPrice: 349,
    image: "/products/bag.png?height=300&width=300",
    rating: 4.7,
    reviews: 89,
    discount: 43,
    colors: ["Black", "Brown"],
    sizes: ["S", "M", "L", "XL"],
    saleEndDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Premium Wool Scarf",
    price: 39,
    originalPrice: 79,
    image: "/products/shoes.png?height=300&width=300",
    rating: 4.6,
    reviews: 124,
    discount: 51,
    colors: ["Gray", "Navy", "Burgundy"],
    sizes: ["One Size"],
    saleEndDate: "2024-01-20",
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 179,
    originalPrice: 299,
    image: "/products/glass.png?height=300&width=300",
    rating: 4.8,
    reviews: 156,
    discount: 40,
    colors: ["Black", "Silver", "Rose Gold"],
    sizes: ["One Size"],
    saleEndDate: "2024-01-18",
  },
  {
    id: 4,
    name: "Casual Summer Dress",
    price: 59,
    originalPrice: 119,
    image: "/products/shirt.png?height=300&width=300",
    rating: 4.5,
    reviews: 78,
    discount: 50,
    colors: ["Blue", "White", "Pink", "Yellow"],
    sizes: ["XS", "S", "M", "L", "XL"],
    saleEndDate: "2024-01-25",
  },
  {
    id: 5,
    name: "Professional Briefcase",
    price: 129,
    originalPrice: 219,
    image: "/products/bag.png?height=300&width=300",
    rating: 4.7,
    reviews: 92,
    discount: 41,
    colors: ["Black", "Brown", "Navy"],
    sizes: ["One Size"],
    saleEndDate: "2024-01-22",
  },
  {
    id: 6,
    name: "Cozy Winter Boots",
    price: 89,
    originalPrice: 159,
    image: "/products/glass.png?height=300&width=300",
    rating: 4.6,
    reviews: 134,
    discount: 44,
    colors: ["Black", "Brown", "Gray"],
    sizes: ["6", "7", "8", "9", "10", "11"],
    saleEndDate: "2024-01-30",
  },
  {
    id: 7,
    name: "Silk Blouse",
    price: 69,
    originalPrice: 139,
    image: "/products/shirt.png?height=300&width=300",
    rating: 4.8,
    reviews: 67,
    discount: 50,
    colors: ["White", "Black", "Navy", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    saleEndDate: "2024-01-28",
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 79,
    originalPrice: 129,
    image: "/products/shoes.png?height=300&width=300",
    rating: 4.4,
    reviews: 203,
    discount: 39,
    colors: ["Black", "White", "Blue"],
    sizes: ["One Size"],
    saleEndDate: "2024-01-26",
  },
];

export default function SalePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Percent className="w-8 h-8 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold">Sale</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Up to 50% off on selected items
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5" />
            <span className="text-lg">Limited time offer - Ends soon!</span>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Free Shipping on Sale Items
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
          <li className="text-gray-900 font-medium">Sale</li>
        </ol>
      </nav>

      {/* Sale Banner */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-2">🔥 Flash Sale Alert!</h2>
          <p className="text-lg mb-4">
            Extra 10% off when you buy 2 or more sale items
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="bg-white/20 px-3 py-1 rounded">Code: EXTRA10</div>
            <div className="bg-white/20 px-3 py-1 rounded">
              Ends: Jan 31, 2024
            </div>
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
              <span className="text-sm text-gray-600">Discount:</span>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option>All Discounts</option>
                <option>50% or more</option>
                <option>40% or more</option>
                <option>30% or more</option>
              </select>
            </div>
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
              <option>Biggest Discount</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Ending Soon</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.map((product) => (
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
                  <Badge className="absolute top-2 left-2 bg-red-500">
                    -{product.discount}%
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
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-red-600 transition-colors">
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
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-red-600">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Save ${product.originalPrice - product.price}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-red-600 font-medium">
                      Sale ends:{" "}
                      {new Date(product.saleEndDate).toLocaleDateString()}
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
                                : color.toLowerCase() === "gray"
                                ? "#6b7280"
                                : color.toLowerCase() === "pink"
                                ? "#ec4899"
                                : color.toLowerCase() === "yellow"
                                ? "#eab308"
                                : color.toLowerCase() === "burgundy"
                                ? "#7c2d12"
                                : color.toLowerCase() === "silver"
                                ? "#c0c0c0"
                                : color.toLowerCase() === "rose gold"
                                ? "#e8b4b8"
                                : color.toLowerCase() === "cream"
                                ? "#f5f5dc"
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
