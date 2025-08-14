"use client";

import {
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiX,
} from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  S
                </span>
              </div>
              <span className="font-bold text-xl hidden sm:inline-block">
                ShopHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-4 w-full bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FiSearch className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <FiHeart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>

            {/* User Account */}
            <Button asChild variant="ghost" size="icon">
              <Link href="/login">
                <FiUser className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>

            {/* Shopping Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <FiShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                3
              </Badge>
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <FiMenu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] px-4"
              >
                <div className="flex flex-col space-y-4 mt-4">
                  <div className="flex items-center space-x-2 pb-4 border-b">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">
                        S
                      </span>
                    </div>
                    <span className="font-bold text-xl">ShopHub</span>
                  </div>

                  {/* Mobile Search */}
                  <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="pl-10 pr-4 w-full"
                    />
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-2">
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium py-2 px-2 rounded-md transition-colors hover:bg-muted"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Actions */}
                  <div className="flex flex-col space-y-2 pt-4 border-t">
                    <Button asChild variant="outline" className="justify-start">
                      <Link href="/account">
                        <FiUser className="mr-2 h-4 w-4" />
                        My Account
                      </Link>
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <FiHeart className="mr-2 h-4 w-4" />
                      Wishlist
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <FiShoppingCart className="mr-2 h-4 w-4" />
                      Cart (3)
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-3 border-t">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-10 w-full"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
                onClick={() => setIsSearchOpen(false)}
              >
                <FiX className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
