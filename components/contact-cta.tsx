import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Calendar, ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-20 bg-[#0a192f] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff] rounded-full mix-blend-screen opacity-20 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff7e33] rounded-full mix-blend-screen opacity-20 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] via-[#a0e9ff] to-white bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#ccd6f6] max-w-3xl mx-auto">
            Don't let legal challenges overwhelm you. Contact our experienced
            team today.
          </p>
        </div>

        {/* Contact Cards - Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <Phone className="h-6 w-6" />,
              title: "Call Us",
              desc: "Speak directly with our team",
              contact: "+254 (755) 123-4567",
              color: "from-[#00d4ff] to-[#00b4cc]",
            },
            {
              icon: <Mail className="h-6 w-6" />,
              title: "Email Us",
              desc: "Send us your legal questions",
              contact: "miller@milleradvocate.com",
              color: "from-[#ff7e33] to-[#ff5e00]",
            },
            {
              icon: <MessageCircle className="h-6 w-6" />,
              title: "Live Chat",
              desc: "Get instant answers online",
              contact: "Available 24/7",
              color: "from-[#00d4ff] to-[#00b4cc]",
            },
            {
              icon: <Calendar className="h-6 w-6" />,
              title: "Schedule",
              desc: "Book your consultation",
              contact: "Free Consultation",
              color: "from-[#ff7e33] to-[#ff5e00]",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-[#112240] border-[#1f2d4a] hover:border-[#00d4ff] transition-all group"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-[#8892b0] text-sm mb-3">{item.desc}</p>
                <p
                  className={`font-medium ${
                    item.color.includes("00d4ff")
                      ? "text-[#00d4ff]"
                      : "text-[#ff7e33]"
                  }`}
                >
                  {item.contact}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Contact Form */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-[#112240] border-[#1f2d4a]">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Form Section */}
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-white">
                    Get Your Free Consultation
                  </h3>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-lg bg-[#0a192f] border border-[#1f2d4a] text-white placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded-lg bg-[#0a192f] border border-[#1f2d4a] text-white placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-[#0a192f] border border-[#1f2d4a] text-white placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg bg-[#0a192f] border border-[#1f2d4a] text-white placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent"
                    />
                    <select className="w-full px-4 py-3 rounded-lg bg-[#0a192f] border border-[#1f2d4a] text-white focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent">
                      <option value="">Select Practice Area</option>
                      <option value="criminal">Criminal Law</option>
                      <option value="family">Family Law</option>
                      <option value="corporate">Corporate Law</option>
                      <option value="real-estate">Real Estate Law</option>
                      <option value="immigration">Immigration</option>
                      <option value="employment">Employment Law</option>
                    </select>
                    <textarea
                      placeholder="Brief description of your legal matter"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a192f] border border-[#1f2d4a] text-white placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent"
                    ></textarea>
                    <Button className="w-full bg-gradient-to-r from-[#00d4ff] to-[#0077ff] hover:from-[#00b4cc] hover:to-[#0066cc] text-white font-semibold py-4 text-lg transition-all">
                      Request Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>

                {/* Benefits Section */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-2xl font-semibold mb-6 text-white">
                      Why Choose Us?
                    </h4>
                    <ul className="space-y-4">
                      {[
                        "25+ years of legal experience",
                        "98% success rate in cases",
                        "Free initial consultation",
                        "No fees unless we win",
                        "Available 24/7 for emergencies",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-4 h-4 bg-[#00d4ff] rounded-full mr-3 mt-1 flex-shrink-0"></div>
                          <span className="text-[#ccd6f6]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Emergency Section */}
                  <div className="bg-gradient-to-r from-[#ff7e33]/10 to-[#ff5e00]/10 border border-[#ff7e33]/20 rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3 text-white">
                      Emergency Legal Services
                    </h4>
                    <p className="text-[#ccd6f6] mb-4">
                      Facing a legal emergency? Our attorneys are available
                      24/7.
                    </p>
                    <Button
                      variant="outline"
                      className="border-2 border-[#ff7e33] text-[#ff7e33] hover:bg-[#ff7e33] hover:text-white w-full"
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
  );
}
