"use client";

import type React from "react";

import Link from "next/link";
import { useState } from "react";
import {
  FiEye,
  FiEyeOff,
  FiMail,
  FiLock,
  FiUser,
  FiMapPin,
  FiCheck,
  FiX,
} from "react-icons/fi";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    address: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    digit: false,
    special: false,
  });

  // Password validation
  const validatePassword = (password: string) => {
    const strength = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      digit: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    setPasswordStrength(strength);
    return Object.values(strength).every(Boolean);
  };

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    // Validation
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Password must meet all requirements";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful registration here
      console.log("Registration successful", formData);
    }, 2000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Register with ${provider}`);
  };

  const handlePasswordChange = (password: string) => {
    setFormData({ ...formData, password });
    validatePassword(password);
  };

  return (
    <div className="min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  Create Your Account
                </h1>
                <p className="text-muted-foreground">
                  Join ShopHub today and discover amazing products with
                  exclusive member benefits.
                </p>
              </div>

              {/* Registration Form */}
              <div className="bg-background rounded-2xl p-8 shadow-lg border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium mb-2"
                      >
                        First Name *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                          placeholder="Enter your first name"
                          className={`pl-10 ${
                            errors.firstName ? "border-red-500" : ""
                          }`}
                          required
                        />
                      </div>
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium mb-2"
                      >
                        Last Name
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value,
                            })
                          }
                          placeholder="Enter your last name"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Username Field */}
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium mb-2"
                    >
                      Username *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="username"
                        type="text"
                        value={formData.username}
                        onChange={(e) =>
                          setFormData({ ...formData, username: e.target.value })
                        }
                        placeholder="Choose a username"
                        className={`pl-10 ${
                          errors.username ? "border-red-500" : ""
                        }`}
                        required
                      />
                    </div>
                    {errors.username && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.username}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Enter your email address"
                        className={`pl-10 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        required
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
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
                        onChange={(e) => handlePasswordChange(e.target.value)}
                        placeholder="Create a strong password"
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

                    {/* Password Strength Indicator */}
                    {formData.password && (
                      <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm font-medium mb-2">
                          Password Requirements:
                        </p>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            {passwordStrength.length ? (
                              <FiCheck className="h-4 w-4 text-green-500 mr-2" />
                            ) : (
                              <FiX className="h-4 w-4 text-red-500 mr-2" />
                            )}
                            <span
                              className={
                                passwordStrength.length
                                  ? "text-green-700"
                                  : "text-muted-foreground"
                              }
                            >
                              At least 8 characters
                            </span>
                          </div>
                          <div className="flex items-center text-sm">
                            {passwordStrength.uppercase ? (
                              <FiCheck className="h-4 w-4 text-green-500 mr-2" />
                            ) : (
                              <FiX className="h-4 w-4 text-red-500 mr-2" />
                            )}
                            <span
                              className={
                                passwordStrength.uppercase
                                  ? "text-green-700"
                                  : "text-muted-foreground"
                              }
                            >
                              One uppercase letter
                            </span>
                          </div>
                          <div className="flex items-center text-sm">
                            {passwordStrength.digit ? (
                              <FiCheck className="h-4 w-4 text-green-500 mr-2" />
                            ) : (
                              <FiX className="h-4 w-4 text-red-500 mr-2" />
                            )}
                            <span
                              className={
                                passwordStrength.digit
                                  ? "text-green-700"
                                  : "text-muted-foreground"
                              }
                            >
                              One digit
                            </span>
                          </div>
                          <div className="flex items-center text-sm">
                            {passwordStrength.special ? (
                              <FiCheck className="h-4 w-4 text-green-500 mr-2" />
                            ) : (
                              <FiX className="h-4 w-4 text-red-500 mr-2" />
                            )}
                            <span
                              className={
                                passwordStrength.special
                                  ? "text-green-700"
                                  : "text-muted-foreground"
                              }
                            >
                              One special character
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Address Field */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium mb-2"
                    >
                      Address
                    </label>
                    <div className="relative">
                      <FiMapPin className="absolute left-3 top-3 text-muted-foreground h-4 w-4" />
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        placeholder="Enter your full address"
                        className="pl-10 min-h-[80px]"
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            agreeToTerms: checked as boolean,
                          })
                        }
                        className="mt-1"
                      />
                      <label
                        htmlFor="agreeToTerms"
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-primary hover:underline"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-primary hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    {errors.agreeToTerms && (
                      <p className="text-red-500 text-sm">
                        {errors.agreeToTerms}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>

                {/* Divider */}
                <div className="my-6">
                  <div className="relative">
                    <Separator />
                    <div className="absolute inset-0 flex justify-center">
                      <span className="bg-background px-2 text-muted-foreground text-sm">
                        Or sign up with
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Registration */}
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

                {/* Sign In Link */}
                <div className="text-center mt-6 pt-6 border-t">
                  <p className="text-muted-foreground">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-primary font-medium hover:underline"
                    >
                      Sign in here
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
