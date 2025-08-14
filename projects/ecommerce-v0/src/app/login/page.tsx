"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { FiEye, FiEyeOff, FiLock, FiUser } from "react-icons/fi";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    // Basic validation
    const newErrors: Record<string, string> = {};

    if (!formData.emailOrUsername.trim()) {
      newErrors.emailOrUsername = "Email or username is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful login here
      console.log("Login successful", formData);
    }, 2000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  Welcome Back
                </h1>
                <p className="text-muted-foreground">
                  Sign in to your account to continue shopping and access your
                  orders.
                </p>
              </div>

              {/* Login Form */}
              <div className="bg-background rounded-2xl p-8 shadow-lg border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email/Username Field */}
                  <div>
                    <label
                      htmlFor="emailOrUsername"
                      className="block text-sm font-medium mb-2"
                    >
                      Email or Username *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="emailOrUsername"
                        type="text"
                        value={formData.emailOrUsername}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            emailOrUsername: e.target.value,
                          })
                        }
                        placeholder="Enter your email or username"
                        className={`pl-10 ${
                          errors.emailOrUsername ? "border-red-500" : ""
                        }`}
                        required
                      />
                    </div>
                    {errors.emailOrUsername && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.emailOrUsername}
                      </p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium mb-2"
                    >
                      Password *
                    </label>
                    <div className="relative">
                      <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        placeholder="Enter your password"
                        className={`pl-10 pr-10 ${
                          errors.password ? "border-red-500" : ""
                        }`}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <FiEyeOff className="h-4 w-4" />
                        ) : (
                          <FiEye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="rememberMe"
                        checked={formData.rememberMe}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            rememberMe: checked as boolean,
                          })
                        }
                      />
                      <label
                        htmlFor="rememberMe"
                        className="text-sm text-muted-foreground"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>

                {/* Divider */}
                <div className="my-6">
                  <div className="relative">
                    <Separator />
                    <div className="absolute inset-0 flex justify-center">
                      <span className="bg-background px-2 text-muted-foreground text-sm">
                        Or continue with
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Login */}
                <div className="space-y-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => handleSocialLogin("Google")}
                  >
                    <FaGoogle className="mr-2 h-4 w-4" />
                    Continue with Google
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleSocialLogin("Facebook")}
                    >
                      <FaFacebookF className="mr-2 h-4 w-4" />
                      Facebook
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleSocialLogin("Apple")}
                    >
                      <FaApple className="mr-2 h-4 w-4" />
                      Apple
                    </Button>
                  </div>
                </div>

                {/* Sign Up Link */}
                <div className="text-center mt-6 pt-6 border-t">
                  <p className="text-muted-foreground">
                    Don't have an account?{" "}
                    <Link
                      href="/register"
                      className="text-primary font-medium hover:underline"
                    >
                      Sign up for free
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
