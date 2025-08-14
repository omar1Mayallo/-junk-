"use client";

import Link from "next/link";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/20 to-muted/40 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <FiStar className="mr-1 h-3 w-3" />
                Trusted by 50,000+ customers
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover Amazing
                <span className="text-primary block">Products</span>
                Just for You
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Shop the latest trends with unbeatable prices, fast shipping,
                and exceptional customer service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link href="/shop">
                  Shop Now
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base" asChild>
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square border border-neutral-200 rounded-2xl flex items-center justify-center">
              <img
                src="/hero-1.png?height=500&width=500"
                alt="Featured products showcase"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-background border rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background border rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <FiStar className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
