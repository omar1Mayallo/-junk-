"use client";

import Link from "next/link";
import { FiHeadphones, FiEye } from "react-icons/fi";
import { FaRegKeyboard } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";

export default function AccessibilityPage() {
  const features = [
    {
      icon: FiEye,
      title: "Visual Accessibility",
      items: [
        "High contrast color schemes",
        "Scalable text and images",
        "Screen reader compatibility",
        "Alternative text for images",
        "Clear visual hierarchy",
      ],
    },
    {
      icon: FaRegKeyboard,
      title: "Keyboard Navigation",
      items: [
        "Full keyboard accessibility",
        "Logical tab order",
        "Visible focus indicators",
        "Skip navigation links",
        "Keyboard shortcuts",
      ],
    },
    {
      icon: FiHeadphones,
      title: "Audio & Cognitive",
      items: [
        "Captions for video content",
        "Clear and simple language",
        "Consistent navigation",
        "Error identification and suggestions",
        "Sufficient time limits",
      ],
    },
    {
      icon: FiSmartphone,
      title: "Mobile Accessibility",
      items: [
        "Touch-friendly interface",
        "Responsive design",
        "Voice control support",
        "Gesture alternatives",
        "Orientation flexibility",
      ],
    },
  ];

  const standards = [
    {
      title: "WCAG 2.1 AA Compliance",
      description:
        "We strive to meet Web Content Accessibility Guidelines 2.1 Level AA standards.",
    },
    {
      title: "Section 508 Compliance",
      description:
        "Our website follows Section 508 standards for federal accessibility requirements.",
    },
    {
      title: "ADA Compliance",
      description:
        "We work to ensure compliance with the Americans with Disabilities Act.",
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
                Accessibility Statement
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ShopHub is committed to ensuring digital accessibility for
                people with disabilities. We continually improve the user
                experience for everyone and apply relevant accessibility
                standards.
              </p>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">
                  Our Commitment
                </h2>
                <p className="text-blue-700 leading-relaxed">
                  We believe that everyone should have equal access to
                  information and functionality on the web. Our goal is to
                  provide an inclusive experience that works for all users,
                  regardless of their abilities or the technologies they use to
                  access our website.
                </p>
              </div>

              {/* Accessibility Features */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-background rounded-2xl p-8 shadow-sm border"
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {feature.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Standards Compliance */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Standards & Compliance
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {standards.map((standard, index) => (
                    <div
                      key={index}
                      className="bg-background rounded-2xl p-6 shadow-sm border text-center"
                    >
                      <h3 className="text-lg font-semibold mb-3">
                        {standard.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {standard.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assistive Technologies */}
              <div className="bg-background rounded-2xl p-8 shadow-sm border mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Supported Assistive Technologies
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our website is designed to work with a variety of assistive
                  technologies, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">
                        Screen readers (JAWS, NVDA, VoiceOver)
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">
                        Voice recognition software
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">
                        Keyboard navigation tools
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">
                        Screen magnification software
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">
                        Switch navigation devices
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">
                        Eye-tracking systems
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Ongoing Efforts */}
              <div className="bg-background rounded-2xl p-8 shadow-sm border mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Ongoing Efforts
                </h3>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    We are continuously working to improve the accessibility of
                    our website. Our efforts include:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Regular accessibility audits and testing</li>
                    <li>• User testing with people with disabilities</li>
                    <li>• Staff training on accessibility best practices</li>
                    <li>• Implementing user feedback and suggestions</li>
                    <li>
                      • Staying current with accessibility guidelines and
                      standards
                    </li>
                    <li>• Third-party accessibility assessments</li>
                  </ul>
                </div>
              </div>

              {/* Known Issues */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-yellow-800">
                  Known Issues
                </h3>
                <p className="text-yellow-700 leading-relaxed mb-4">
                  We are aware of some accessibility challenges and are actively
                  working to address them:
                </p>
                <ul className="space-y-2 text-yellow-700">
                  <li>
                    • Some third-party embedded content may not be fully
                    accessible
                  </li>
                  <li>
                    • Certain interactive elements are being enhanced for better
                    screen reader support
                  </li>
                  <li>
                    • We are improving color contrast in some areas of the site
                  </li>
                </ul>
                <p className="text-yellow-700 mt-4">
                  We expect to resolve these issues in upcoming updates. Thank
                  you for your patience.
                </p>
              </div>

              {/* Feedback Section */}
              <div className="bg-muted/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Accessibility Feedback
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We welcome your feedback on the accessibility of ShopHub. If
                  you encounter any accessibility barriers or have suggestions
                  for improvement, please let us know.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Contact Methods:</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: accessibility@shophub.com</p>
                      <p>Phone: +1 (234) 567-8900</p>
                      <p>TTY: +1 (234) 567-8901</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Response Time:</h4>
                    <p className="text-muted-foreground">
                      We aim to respond to accessibility feedback within 2
                      business days and will work with you to resolve any issues
                      as quickly as possible.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="text-primary hover:underline font-medium"
                  >
                    Contact our accessibility team →
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
