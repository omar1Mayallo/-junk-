"use client";

import Link from "next/link";
import {
  FiTrendingUp,
  FiDollarSign,
  FiUsers,
  FiGlobe,
  FiDownload,
  FiCalendar,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function InvestorsPage() {
  const financialHighlights = [
    {
      metric: "Revenue Growth",
      value: "150%",
      period: "YoY 2024",
      icon: FiTrendingUp,
    },
    {
      metric: "Total Revenue",
      value: "$250M",
      period: "2024",
      icon: FiDollarSign,
    },
    {
      metric: "Active Users",
      value: "5M+",
      period: "Q4 2024",
      icon: FiUsers,
    },
    {
      metric: "Global Markets",
      value: "15+",
      period: "Countries",
      icon: FiGlobe,
    },
  ];

  const reports = [
    {
      title: "Q4 2024 Earnings Report",
      date: "December 15, 2024",
      type: "Quarterly Report",
      fileSize: "2.1 MB",
    },
    {
      title: "Annual Report 2024",
      date: "December 1, 2024",
      type: "Annual Report",
      fileSize: "8.5 MB",
    },
    {
      title: "Q3 2024 Earnings Report",
      date: "September 15, 2024",
      type: "Quarterly Report",
      fileSize: "1.9 MB",
    },
    {
      title: "Investor Presentation Q4 2024",
      date: "December 15, 2024",
      type: "Presentation",
      fileSize: "12.3 MB",
    },
  ];

  const upcomingEvents = [
    {
      title: "Q1 2025 Earnings Call",
      date: "March 15, 2025",
      time: "4:00 PM EST",
      type: "Earnings Call",
    },
    {
      title: "E-commerce Innovation Summit",
      date: "February 20, 2025",
      time: "9:00 AM EST",
      type: "Conference",
    },
    {
      title: "Annual Shareholder Meeting",
      date: "May 10, 2025",
      time: "2:00 PM EST",
      type: "Shareholder Meeting",
    },
  ];

  const leadership = [
    {
      name: "Sarah Johnson",
      title: "Chief Executive Officer",
      bio: "Former VP of E-commerce at Amazon, 15+ years in retail technology",
      image: "/avatars/avatar-1.png?height=200&width=200",
    },
    {
      name: "Michael Chen",
      title: "Chief Financial Officer",
      bio: "Former CFO at Shopify, CPA with expertise in high-growth companies",
      image: "/avatars/avatar-2.png?height=200&width=200",
    },
    {
      name: "Emily Rodriguez",
      title: "Chief Technology Officer",
      bio: "Former Engineering Director at Google, expert in scalable platforms",
      image: "/avatars/avatar-3.png?height=200&width=200",
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
                Investor Relations
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover ShopHub's financial performance, growth strategy, and
                investment opportunities in the rapidly expanding e-commerce
                market.
              </p>
            </div>
          </div>
        </section>

        {/* Financial Highlights */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Financial Highlights</h2>
              <p className="text-muted-foreground">
                Key metrics demonstrating our strong growth trajectory
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {financialHighlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div
                    key={index}
                    className="bg-background rounded-2xl p-8 shadow-sm border text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {highlight.value}
                    </div>
                    <div className="font-semibold mb-1">{highlight.metric}</div>
                    <div className="text-sm text-muted-foreground">
                      {highlight.period}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Investment Thesis */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Investment Thesis</h2>
                <p className="text-muted-foreground">
                  Why ShopHub represents a compelling investment opportunity
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-background rounded-2xl p-8 shadow-sm border">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    Market Leadership
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Positioned as a leader in the $6.2 trillion global
                    e-commerce market with innovative technology and superior
                    customer experience.
                  </p>
                </div>
                <div className="bg-background rounded-2xl p-8 shadow-sm border">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    Scalable Platform
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our proprietary technology platform enables rapid expansion
                    into new markets and product categories with minimal
                    incremental investment.
                  </p>
                </div>
                <div className="bg-background rounded-2xl p-8 shadow-sm border">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    Strong Unit Economics
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Proven business model with improving margins, strong
                    customer retention, and increasing lifetime value metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Reports */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Financial Reports</h2>
              <p className="text-muted-foreground">
                Access our latest financial documents and reports
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {reports.map((report, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-6 shadow-sm border"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold mb-1">{report.title}</h3>
                      <div className="text-sm text-muted-foreground mb-2">
                        {report.type}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <FiCalendar className="mr-1 h-3 w-3" />
                        {report.date}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <FiDownload className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    PDF • {report.fileSize}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All Reports
              </Button>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-muted-foreground">
                Mark your calendar for these important investor events
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-6 shadow-sm border"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-semibold mb-2">{event.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <FiCalendar className="mr-2 h-4 w-4" />
                        {event.date} at {event.time}
                      </div>
                      <div className="text-sm text-primary">{event.type}</div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Button size="sm">Add to Calendar</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
              <p className="text-muted-foreground">
                Meet the experienced leaders driving our growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {leadership.map((leader, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 shadow-sm border text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-3">
                    {leader.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact IR */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Investor Contact</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our financial performance or investment
                opportunities? Get in touch with our investor relations team.
              </p>
              <div className="bg-background rounded-2xl p-8 shadow-sm border">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-muted-foreground text-sm">
                      Chief Financial Officer
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm">
                      Email:{" "}
                      <a
                        href="mailto:investors@shophub.com"
                        className="text-primary hover:underline"
                      >
                        investors@shophub.com
                      </a>
                    </p>
                    <p className="text-sm">
                      Phone:{" "}
                      <a
                        href="tel:+1234567890"
                        className="text-primary hover:underline"
                      >
                        +1 (234) 567-8900
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Investor Relations</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
