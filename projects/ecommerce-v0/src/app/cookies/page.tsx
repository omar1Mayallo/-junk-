"use client";

import Link from "next/link";
import { FiSettings, FiShield, FiBarChart, FiTarget } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function CookiesPage() {
  const cookieTypes = [
    {
      icon: FiShield,
      title: "Essential Cookies",
      description: "Required for basic website functionality",
      examples: [
        "Authentication and login status",
        "Shopping cart contents",
        "Security and fraud prevention",
        "Website preferences and settings",
      ],
      canDisable: false,
    },
    {
      icon: FiBarChart,
      title: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      examples: [
        "Page views and user interactions",
        "Traffic sources and referrals",
        "Popular products and content",
        "Website performance metrics",
      ],
      canDisable: true,
    },
    {
      icon: FiTarget,
      title: "Marketing Cookies",
      description: "Used to deliver relevant advertisements",
      examples: [
        "Personalized product recommendations",
        "Targeted advertising campaigns",
        "Social media integration",
        "Email marketing preferences",
      ],
      canDisable: true,
    },
    {
      icon: FiSettings,
      title: "Functional Cookies",
      description: "Enhance website functionality and personalization",
      examples: [
        "Language and region preferences",
        "Customized user interface",
        "Recently viewed products",
        "Saved search filters",
      ],
      canDisable: true,
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
                Cookie Policy
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Learn about how we use cookies and similar technologies to
                improve your browsing experience.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">
                  What Are Cookies?
                </h2>
                <p className="text-blue-700 leading-relaxed">
                  Cookies are small text files that are stored on your device
                  when you visit a website. They help websites remember
                  information about your visit, such as your preferred language
                  and other settings. This can make your next visit easier and
                  the site more useful to you.
                </p>
              </div>

              {/* Cookie Types */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {cookieTypes.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <div
                      key={index}
                      className="bg-background rounded-2xl p-8 shadow-sm border"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{type.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {type.description}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">
                                {example}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-sm font-medium">
                          {type.canDisable ? "Optional" : "Required"}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            type.canDisable
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {type.canDisable
                            ? "Can be disabled"
                            : "Always active"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* How We Use Cookies */}
              <div className="bg-background rounded-2xl p-8 shadow-sm border mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  How We Use Cookies
                </h3>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>We use cookies for several purposes:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">
                        To Provide Our Service:
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Keep you logged in</li>
                        <li>• Remember your shopping cart</li>
                        <li>• Process your orders</li>
                        <li>• Maintain security</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">
                        To Improve Your Experience:
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Personalize content</li>
                        <li>• Remember your preferences</li>
                        <li>• Provide relevant recommendations</li>
                        <li>• Optimize website performance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="bg-background rounded-2xl p-8 shadow-sm border mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Third-Party Cookies
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may also use third-party cookies from trusted partners to
                  enhance your experience:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Google Analytics</h4>
                    <p className="text-sm text-muted-foreground">
                      Website traffic analysis and user behavior insights
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Social Media</h4>
                    <p className="text-sm text-muted-foreground">
                      Social sharing buttons and embedded content
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Advertising</h4>
                    <p className="text-sm text-muted-foreground">
                      Relevant ads and marketing campaigns
                    </p>
                  </div>
                </div>
              </div>

              {/* Managing Cookies */}
              <div className="bg-background rounded-2xl p-8 shadow-sm border mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Managing Your Cookie Preferences
                </h3>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>You have several options for managing cookies:</p>

                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="font-semibold mb-3 text-foreground">
                      Browser Settings
                    </h4>
                    <p className="text-sm mb-3">
                      Most browsers allow you to control cookies through their
                      settings. You can:
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• Block all cookies</li>
                      <li>• Block third-party cookies only</li>
                      <li>• Delete existing cookies</li>
                      <li>• Set up notifications when cookies are sent</li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="font-semibold mb-3 text-foreground">
                      Our Cookie Settings
                    </h4>
                    <p className="text-sm mb-4">
                      You can also manage your cookie preferences directly on
                      our website:
                    </p>
                    <Button className="w-full sm:w-auto">
                      Manage Cookie Preferences
                    </Button>
                  </div>
                </div>
              </div>

              {/* Browser Instructions */}
              <div className="bg-background rounded-2xl p-8 shadow-sm border mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Browser-Specific Instructions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Desktop Browsers:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        • <strong>Chrome:</strong> Settings → Privacy and
                        security → Cookies
                      </li>
                      <li>
                        • <strong>Firefox:</strong> Options → Privacy & Security
                        → Cookies
                      </li>
                      <li>
                        • <strong>Safari:</strong> Preferences → Privacy →
                        Cookies
                      </li>
                      <li>
                        • <strong>Edge:</strong> Settings → Cookies and site
                        permissions
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Mobile Browsers:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        • <strong>iOS Safari:</strong> Settings → Safari →
                        Privacy & Security
                      </li>
                      <li>
                        • <strong>Android Chrome:</strong> Settings → Site
                        settings → Cookies
                      </li>
                      <li>
                        • <strong>Samsung Internet:</strong> Settings → Sites
                        and downloads
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Impact of Disabling */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-yellow-800">
                  Impact of Disabling Cookies
                </h3>
                <p className="text-yellow-700 leading-relaxed mb-4">
                  Please note that disabling certain cookies may affect your
                  experience on our website:
                </p>
                <ul className="space-y-2 text-yellow-700">
                  <li>
                    • You may need to re-enter information more frequently
                  </li>
                  <li>• Some features may not work properly</li>
                  <li>
                    • Personalized content and recommendations may not be
                    available
                  </li>
                  <li>• Your shopping cart may not persist between sessions</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-muted/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Questions About Cookies?
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our use of cookies or this
                  Cookie Policy, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: privacy@shophub.com</p>
                  <p>Phone: +1 (234) 567-8900</p>
                  <p>
                    Address: 123 Commerce Street, Business District, NY 10001
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="text-primary hover:underline font-medium"
                  >
                    Contact our privacy team →
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
