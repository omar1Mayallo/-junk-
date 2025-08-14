"use client";

import Link from "next/link";
import { FiClock, FiTag, FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SpecialOffers() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Offer */}
          <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12 overflow-hidden">
            <div className="relative z-10">
              <Badge className="mb-4">
                <FiTag className="mr-1 h-3 w-3" />
                Limited Time
              </Badge>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Summer Sale
                <span className="block text-primary">Up to 50% Off</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Don't miss out on incredible savings across all categories.
                Limited time offer!
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <FiClock className="h-4 w-4" />
                  <span>Ends in 5 days</span>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link href="/sale">
                  Shop Sale
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10">
              <div className="w-32 h-32 bg-primary rounded-full"></div>
            </div>
          </div>

          {/* Secondary Offers */}
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FiTag className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Free Shipping</h4>
                <p className="text-sm text-muted-foreground">
                  On orders over $50
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/shipping">Learn More</Link>
              </Button>
            </div>

            <div className="bg-muted/50 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FiClock className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">24/7 Support</h4>
                <p className="text-sm text-muted-foreground">
                  Always here to help
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/support">Contact Us</Link>
              </Button>
            </div>

            <div className="bg-muted/50 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FiArrowRight className="h-6 w-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Easy Returns</h4>
                <p className="text-sm text-muted-foreground">
                  30-day return policy
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/returns">View Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
