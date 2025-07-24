import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Trophy, Clock, Shield } from "lucide-react"
import Image from "next/image"

export function AboutPreview() {
  return (
    <section className="py-24 bg-elegant-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              {/* Section Header */}
              <div className="flex items-center space-x-3 text-crimson-red">
                <div className="w-16 h-1 bg-power-gradient rounded-full"></div>
                <span className="text-sm font-bold tracking-wider uppercase">About Our Firm</span>
                <div className="w-16 h-1 bg-power-gradient rounded-full"></div>
              </div>

              {/* Main Title */}
              <h2 className="text-4xl lg:text-6xl font-bold text-deep-navy leading-tight">
                Excellence in Legal Representation
                <span className="text-crimson-red"> Since 1998</span>
              </h2>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg text-charcoal leading-relaxed font-medium">
                  Founded on the principles of <span className="text-crimson-red font-bold">integrity</span>,
                  <span className="text-royal-blue font-bold"> dedication</span>, and unwavering commitment to justice,
                  our law firm has been serving clients with distinction for over two decades.
                </p>

                <p className="text-lg text-charcoal leading-relaxed font-medium">
                  We combine traditional legal expertise with innovative approaches to deliver exceptional results. From
                  individual clients to Fortune 500 companies, we provide the same level of
                  <span className="text-deep-navy font-bold"> excellence and dedication</span>.
                </p>
              </div>
            </div>

            {/* Stats Grid - Enhanced */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center group hover-lift">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-crimson-red/10 rounded-full flex items-center justify-center group-hover:bg-crimson-red group-hover:scale-110 transition-all duration-300">
                    <Users className="h-8 w-8 text-crimson-red group-hover:text-pure-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-deep-navy mb-1">50+</div>
                <div className="text-sm text-steel-gray font-semibold">Expert Lawyers</div>
              </div>

              <div className="text-center group hover-lift">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-royal-blue/10 rounded-full flex items-center justify-center group-hover:bg-royal-blue group-hover:scale-110 transition-all duration-300">
                    <Trophy className="h-8 w-8 text-royal-blue group-hover:text-pure-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-deep-navy mb-1">98%</div>
                <div className="text-sm text-steel-gray font-semibold">Success Rate</div>
              </div>

              <div className="text-center group hover-lift">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-deep-navy/10 rounded-full flex items-center justify-center group-hover:bg-deep-navy group-hover:scale-110 transition-all duration-300">
                    <Clock className="h-8 w-8 text-deep-navy group-hover:text-pure-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-deep-navy mb-1">25+</div>
                <div className="text-sm text-steel-gray font-semibold">Years Experience</div>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="bg-authority-gradient text-pure-white font-bold text-lg px-8 py-4 hover:shadow-royal transition-all duration-300 hover:scale-105">
              Learn More About Us
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>

          {/* Image Section - Enhanced */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <Image
                src="https://milleradvocates.com/img/miller-jnr.png"
                alt="Our professional law firm office"
                width={500}
                height={600}
                className="rounded-3xl shadow-elegant hover-lift"
              />

              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-power-gradient text-pure-white p-4 rounded-2xl shadow-crimson">
                <Shield className="h-8 w-8 mb-2" />
                <div className="text-sm font-bold">Trusted</div>
                <div className="text-xs">Since 1998</div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-royal-blue/20 to-crimson-red/20 rounded-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-power-gradient rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-authority-gradient rounded-full opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
