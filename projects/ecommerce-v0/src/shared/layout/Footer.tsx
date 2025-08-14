"use client";

import type React from "react";

import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiGooglepay } from "react-icons/si";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerSections = {
    shop: {
      title: "Shop",
      links: [
        { name: "All Products", href: "/shop" },
        { name: "New Arrivals", href: "/new-arrivals" },
        { name: "Best Sellers", href: "/best-sellers" },
        { name: "Sale", href: "/sale" },
        { name: "Gift Cards", href: "/gift-cards" },
      ],
    },
    categories: {
      title: "Categories",
      links: [
        { name: "Accessories", href: "/categories/accessories" },
        { name: "Bags", href: "/categories/bags" },
        { name: "Clothes", href: "/categories/clothes" },
        { name: "Shoes", href: "/categories/shoes" },
        { name: "Bags", href: "/categories/bags" },
      ],
    },
    support: {
      title: "Customer Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns", href: "/returns" },
        { name: "Size Guide", href: "/size-guide" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Investors", href: "/investors" },
      ],
    },
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://facebook.com",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "https://twitter.com",
      color: "hover:text-sky-500",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com",
      color: "hover:text-pink-600",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      href: "https://youtube.com",
      color: "hover:text-red-600",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://linkedin.com",
      color: "hover:text-blue-700",
    },
  ];

  const paymentMethods = [
    { name: "Visa", icon: SiVisa },
    { name: "Mastercard", icon: SiMastercard },
    { name: "PayPal", icon: SiPaypal },
    { name: "Google Pay", icon: SiGooglepay },
  ];

  return (
    <footer className="bg-background border-t">
      {/* Newsletter Section */}
      <div className="bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for exclusive deals, new arrivals, and
              style tips.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
                aria-label="Email address for newsletter"
              />
              <Button type="submit" className="sm:w-auto">
                <FiSend className="mr-2 h-4 w-4" />
                {isSubscribed ? "Subscribed!" : "Subscribe"}
              </Button>
            </form>
            {isSubscribed && (
              <p
                className="text-green-600 text-sm mt-2"
                role="status"
                aria-live="polite"
              >
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  S
                </span>
              </div>
              <span className="font-bold text-xl">ShopHub</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Your trusted online shopping destination. Discover quality
              products, exceptional service, and unbeatable prices.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <FiMapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span>123 Commerce Street, Business District, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <FiPhone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <FiMail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a
                  href="mailto:support@shophub.com"
                  className="hover:text-primary transition-colors"
                >
                  support@shophub.com
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Payment Methods */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-sm font-medium">Follow us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors ${social.color}`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-sm font-medium">We accept:</span>
              <div className="flex space-x-3">
                {paymentMethods.map((payment) => {
                  const IconComponent = payment.icon;
                  return (
                    <div
                      key={payment.name}
                      className="p-2 bg-muted rounded border flex items-center justify-center"
                      title={payment.name}
                    >
                      <IconComponent className="h-6 w-6 text-muted-foreground" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 ShopHub. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/accessibility"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
