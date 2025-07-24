"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scale, Shield, Award, Star } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Justice. Integrity. Results.",
      subtitle: "Defending Your Rights with Unwavering Dedication",
      description:
        "With over 25 years of experience, we provide exceptional legal representation across multiple practice areas. Your success is our commitment.",
      image: "https://i.pinimg.com/1200x/90/6c/29/906c295f8c01b2957b89d0b8936875ad.jpg",
    },
    {
      title: "Excellence in Legal Representation",
      subtitle: "Your Trusted Legal Partners",
      description:
        "From complex corporate matters to personal legal challenges, we deliver strategic solutions tailored to your unique needs.",
      image: "https://i.pinimg.com/1200x/99/ed/32/99ed3244159144e15480eb3fdbe561b5.jpg",
    },
    {
      title: "Proven Track Record of Success",
      subtitle: "Fighting for What Matters Most",
      description:
        "Over 5,000 cases won and countless lives changed. Experience the difference that dedicated legal expertise makes.",
      image: "https://i.pinimg.com/736x/a7/2f/06/a72f06dbdcf5ce0a3a669e47e769085a.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Pure Image Slideshow Background */}
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
            {/* Subtle dark overlay for text readability only */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-pure-white space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              {/* Professional Badge */}
              <div className="flex items-center space-x-3 text-platinum">
                <div className="w-12 h-1 bg-crimson-red"></div>
                <Scale className="h-6 w-6" />
                <span className="text-sm font-bold tracking-wider uppercase">Professional Legal Services</span>
                <div className="w-12 h-1 bg-crimson-red"></div>
              </div>

              {/* Main Title - Stunning Typography */}
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-pure-white via-platinum to-pure-white bg-clip-text text-transparent drop-shadow-2xl">
                {slides[currentSlide].title}
              </h1>

              {/* Subtitle with Accent */}
              <h2 className="text-2xl lg:text-4xl text-crimson-red font-light leading-relaxed drop-shadow-lg">
                {slides[currentSlide].subtitle}
              </h2>

              {/* Description */}
              <p className="text-xl text-platinum leading-relaxed max-w-2xl font-medium drop-shadow-lg">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* CTA Buttons - Premium Design */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-power-gradient text-pure-white font-bold text-lg px-10 py-6 hover:shadow-crimson transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                Get Free Consultation
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-deep-navy text-lg px-10 py-6 bg-transparent font-bold transition-all duration-300 hover:shadow-elegant"
              >
                View Our Services
              </Button>
            </div>

            {/* Trust Indicators - Enhanced */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-crimson-red/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-crimson-red/30 transition-colors border border-pure-white/20">
                  <Shield className="h-6 w-6 text-crimson-red" />
                </div>
                <div>
                  <div className="text-sm text-platinum font-medium">Trusted by</div>
                  <div className="font-bold text-lg drop-shadow-lg">10,000+ Clients</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-royal-blue/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-royal-blue/30 transition-colors border border-pure-white/20">
                  <Award className="h-6 w-6 text-royal-blue" />
                </div>
                <div>
                  <div className="text-sm text-platinum font-medium">Award Winning</div>
                  <div className="font-bold text-lg drop-shadow-lg">Legal Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form - Glass Design */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="glass-effect rounded-3xl p-8 shadow-elegant hover-lift backdrop-blur-xl border border-pure-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-pure-white mb-2 drop-shadow-lg">
                  Schedule Your Free Consultation
                </h3>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-crimson-red fill-current" />
                  ))}
                  <span className="text-platinum text-sm ml-2">Rated 5.0 by 1000+ clients</span>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-6 py-4 rounded-xl bg-pure-white/20 backdrop-blur-sm border border-pure-white/30 text-pure-white placeholder-platinum focus:outline-none focus:ring-2 focus:ring-crimson-red focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 rounded-xl bg-pure-white/20 backdrop-blur-sm border border-pure-white/30 text-pure-white placeholder-platinum focus:outline-none focus:ring-2 focus:ring-crimson-red focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-6 py-4 rounded-xl bg-pure-white/20 backdrop-blur-sm border border-pure-white/30 text-pure-white placeholder-platinum focus:outline-none focus:ring-2 focus:ring-crimson-red focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <select className="w-full px-6 py-4 rounded-xl bg-pure-white/20 backdrop-blur-sm border border-pure-white/30 text-pure-white focus:outline-none focus:ring-2 focus:ring-crimson-red focus:border-transparent transition-all duration-300">
                    <option value="" className="text-charcoal">
                      Select Practice Area
                    </option>
                    <option value="criminal" className="text-charcoal">
                      Criminal Law
                    </option>
                    <option value="family" className="text-charcoal">
                      Family Law
                    </option>
                    <option value="corporate" className="text-charcoal">
                      Corporate Law
                    </option>
                    <option value="real-estate" className="text-charcoal">
                      Real Estate Law
                    </option>
                    <option value="immigration" className="text-charcoal">
                      Immigration
                    </option>
                    <option value="employment" className="text-charcoal">
                      Employment Law
                    </option>
                  </select>
                </div>
                <Button className="w-full bg-power-gradient text-pure-white font-bold py-4 text-lg hover:shadow-crimson transition-all duration-300 hover:scale-105">
                  Request Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              {/* Trust Badge */}
              <div className="text-center mt-6 pt-6 border-t border-pure-white/20">
                <p className="text-platinum text-sm">
                  <Shield className="inline h-4 w-4 mr-1" />
                  100% Confidential • No Obligation • Free Case Review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-pure-white/20 backdrop-blur-sm border border-pure-white/30 rounded-full flex items-center justify-center text-pure-white hover:bg-pure-white/30 transition-all duration-300 z-20"
      >
        <ArrowRight className="h-6 w-6 rotate-180" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-pure-white/20 backdrop-blur-sm border border-pure-white/30 rounded-full flex items-center justify-center text-pure-white hover:bg-pure-white/30 transition-all duration-300 z-20"
      >
        <ArrowRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators - Enhanced */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-pure-white/30 ${
              index === currentSlide
                ? "bg-crimson-red shadow-crimson scale-125"
                : "bg-pure-white/30 hover:bg-pure-white/50"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 bg-pure-white/20 backdrop-blur-sm border border-pure-white/30 rounded-full px-4 py-2 text-pure-white text-sm font-semibold">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  )
}
