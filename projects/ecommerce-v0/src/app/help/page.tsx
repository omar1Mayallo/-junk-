"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiSearch,
  FiHelpCircle,
  FiShoppingCart,
  FiTruck,
  FiRefreshCw,
  FiUser,
  FiCreditCard,
  FiMessageCircle,
} from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const helpCategories = [
    {
      icon: FiShoppingCart,
      title: "Orders & Shopping",
      description: "Help with placing orders, tracking, and shopping",
      articles: 15,
      href: "#orders",
    },
    {
      icon: FiTruck,
      title: "Shipping & Delivery",
      description: "Shipping options, delivery times, and tracking",
      articles: 12,
      href: "/shipping",
    },
    {
      icon: FiRefreshCw,
      title: "Returns & Exchanges",
      description: "Return policy, exchanges, and refunds",
      articles: 8,
      href: "/returns",
    },
    {
      icon: FiUser,
      title: "Account & Profile",
      description: "Account settings, profile, and preferences",
      articles: 10,
      href: "#account",
    },
    {
      icon: FiCreditCard,
      title: "Payment & Billing",
      description: "Payment methods, billing, and invoices",
      articles: 9,
      href: "#payment",
    },
    {
      icon: FiHelpCircle,
      title: "General Support",
      description: "Other questions and general assistance",
      articles: 20,
      href: "#general",
    },
  ];

  const popularArticles = [
    {
      title: "How do I track my order?",
      category: "Orders",
      readTime: "2 min",
      href: "#track-order",
    },
    {
      title: "What payment methods do you accept?",
      category: "Payment",
      readTime: "3 min",
      href: "#payment-methods",
    },
    {
      title: "How do I return an item?",
      category: "Returns",
      readTime: "4 min",
      href: "/returns",
    },
    {
      title: "When will my order arrive?",
      category: "Shipping",
      readTime: "3 min",
      href: "/shipping",
    },
    {
      title: "How do I change my password?",
      category: "Account",
      readTime: "2 min",
      href: "#change-password",
    },
    {
      title: "Can I cancel my order?",
      category: "Orders",
      readTime: "3 min",
      href: "#cancel-order",
    },
  ];

  const filteredArticles = popularArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Help Center
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Find answers to your questions or get in touch with our support
                team. We're here to help!
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quick Actions</h2>
              <p className="text-muted-foreground">
                Common tasks you might want to do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link
                href="#track-order"
                className="group bg-background rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <FiTruck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Track Your Order</h3>
                <p className="text-sm text-muted-foreground">
                  Check the status and location of your order
                </p>
              </Link>

              <Link
                href="/returns"
                className="group bg-background rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <FiRefreshCw className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Start a Return</h3>
                <p className="text-sm text-muted-foreground">
                  Return or exchange your items easily
                </p>
              </Link>

              <Link
                href="/contact"
                className="group bg-background rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <FiMessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Contact Support</h3>
                <p className="text-sm text-muted-foreground">
                  Get help from our support team
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Browse Help Topics</h2>
              <p className="text-muted-foreground">
                Find answers organized by category
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Link
                    key={index}
                    href={category.href}
                    className="group bg-background rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {category.description}
                    </p>
                    <div className="text-sm text-primary font-medium">
                      {category.articles} articles
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular Help Articles</h2>
              <p className="text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article, index) => (
                  <Link
                    key={index}
                    href={article.href}
                    className="group bg-background rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                ))}
              </div>

              {filteredArticles.length === 0 && searchQuery && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    No articles found matching your search.
                  </p>
                  <Button variant="outline" onClick={() => setSearchQuery("")}>
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-muted-foreground mb-8">
                Can't find what you're looking for? Our support team is ready to
                assist you with any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="tel:+1234567890">Call Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
