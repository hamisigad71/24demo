import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Calendar, ArrowRight } from "lucide-react"

export function ContactCTA() {
  return (
    <section className="py-20 bg-deep-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-crimson-red rounded-full -translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-platinum max-w-3xl mx-auto">
            Don't let legal challenges overwhelm you. Contact our experienced team today for a free consultation and
            discover how we can help protect your interests.
          </p>
        </div>

        {/* Contact Options - Fixed Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-crimson-red group-hover:scale-110 transition-all">
                <Phone className="h-8 w-8 text-royal-blue group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-platinum text-sm mb-3">Speak directly with our legal team</p>
              <a href="tel:+15551234567" className="text-royal-blue font-semibold hover:text-white transition-colors">
                +254 (755) 123-4567
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-royal-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-crimson-red group-hover:scale-110 transition-all">
                <Mail className="h-8 w-8 text-royal-blue group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-platinum text-sm mb-3">Send us your legal questions</p>
              <a
                href="mailto:info@lawfirm.com"
                className="text-crimson-red font-semibold hover:text-white transition-colors"
              >
                miller@milleradvocate.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-royal-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-crimson-red group-hover:scale-110 transition-all">
                <MessageCircle className="h-8 w-8 text-royal-blue group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-platinum text-sm mb-3">Get instant answers online</p>
              <p className="text-crimson-red font-semibold">Available 24/7</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-royal-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-crimson-red group-hover:scale-110 transition-all">
                <Calendar className="h-8 w-8 text-royal-blue group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule</h3>
              <p className="text-platinum text-sm mb-3">Book your consultation online</p>
              <p className="text-crimson-red font-semibold">Free Consultation</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Contact Form Section - Fixed Layout */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-white/20">Get Your Free Consultation</h3>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-platinum focus:outline-none focus:ring-2 focus:ring-crimson-red focus:border-transparent transition-all duration-300"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-platinum focus:outline-none focus:ring-2 focus:ring-crimson-red focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-platinum focus:outline-none focus:ring-2 focus:ring-crimson-red focus:border-transparent transition-all duration-300"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-platinum focus:outline-none focus:ring-2 focus:ring-crimson-red focus:border-transparent transition-all duration-300"
                    />
                    <select className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-crimson-red focus:border-transparent transition-all duration-300">
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
                    <textarea
                      placeholder="Brief description of your legal matter"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-platinum focus:outline-none focus:ring-2 focus:ring-crimson-red focus:border-transparent resize-none transition-all duration-300"
                    ></textarea>
                    <Button className="w-full bg-power-gradient text-white font-semibold py-4 text-lg hover:shadow-crimson transition-all duration-300 hover:scale-105">
                      Request Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>

                {/* Why Choose Us Section */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-2xl font-semibold mb-6 text-white/20 ">Why Choose Us?</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-crimson-red rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-lg text-white/20 ">25+ years of legal experience</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-crimson-red rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-lg text-white/20">98% success rate in cases</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-crimson-red rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-lg text-white/20">Free initial consultation</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-crimson-red rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-lg text-white/20">No fees unless we win</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-crimson-red rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-lg text-white/20">Available 24/7 for emergencies</span>
                      </li>
                    </ul>
                  </div>

                  {/* Emergency Legal Services */}
                  <div className="bg-royal-blue/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="text-xl font-semibold mb-3">Emergency Legal Services</h4>
                    <p className="text-platinum mb-4 leading-relaxed">
                      Facing a legal emergency? Our attorneys are available 24/7 to provide immediate assistance.
                    </p>
                    <Button
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-deep-navy bg-transparent font-semibold transition-all duration-300"
                    >
                      Emergency Hotline: (555) 911-LAW
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
