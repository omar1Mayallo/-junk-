"use client";

import Link from "next/link";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using ShopHub's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      title: "2. Use License",
      content: `Permission is granted to temporarily download one copy of the materials on ShopHub's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
      
      • Modify or copy the materials
      • Use the materials for any commercial purpose or for any public display
      • Attempt to reverse engineer any software contained on the website
      • Remove any copyright or other proprietary notations from the materials`,
    },
    {
      title: "3. Account Terms",
      content: `When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.`,
    },
    {
      title: "4. Products and Services",
      content: `All products and services are subject to availability. We reserve the right to discontinue any product or service at any time. Prices for our products are subject to change without notice. We reserve the right to modify or discontinue the service at any time without notice.`,
    },
    {
      title: "5. Payment Terms",
      content: `Payment is due at the time of purchase. We accept various forms of payment including credit cards, debit cards, and digital payment methods. All transactions are processed securely through our payment partners. You agree to pay all charges incurred by you or any users of your account.`,
    },
    {
      title: "6. Shipping and Delivery",
      content: `We will make every effort to deliver products within the estimated timeframes, but delivery times are not guaranteed. Risk of loss and title for products purchased pass to you upon delivery to the carrier. We are not responsible for delays caused by shipping carriers or circumstances beyond our control.`,
    },
    {
      title: "7. Returns and Refunds",
      content: `Our return policy allows returns within 30 days of purchase for most items in original condition. Certain items may not be eligible for return. Refunds will be processed to the original payment method within 5-7 business days after we receive the returned item.`,
    },
    {
      title: "8. User Content",
      content: `You may submit reviews, comments, and other content. By submitting content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display such content. You are responsible for the content you submit and must not violate any laws or third-party rights.`,
    },
    {
      title: "9. Privacy Policy",
      content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service. By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.`,
    },
    {
      title: "10. Prohibited Uses",
      content: `You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts, to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances, to infringe upon or violate our intellectual property rights or the intellectual property rights of others, or to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate.`,
    },
    {
      title: "11. Limitation of Liability",
      content: `In no case shall ShopHub, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.`,
    },
    {
      title: "12. Governing Law",
      content: `These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.`,
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
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Please read these terms and conditions carefully before using
                our service.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
                  <h2 className="text-xl font-semibold mb-3 text-blue-800">
                    Important Notice
                  </h2>
                  <p className="text-blue-700 mb-0">
                    By using ShopHub's services, you agree to these terms.
                    Please read them carefully as they contain important
                    information about your rights and obligations.
                  </p>
                </div>

                <div className="space-y-8">
                  {sections.map((section, index) => (
                    <div
                      key={index}
                      className="bg-background rounded-2xl p-8 shadow-sm border"
                    >
                      <h2 className="text-2xl font-bold mb-4 text-primary">
                        {section.title}
                      </h2>
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Information */}
                <div className="bg-muted/30 rounded-2xl p-8 mt-12">
                  <h2 className="text-2xl font-bold mb-4">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about these Terms of Service,
                    please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Email: legal@shophub.com</p>
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
                      Contact our support team →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
