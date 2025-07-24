"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      company: "Tech Innovations Inc.",
      image:
        "https://i.pinimg.com/736x/d2/9f/c7/d29fc74e3e10695f29a944fca55df122.jpg",
      rating: 5,
      text: "The legal team provided exceptional guidance during our company merger. Their expertise in corporate law and attention to detail made the entire process smooth and successful. I highly recommend their services.",
      case: "Corporate Law",
    },
    {
      name: "Michael Rodriguez",
      role: "Individual Client",
      company: "Personal Injury Case",
      image:
        "https://i0.wp.com/www.golfscore.ke/wp-content/uploads/2024/02/AB2Q0985.jpg?resize=683%2C1024&ssl=1",
      rating: 5,
      text: "After my accident, I was overwhelmed with medical bills and insurance claims. The attorneys fought tirelessly for my rights and secured a settlement that exceeded my expectations. Their compassion and professionalism were outstanding.",
      case: "Personal Injury",
    },
    {
      name: "Emily Chen",
      role: "Entrepreneur",
      company: "Green Solutions LLC",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrzL3Oug2AwgzcoVrvjyiNb33CdhxbVunOaQ&s",
      rating: 5,
      text: "Starting my business seemed daunting until I found this law firm. They guided me through business formation, contracts, and compliance issues. Their strategic advice has been invaluable to my success.",
      case: "Business Formation",
    },
    {
      name: "David Thompson",
      role: "Real Estate Investor",
      company: "Thompson Properties",
      image: "https://biznakenya.com/wp-content/uploads/2023/08/kib.jpg",
      rating: 5,
      text: "Complex real estate transactions require expert legal support. This firm has handled multiple property acquisitions for me with precision and efficiency. Their knowledge of real estate law is unmatched.",
      case: "Real Estate Law",
    },
    {
      name: "Lisa Martinez",
      role: "Family Client",
      company: "Custody Case",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/4uo7ijecdq9ka20gu270veo8qm.jpg",
      rating: 5,
      text: "During my difficult divorce and custody battle, the family law team provided not just legal expertise but emotional support. They fought for my children's best interests and achieved an outcome I never thought possible.",
      case: "Family Law",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-crimson mb-4">
            <div className="w-12 h-1 bg-crimson"></div>
            <span className="text-sm font-semibold tracking-wider uppercase">
              Client Testimonials
            </span>
            <div className="w-12 h-1 bg-crimson"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            What Our Clients Say
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our legal services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 text-crimson mx-auto mb-8" />

                <div className="mb-8">
                  <p className="text-2xl text-gray-700 leading-relaxed italic mb-8">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-6 w-6 text-crimson fill-current"
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={
                      testimonials[currentTestimonial].image ||
                      "/placeholder.svg"
                    }
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-navy">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-sm text-crimson font-semibold">
                      {testimonials[currentTestimonial].case}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-crimson hover:text-white border-crimson"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-crimson hover:text-white border-crimson"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentTestimonial ? "bg-crimson" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-crimson fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">
                  "{testimonial.text.substring(0, 120)}..."
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h5 className="font-semibold text-navy text-sm">
                      {testimonial.name}
                    </h5>
                    <p className="text-xs text-gray-500">{testimonial.case}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
