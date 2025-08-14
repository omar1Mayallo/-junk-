"use client";

import type React from "react";

import Link from "next/link";
import { useState } from "react";
import { FiMail, FiArrowLeft, FiCheck } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <main className="flex-1">
          <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-md mx-auto">
                <div className="bg-background rounded-2xl p-8 shadow-lg border text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiCheck className="h-8 w-8 text-green-600" />
                  </div>
                  <h1 className="text-2xl font-bold mb-4">Check Your Email</h1>
                  <p className="text-muted-foreground mb-6">
                    We've sent a password reset link to <strong>{email}</strong>
                    . Please check your email and follow the instructions to
                    reset your password.
                  </p>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Didn't receive the email? Check your spam folder or{" "}
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-primary hover:underline font-medium"
                      >
                        try again
                      </button>
                    </p>
                    <Button asChild className="w-full">
                      <Link href="/login">Back to Sign In</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="flex-1">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  Reset Your Password
                </h1>
                <p className="text-muted-foreground">
                  Enter your email address and we'll send you a link to reset
                  your password.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className={`pl-10 ${error ? "border-red-500" : ""}`}
                        required
                      />
                    </div>
                    {error && (
                      <p className="text-red-500 text-sm mt-1">{error}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </form>

                <div className="text-center mt-6 pt-6 border-t">
                  <Link
                    href="/login"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    <FiArrowLeft className="mr-2 h-4 w-4" />
                    Back to Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
