"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Shield, Award, Star } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Justice Integrity, Results.",
      subtitle: "Defending Your Rights with Unwavering Dedication",
      description:
        "With over 25 years of experience, we provide exceptional legal representation across multiple practice areas. Your success is our commitment.",
      image:
        "https://i.pinimg.com/1200x/99/ed/32/99ed3244159144e15480eb3fdbe561b5.jpg",
    },
    {
      title: "Excellence in Legal Representation",
      subtitle: "Your Trusted Legal Partners",
      description:
        "From complex corporate matters to personal legal challenges, we deliver strategic solutions tailored to your unique needs.",
      image:
        "https://i.pinimg.com/1200x/99/ed/32/99ed3244159144e15480eb3fdbe561b5.jpg",
    },
    {
      title: "Proven Track Record of Success",
      subtitle: "Fighting for What Matters Most",
      description:
        "Over 5,000 cases won and countless lives changed. Experience the difference that dedicated legal expertise makes.",
      image:
        "https://i.pinimg.com/736x/a7/2f/06/a72f06dbdcf5ce0a3a669e47e769085a.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt="Hero background"
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-pure-white text-center space-y-4">
            {/* Professional Badge - Top Section */}
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-8 h-0.5 bg-crimson-red"></div>
              <Scale className="h-5 w-5" />
              <span className="text-xs font-bold tracking-widest uppercase">
                PROFESSIONAL LEGAL SERVICES
              </span>
              <div className="w-8 h-0.5 bg-crimson-red"></div>
            </div>

            {/* Main Title Section */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Proven Track Record of Success
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl text-crimson-red font-medium italic">
              Fighting for What Matters Most
            </h2>

            {/* Description */}
            <div className="space-y-2 max-w-lg mx-auto">
              <p className="text-base">
                Over 5,000 cases won and countless lives changed.
              </p>
              <p className="text-base">
                Experience the difference dedicated legal expertise makes.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button className="px-8 py-3 text-sm font-bold">
                Get Free Consultation
              </Button>
            </div>

            {/* Trust Indicators - Grid Layout */}
            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto pt-6">
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider">Trusted by</p>
                <p className="text-lg font-bold">10,000+ Clients</p>
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider">
                  Award Winning
                </p>
                <p className="text-lg font-bold">Legal Excellence</p>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="glass-effect rounded-2xl p-6 shadow-elegant backdrop-blur-xl border border-pure-white/20">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-pure-white mb-1">
                  Schedule Your Free Consultation
                </h3>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 text-crimson-red fill-current"
                    />
                  ))}
                  <span className="text-platinum text-xs ml-1">
                    Rated 5.0 by 1000+ clients
                  </span>
                </div>
              </div>

              <form className="space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg bg-pure-white/20 backdrop-blur-sm border border-pure-white/30 text-pure-white placeholder-platinum focus:outline-none focus:ring-1 focus:ring-crimson-red focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-pure-white/20 backdrop-blur-sm border border-pure-white/30 text-pure-white placeholder-platinum focus:outline-none focus:ring-1 focus:ring-crimson-red focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-pure-white/20 backdrop-blur-sm border border-pure-white/30 text-pure-white placeholder-platinum focus:outline-none focus:ring-1 focus:ring-crimson-red focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg bg-pure-white/20 backdrop-blur-sm border border-pure-white/30 text-pure-white focus:outline-none focus:ring-1 focus:ring-crimson-red focus:border-transparent text-sm">
                    <option value="">Select Practice Area</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="family">Family Law</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="real-estate">Real Estate Law</option>
                    <option value="immigration">Immigration</option>
                    <option value="employment">Employment Law</option>
                  </select>
                </div>
                <Button className="w-full bg-power-gradient text-pure-white font-medium py-3 text-sm hover:shadow-crimson transition-all duration-300 hover:scale-[1.02]">
                  Request Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <div className="text-center mt-4 pt-4 border-t border-pure-white/20">
                <p className="text-platinum text-xs">
                  <Shield className="inline h-3 w-3 mr-1" />
                  100% Confidential • No Obligation • Free Case Review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-pure-white/20 backdrop-blur-sm border border-pure-white/30 rounded-full flex items-center justify-center text-pure-white hover:bg-pure-white/30 transition-all duration-300 z-20"
      >
        <ArrowRight className="h-5 w-5 rotate-180" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-pure-white/20 backdrop-blur-sm border border-pure-white/30 rounded-full flex items-center justify-center text-pure-white hover:bg-pure-white/30 transition-all duration-300 z-20"
      >
        <ArrowRight className="h-5 w-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-pure-white/30 ${
              index === currentSlide
                ? "bg-crimson-red shadow-crimson scale-125"
                : "bg-pure-white/30 hover:bg-pure-white/50"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 right-6 bg-pure-white/20 backdrop-blur-sm border border-pure-white/30 rounded-full px-3 py-1 text-pure-white text-xs font-medium">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
}
