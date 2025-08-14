"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import {
  FiBook,
  FiClock,
  FiHelpCircle,
  FiMail,
  FiMessageCircle,
  FiPhone,
  FiSearch,
  FiUsers,
} from "react-icons/fi";

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const supportOptions = [
    {
      icon: FiMessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      availability: "Available 24/7",
      action: "Start Chat",
      href: "#",
    },
    {
      icon: FiPhone,
      title: "Phone Support",
      description: "Speak directly with a support representative",
      availability: "Mon-Fri, 8am-5pm EST",
      action: "Call Now",
      href: "tel:+1234567890",
    },
    {
      icon: FiMail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "Response within 24 hours",
      action: "Send Email",
      href: "/contact",
    },
  ];

  const helpCategories = [
    {
      icon: FiHelpCircle,
      title: "Getting Started",
      description: "New to ShopHub? Learn the basics",
      articles: 12,
      href: "#",
    },
    {
      icon: FiBook,
      title: "Orders & Payment",
      description: "Managing orders and payment methods",
      articles: 18,
      href: "#",
    },
    {
      icon: FiUsers,
      title: "Account & Profile",
      description: "Account settings and profile management",
      articles: 8,
      href: "#",
    },
  ];

  const popularArticles = [
    {
      title: "How to track my order?",
      category: "Orders",
      readTime: "2 min read",
      href: "#",
    },
    {
      title: "What payment methods do you accept?",
      category: "Payment",
      readTime: "3 min read",
      href: "#",
    },
    {
      title: "How to return or exchange items?",
      category: "Returns",
      readTime: "4 min read",
      href: "/returns",
    },
    {
      title: "International shipping information",
      category: "Shipping",
      readTime: "5 min read",
      href: "/shipping",
    },
    {
      title: "How to update my account information?",
      category: "Account",
      readTime: "2 min read",
      href: "#",
    },
    {
      title: "Size guide and fitting help",
      category: "Products",
      readTime: "3 min read",
      href: "#",
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
                How Can We Help?
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Find answers to your questions or get in touch with our support
                team. We're here to help you have the best shopping experience.
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

        {/* Support Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get Support</h2>
              <p className="text-muted-foreground">
                Choose the best way to reach us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <div
                    key={index}
                    className="bg-background rounded-2xl p-8 shadow-sm border text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {option.description}
                    </p>
                    <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                      <FiClock className="mr-1 h-4 w-4" />
                      {option.availability}
                    </div>
                    <Button asChild>
                      <Link href={option.href}>{option.action}</Link>
                    </Button>
                  </div>
                );
              })}
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <p className="text-muted-foreground">
                    No articles found matching your search.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setSearchQuery("")}
                  >
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
                assist you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="tel:+1234567890">Call Us Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
