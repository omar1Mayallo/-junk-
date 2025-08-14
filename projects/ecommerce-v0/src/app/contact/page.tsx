"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { FiClock, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email Us",
      details: "support@shophub.com",
      description: "Send us an email anytime",
    },
    {
      icon: FiPhone,
      title: "Call Us",
      details: "+1 (234) 567-8900",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: FiMapPin,
      title: "Visit Us",
      details: "123 Commerce Street, Business District, NY 10001",
      description: "Come say hello at our office",
    },
    {
      icon: FiClock,
      title: "Business Hours",
      details: "Mon-Fri: 8am-5pm, Sat: 9am-3pm",
      description: "We're here to help",
    },
  ];

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a question, suggestion, or just want to say hello? We'd
                love to hear from you. Our team is here to help and we'll get
                back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    <p className="font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-background rounded-2xl p-8 shadow-sm space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) =>
                      setFormData({ ...formData, subject: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="order">Order Support</SelectItem>
                      <SelectItem value="returns">
                        Returns & Exchanges
                      </SelectItem>
                      <SelectItem value="technical">
                        Technical Support
                      </SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <FiSend className="mr-2 h-4 w-4" />
                  {isSubmitted ? "Message Sent!" : "Send Message"}
                </Button>

                {isSubmitted && (
                  <p
                    className="text-green-600 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    Thank you for your message! We'll get back to you soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Quick answers to common questions. Can't find what you're
                looking for? Contact us!
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">
                  How long does shipping take?
                </h3>
                <p className="text-muted-foreground">
                  Standard shipping takes 3-5 business days. Express shipping is
                  available for 1-2 business days.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">
                  What's your return policy?
                </h3>
                <p className="text-muted-foreground">
                  We offer a 30-day return policy for all items in original
                  condition with tags attached.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">
                  Do you ship internationally?
                </h3>
                <p className="text-muted-foreground">
                  Yes! We ship to over 50 countries worldwide. Shipping costs
                  and times vary by location.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">
                  How can I track my order?
                </h3>
                <p className="text-muted-foreground">
                  Once your order ships, you'll receive a tracking number via
                  email to monitor your package.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
