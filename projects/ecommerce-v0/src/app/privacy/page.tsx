"use client";

import Link from "next/link";
import { FiShield, FiEye, FiLock, FiUsers } from "react-icons/fi";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: FiUsers,
      content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This includes:

      • Personal information (name, email, phone number, address)
      • Payment information (credit card details, billing address)
      • Account preferences and settings
      • Communication history with our support team
      • Product reviews and feedback`,
    },
    {
      title: "How We Use Your Information",
      icon: FiEye,
      content: `We use the information we collect to:

      • Process and fulfill your orders
      • Communicate with you about your account and orders
      • Provide customer support
      • Send marketing communications (with your consent)
      • Improve our products and services
      • Prevent fraud and ensure security
      • Comply with legal obligations`,
    },
    {
      title: "Information Sharing",
      icon: FiShield,
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:

      • With service providers who help us operate our business
      • When required by law or to protect our rights
      • In connection with a business transfer or merger
      • With your explicit consent
      • To prevent fraud or security threats`,
    },
    {
      title: "Data Security",
      icon: FiLock,
      content: `We implement appropriate security measures to protect your personal information:

      • SSL encryption for data transmission
      • Secure payment processing
      • Regular security audits and updates
      • Access controls and authentication
      • Employee training on data protection
      • Incident response procedures`,
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
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your privacy is important to us. This policy explains how we
                collect, use, and protect your information.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-green-800">
                  Our Commitment to Privacy
                </h2>
                <p className="text-green-700 leading-relaxed">
                  At ShopHub, we are committed to protecting your privacy and
                  ensuring the security of your personal information. We believe
                  in transparency and want you to understand how we collect,
                  use, and safeguard your data.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {sections.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <div
                      key={index}
                      className="bg-background rounded-2xl p-8 shadow-sm border"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{section.title}</h3>
                      </div>
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Sections */}
              <div className="space-y-8">
                <div className="bg-background rounded-2xl p-8 shadow-sm border">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Cookies and Tracking
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use cookies and similar technologies to enhance your
                    browsing experience, analyze site traffic, and personalize
                    content. You can control cookie settings through your
                    browser preferences.
                  </p>
                  <Link
                    href="/cookies"
                    className="text-primary hover:underline font-medium"
                  >
                    Learn more about our cookie policy →
                  </Link>
                </div>

                <div className="bg-background rounded-2xl p-8 shadow-sm border">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Your Rights
                  </h3>
                  <div className="text-muted-foreground leading-relaxed">
                    <p className="mb-4">You have the right to:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Access your personal information</li>
                      <li>• Correct inaccurate information</li>
                      <li>• Delete your account and data</li>
                      <li>• Opt-out of marketing communications</li>
                      <li>• Data portability</li>
                      <li>• Lodge a complaint with supervisory authorities</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background rounded-2xl p-8 shadow-sm border">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Children's Privacy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not intended for children under 13 years of
                    age. We do not knowingly collect personal information from
                    children under 13. If you are a parent or guardian and
                    believe your child has provided us with personal
                    information, please contact us.
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-8 shadow-sm border">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    International Transfers
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information may be transferred to and processed in
                    countries other than your own. We ensure appropriate
                    safeguards are in place to protect your information in
                    accordance with applicable data protection laws.
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-8 shadow-sm border">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Changes to This Policy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this privacy policy from time to time. We will
                    notify you of any changes by posting the new policy on this
                    page and updating the "Last updated" date. We encourage you
                    to review this policy periodically.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-muted/30 rounded-2xl p-8 mt-12">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
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
