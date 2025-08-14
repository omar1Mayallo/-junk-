"use client";

import Link from "next/link";
import { FiDownload, FiExternalLink, FiCalendar, FiUser } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PressPage() {
  const pressReleases = [
    {
      title: "ShopHub Announces $50M Series B Funding Round",
      date: "December 15, 2024",
      category: "Funding",
      excerpt:
        "Leading e-commerce platform secures major funding to accelerate growth and expand internationally.",
      link: "#",
    },
    {
      title: "ShopHub Launches AI-Powered Personal Shopping Assistant",
      date: "November 28, 2024",
      category: "Product",
      excerpt:
        "Revolutionary AI technology helps customers discover products tailored to their preferences and style.",
      link: "#",
    },
    {
      title: "ShopHub Reaches 5 Million Active Users Milestone",
      date: "October 10, 2024",
      category: "Growth",
      excerpt:
        "Platform celebrates significant user growth and expansion into new markets across North America.",
      link: "#",
    },
    {
      title: "ShopHub Partners with Leading Sustainable Fashion Brands",
      date: "September 22, 2024",
      category: "Partnership",
      excerpt:
        "New sustainability initiative brings eco-friendly fashion options to millions of customers.",
      link: "#",
    },
    {
      title: "ShopHub Wins 'Best E-commerce Platform' at Tech Awards 2024",
      date: "August 15, 2024",
      category: "Awards",
      excerpt:
        "Recognition for innovation in user experience and customer satisfaction in e-commerce.",
      link: "#",
    },
  ];

  const mediaKit = [
    {
      title: "Company Logo Pack",
      description: "High-resolution logos in various formats",
      fileSize: "2.5 MB",
      format: "ZIP",
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand identity and usage guidelines",
      fileSize: "8.1 MB",
      format: "PDF",
    },
    {
      title: "Product Screenshots",
      description: "High-quality screenshots of our platform",
      fileSize: "15.3 MB",
      format: "ZIP",
    },
    {
      title: "Executive Photos",
      description: "Professional headshots of leadership team",
      fileSize: "12.7 MB",
      format: "ZIP",
    },
  ];

  const mediaContacts = [
    {
      name: "Sarah Johnson",
      title: "Head of Communications",
      email: "press@shophub.com",
      phone: "+1 (234) 567-8900",
    },
    {
      name: "Michael Chen",
      title: "PR Manager",
      email: "media@shophub.com",
      phone: "+1 (234) 567-8901",
    },
  ];

  const awards = [
    {
      year: "2024",
      award: "Best E-commerce Platform",
      organization: "Tech Innovation Awards",
    },
    {
      year: "2024",
      award: "Customer Choice Award",
      organization: "E-commerce Excellence",
    },
    {
      year: "2023",
      award: "Fastest Growing Startup",
      organization: "Business Growth Awards",
    },
    {
      year: "2023",
      award: "Innovation in Retail",
      organization: "Retail Technology Summit",
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
                Press & Media
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay updated with the latest news, announcements, and media
                resources from ShopHub.
              </p>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest News</h2>
              <p className="text-muted-foreground">
                Recent press releases and company announcements
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {pressReleases.map((release, index) => (
                <article
                  key={index}
                  className="bg-background rounded-2xl p-8 shadow-sm border"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary">{release.category}</Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <FiCalendar className="mr-1 h-4 w-4" />
                          {release.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        {release.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {release.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" asChild>
                      <Link href={release.link}>
                        Read Full Release
                        <FiExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <FiDownload className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Media Kit</h2>
              <p className="text-muted-foreground">
                Download our brand assets and media resources
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaKit.map((item, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-6 shadow-sm border"
                >
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      {item.format} • {item.fileSize}
                    </div>
                    <Button size="sm" variant="outline">
                      <FiDownload className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" variant="outline">
                <FiDownload className="mr-2 h-4 w-4" />
                Download Complete Media Kit
              </Button>
            </div>
          </div>
        </section>

        {/* Company Facts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Company Facts</h2>
              <p className="text-muted-foreground">
                Key information about ShopHub
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background rounded-2xl p-8 shadow-sm border">
                  <h3 className="text-xl font-bold mb-6 text-primary">
                    Company Overview
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Founded:</span>
                      <span className="font-medium">2014</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Headquarters:
                      </span>
                      <span className="font-medium">New York, NY</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Employees:</span>
                      <span className="font-medium">200+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Markets:</span>
                      <span className="font-medium">15+ Countries</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Customers:</span>
                      <span className="font-medium">5M+ Active Users</span>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-2xl p-8 shadow-sm border">
                  <h3 className="text-xl font-bold mb-6 text-primary">
                    Recent Awards
                  </h3>
                  <div className="space-y-4">
                    {awards.map((award, index) => (
                      <div
                        key={index}
                        className="border-b pb-3 last:border-b-0"
                      >
                        <div className="font-medium">{award.award}</div>
                        <div className="text-sm text-muted-foreground">
                          {award.organization} • {award.year}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Contacts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Media Contacts</h2>
              <p className="text-muted-foreground">
                Get in touch with our press team
              </p>
            </div>

            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaContacts.map((contact, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 shadow-sm border text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiUser className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">{contact.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {contact.title}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-primary hover:underline"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-primary hover:underline"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                For general inquiries, please contact us at{" "}
                <a
                  href="mailto:press@shophub.com"
                  className="text-primary hover:underline"
                >
                  press@shophub.com
                </a>
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
