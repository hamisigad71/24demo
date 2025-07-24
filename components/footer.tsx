import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, Scale } from "lucide-react"

export function Footer() {
  const practiceAreas = [
    "Criminal Law",
    "Family Law",
    "Corporate Law",
    "Real Estate Law",
    "Immigration",
    "Employment Law",
  ]

  const quickLinks = ["About Us", "Our Team", "Case Studies", "Blog", "Careers", "Contact"]

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-crimson rounded-lg flex items-center justify-center">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">LawFirm</h3>
                <p className="text-sm text-crimson">Professional Legal Services</p>
              </div>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Providing exceptional legal representation with integrity, dedication, and results. Your trusted legal
              partners for over 25 years.
            </p>

            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-crimson hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-crimson hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-crimson hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-crimson hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceAreas.map((area, index) => (
                <li key={index}>
                  <Link
                    href={`/practice-areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-crimson transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-crimson transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Legal Resources</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-crimson transition-colors text-sm">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/client-portal" className="text-gray-400 hover:text-crimson transition-colors text-sm">
                    Client Portal
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-crimson transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-gray-400 hover:text-crimson transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-crimson mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    123 Legal Plaza, Suite 500
                    <br />
                    Downtown District
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-crimson flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Main Office</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-crimson flex-shrink-0" />
                <div>
                  <p className="text-gray-400">info@lawfirm.com</p>
                  <p className="text-sm text-gray-500">General Inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-crimson mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    Mon - Fri: 8:00 AM - 6:00 PM
                    <br />
                    Sat: 9:00 AM - 2:00 PM
                    <br />
                    Sun: Emergency Only
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-light/10 rounded-lg">
              <h5 className="font-semibold text-blue-light mb-2">24/7 Emergency Line</h5>
              <p className="text-sm text-gray-400 mb-2">For urgent legal matters outside business hours</p>
              <p className="text-crimson font-semibold">(555) 911-LAW</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Informed</h4>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for legal insights, case updates, and important law changes.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald"
              />
              <Button className="bg-crimson hover:bg-crimson/90 text-white">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LawFirm Professional Legal Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-crimson text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-crimson text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-crimson text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
