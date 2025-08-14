"use client";

import Link from "next/link";
import {
  FiMapPin,
  FiUsers,
  FiTrendingUp,
  FiHeart,
  FiAward,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "New York, NY",
      type: "Full-time",
      level: "Senior",
      description:
        "Join our engineering team to build amazing user experiences for millions of customers.",
      requirements: [
        "5+ years React experience",
        "TypeScript proficiency",
        "E-commerce experience preferred",
      ],
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      level: "Mid-level",
      description:
        "Lead product strategy and development for our core shopping experience.",
      requirements: [
        "3+ years product management",
        "E-commerce background",
        "Data-driven mindset",
      ],
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      level: "Mid-level",
      description:
        "Design intuitive and delightful experiences for our customers.",
      requirements: [
        "4+ years UX design",
        "Figma expertise",
        "Mobile design experience",
      ],
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Chicago, IL",
      type: "Full-time",
      level: "Entry-level",
      description:
        "Help our customers succeed and grow their business with our platform.",
      requirements: [
        "2+ years customer success",
        "Excellent communication",
        "Problem-solving skills",
      ],
    },
    {
      title: "Data Scientist",
      department: "Data",
      location: "Remote",
      type: "Full-time",
      level: "Senior",
      description:
        "Use data to drive insights and improve our recommendation systems.",
      requirements: [
        "PhD or Masters in relevant field",
        "Python/R proficiency",
        "ML experience",
      ],
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Los Angeles, CA",
      type: "Full-time",
      level: "Entry-level",
      description:
        "Drive growth through creative marketing campaigns and strategies.",
      requirements: [
        "2+ years marketing experience",
        "Digital marketing skills",
        "Creative mindset",
      ],
    },
  ];

  const benefits = [
    {
      icon: FiHeart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, dental, vision, and wellness programs",
    },
    {
      icon: FiTrendingUp,
      title: "Growth & Development",
      description:
        "Learning stipend, conference attendance, and career development programs",
    },
    {
      icon: FiUsers,
      title: "Work-Life Balance",
      description:
        "Flexible hours, remote work options, and unlimited PTO policy",
    },
    {
      icon: FiAward,
      title: "Compensation",
      description:
        "Competitive salary, equity options, and performance bonuses",
    },
  ];

  const values = [
    {
      title: "Customer First",
      description:
        "We put our customers at the center of everything we do, creating experiences that delight and inspire.",
    },
    {
      title: "Innovation",
      description:
        "We embrace new ideas and technologies to stay ahead of the curve and solve complex problems.",
    },
    {
      title: "Collaboration",
      description:
        "We work together as one team, supporting each other and celebrating shared successes.",
    },
    {
      title: "Integrity",
      description:
        "We act with honesty and transparency, building trust with our customers and each other.",
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
                Join Our Team
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Help us build the future of e-commerce. We're looking for
                passionate, talented people who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#openings">View Open Positions</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#culture">Learn About Our Culture</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5M+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">
                  Employee Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section id="culture" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do and shape the culture
                we're building together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 shadow-sm border"
                >
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Work With Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer competitive benefits and a supportive environment where
                you can grow and thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground">
                Join our growing team and help shape the future of e-commerce
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 shadow-sm border"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                        <Badge variant="outline">{job.level}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <FiMapPin className="mr-1 h-4 w-4" />
                      {job.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">
                            {req}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button>Apply Now</Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Don't see a position that fits? We're always looking for
                talented people.
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">Send Us Your Resume</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Hiring Process</h2>
              <p className="text-muted-foreground">
                We've designed a fair and transparent process to find the best
                candidates
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Application</h3>
                  <p className="text-sm text-muted-foreground">
                    Submit your application and resume online
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Phone Screen</h3>
                  <p className="text-sm text-muted-foreground">
                    Initial conversation with our recruiting team
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Interviews</h3>
                  <p className="text-sm text-muted-foreground">
                    Meet with team members and hiring managers
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Offer</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive your offer and join the team!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
              <p className="text-muted-foreground mb-8">
                Take the next step in your career and help us build something
                amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#openings">Browse Open Positions</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
