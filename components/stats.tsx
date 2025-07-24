"use client"

import { Button } from "@/components/ui/button"

import { useState, useEffect, useRef } from "react"
import { Scale, Users, Trophy, Building } from "lucide-react"

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    experience: 0,
    cases: 0,
    lawyers: 0,
    clients: 0,
  })

  const sectionRef = useRef<HTMLDivElement>(null)

  const finalCounts = {
    experience: 25,
    cases: 5000,
    lawyers: 50,
    clients: 10000,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps

        setCounts({
          experience: Math.floor(finalCounts.experience * progress),
          cases: Math.floor(finalCounts.cases * progress),
          lawyers: Math.floor(finalCounts.lawyers * progress),
          clients: Math.floor(finalCounts.clients * progress),
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounts(finalCounts)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const stats = [
    {
      icon: Scale,
      count: counts.experience,
      suffix: "+",
      label: "Years of Experience",
      description: "Serving clients with distinction",
      color: "crimson-red",
    },
    {
      icon: Trophy,
      count: counts.cases,
      suffix: "+",
      label: "Cases Won",
      description: "Successful legal outcomes",
      color: "royal-blue",
    },
    {
      icon: Users,
      count: counts.lawyers,
      suffix: "+",
      label: "Expert Lawyers",
      description: "Dedicated legal professionals",
      color: "deep-navy",
    },
    {
      icon: Building,
      count: counts.clients,
      suffix: "+",
      label: "Clients Served",
      description: "Trusted by individuals and corporations",
      color: "crimson-red",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-patriot-gradient text-pure-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pure-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pure-white rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pure-white rounded-full -translate-x-32 -translate-y-32"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 text-platinum mb-6">
            <div className="w-16 h-1 bg-pure-white rounded-full"></div>
            <span className="text-sm font-bold tracking-wider uppercase">Our Track Record</span>
            <div className="w-16 h-1 bg-pure-white rounded-full"></div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pure-white via-platinum to-pure-white bg-clip-text text-transparent">
            Excellence Speaks for Itself
          </h2>
          <p className="text-xl text-platinum max-w-3xl mx-auto font-medium">
            Numbers that reflect our unwavering commitment to excellence and our clients' success
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover-lift">
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 bg-pure-white/20 rounded-full flex items-center justify-center group-hover:bg-pure-white/30 group-hover:scale-110 transition-all duration-500 shadow-elegant">
                  <stat.icon className="h-12 w-12 text-pure-white" />
                </div>
              </div>

              <div className="space-y-3">
                <div
                  className={`text-5xl lg:text-6xl font-bold ${
                    stat.color === "crimson-red"
                      ? "text-crimson-red"
                      : stat.color === "royal-blue"
                        ? "text-royal-blue"
                        : "text-pure-white"
                  } drop-shadow-lg`}
                >
                  {stat.count.toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-xl font-bold text-pure-white">{stat.label}</div>
                <div className="text-sm text-platinum font-medium">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-platinum text-lg mb-6 font-medium">Ready to become our next success story?</p>
          <Button className="bg-power-gradient text-pure-white font-bold text-lg px-10 py-4 hover:shadow-crimson transition-all duration-300 hover:scale-105 animate-pulse-glow">
            Start Your Case Today
          </Button>
        </div>
      </div>
    </section>
  )
}
