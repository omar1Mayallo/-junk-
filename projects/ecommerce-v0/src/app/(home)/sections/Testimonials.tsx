"use client";

import { FiStar, FiUser } from "react-icons/fi";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Verified Customer",
      content:
        "Amazing quality products and super fast shipping! I've been shopping here for over a year and never been disappointed.",
      rating: 5,
      avatar: "/avatars/avatar-1.png?height=60&width=60",
    },
    {
      name: "Mike Chen",
      role: "Verified Customer",
      content:
        "The customer service is outstanding. They helped me find exactly what I needed and the prices are unbeatable.",
      rating: 5,
      avatar: "/avatars/avatar-2.png?height=60&width=60",
    },
    {
      name: "Emily Davis",
      role: "Verified Customer",
      content:
        "Love the variety of products available. The website is easy to navigate and checkout is seamless.",
      rating: 5,
      avatar: "/avatars/avatar-3.png?height=60&width=60",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="h-4 w-4 text-yellow-500 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                  <FiUser className="h-6 w-6 text-muted-foreground hidden" />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
