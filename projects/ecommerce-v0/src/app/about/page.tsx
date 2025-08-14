"use client";

import { FiUsers, FiTruck, FiAward, FiHeart } from "react-icons/fi";

export default function AboutPage() {
  const stats = [
    { label: "Happy Customers", value: "50,000+", icon: FiUsers },
    { label: "Products Delivered", value: "100,000+", icon: FiTruck },
    { label: "Years of Excellence", value: "10+", icon: FiAward },
    { label: "Customer Satisfaction", value: "99%", icon: FiHeart },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/avatars/avatar-1.png?height=300&width=300",
      bio: "Passionate about bringing quality fashion to everyone.",
    },
    {
      name: "Mike Chen",
      role: "Head of Design",
      image: "/avatars/avatar-2.png?height=300&width=300",
      bio: "Creating beautiful and functional products for everyday life.",
    },
    {
      name: "Emily Davis",
      role: "Customer Success",
      image: "/avatars/avatar-3.png?height=300&width=300",
      bio: "Ensuring every customer has an amazing experience.",
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
                About ShopHub
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're more than just an online store. We're a community of
                fashion enthusiasts dedicated to bringing you the latest trends,
                quality products, and exceptional service that makes shopping a
                joy.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2014, ShopHub started as a small boutique with a
                    simple mission: to make quality fashion accessible to
                    everyone. What began as a passion project has grown into a
                    trusted online destination for thousands of customers
                    worldwide.
                  </p>
                  <p>
                    We believe that great style shouldn't break the bank. That's
                    why we work directly with manufacturers and designers to
                    bring you the latest trends at prices that make sense. Every
                    product in our collection is carefully selected for quality,
                    style, and value.
                  </p>
                  <p>
                    Today, we're proud to serve customers in over 50 countries,
                    but our commitment remains the same: exceptional products,
                    outstanding service, and a shopping experience that puts you
                    first.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/our-story.avif?height=500&width=600"
                  alt="Our story"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do and shape the
                experience we create for our customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FiAward className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality. Every product is carefully
                  inspected and tested before it reaches you.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FiHeart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Love</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our success. We go above and beyond to
                  ensure you're happy with every purchase.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FiTruck className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast & Reliable</h3>
                <p className="text-muted-foreground">
                  Quick shipping, reliable delivery, and hassle-free returns.
                  Shopping should be convenient and stress-free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The passionate people behind ShopHub who work every day to bring
                you the best shopping experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Shopping?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of satisfied customers and discover your new
                favorite products today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Shop Now
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
