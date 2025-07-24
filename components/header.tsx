"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, Shield } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<{ email: string; name: string } | null>(null)

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const userEmail = localStorage.getItem("userEmail")
    const userName = localStorage.getItem("userName")

    if (isLoggedIn) {
      setUser({
        email: userEmail || "",
        name: userName || userEmail || "User",
      })
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userName")
    setUser(null)
    // Optionally redirect to home
    window.location.href = "/"
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const practiceAreas = [
    { name: "Criminal Law", href: "/practice-areas/criminal-law" },
    { name: "Family Law", href: "/practice-areas/family-law" },
    { name: "Corporate Law", href: "/practice-areas/corporate-law" },
    { name: "Real Estate Law", href: "/practice-areas/real-estate-law" },
    { name: "Immigration", href: "/practice-areas/immigration" },
    { name: "Employment & Labor Law", href: "/practice-areas/employment-law" },
  ]

  return (
    <>
      {/* Top Bar - Elegant Gradient */}
      <div className="bg-authority-gradient text-pure-white py-3 px-4 text-sm shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-platinum transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+254 (755) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-platinum transition-colors">
              <Mail className="h-4 w-4" />
              <span className="font-medium">miller@milleradvocatecom</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Shield className="h-4 w-4 text-platinum" />
            <span className="font-semibold">Free Confidential Consultation</span>
          </div>
        </div>
      </div>

      {/* Main Header - Glass Effect */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-effect shadow-elegant backdrop-blur-xl" : "bg-pure-white shadow-lg"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Enhanced */}
          

            {/* Desktop Navigation - Enhanced */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-deep-navy hover:text-crimson-red font-semibold transition-all duration-300 hover:bg-platinum rounded-lg">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-deep-navy hover:text-crimson-red font-semibold transition-all duration-300 hover:bg-platinum rounded-lg">
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-deep-navy hover:text-crimson-red font-semibold">
                    Practice Areas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 gap-3 p-6 bg-pure-white shadow-elegant rounded-xl">
                      {practiceAreas.map((area) => (
                        <Link
                          key={area.name}
                          href={area.href}
                          className="block p-4 rounded-lg hover:bg-platinum transition-all duration-300 hover:shadow-lg group"
                        >
                          <h3 className="font-semibold text-deep-navy group-hover:text-crimson-red transition-colors">
                            {area.name}
                          </h3>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/team" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-deep-navy hover:text-crimson-red font-semibold transition-all duration-300 hover:bg-platinum rounded-lg">
                      Our Team
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/case-studies" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-deep-navy hover:text-crimson-red font-semibold transition-all duration-300 hover:bg-platinum rounded-lg">
                      Case Studies
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-deep-navy hover:text-crimson-red font-semibold transition-all duration-300 hover:bg-platinum rounded-lg">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons - Show different content based on login status */}
            <div className="hidden lg:flex items-center space-x-3">
              {user ? (
                // Logged in user menu
                <>
                  <div className="flex items-center space-x-3 px-4 py-2 bg-platinum rounded-lg">
                    <div className="w-8 h-8 bg-authority-gradient rounded-full flex items-center justify-center">
                      <span className="text-pure-white text-sm font-bold">{user.name.charAt(0).toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-deep-navy">Welcome back</p>
                      <p className="text-xs text-steel-gray">{user.name}</p>
                    </div>
                  </div>
                  <Link href="/client-portal">
                    <Button
                      variant="outline"
                      className="border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-pure-white font-semibold transition-all duration-300 hover:shadow-royal bg-transparent"
                    >
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="border-2 border-crimson-red text-crimson-red hover:bg-crimson-red hover:text-pure-white font-semibold transition-all duration-300 bg-transparent"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                // Not logged in - show login/register buttons
                <>
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-pure-white font-semibold transition-all duration-300 hover:shadow-royal bg-transparent"
                    >
                      Client Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="bg-power-gradient text-pure-white font-semibold hover:shadow-crimson transition-all duration-300 hover:scale-105 animate-pulse-glow">
                      Create Account
                    </Button>
                  </Link>
                  <Button className="bg-authority-gradient text-pure-white font-semibold hover:shadow-royal transition-all duration-300 hover:scale-105">
                    Free Consultation
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-deep-navy hover:text-crimson-red transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-pure-white border-t shadow-elegant">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block py-3 text-deep-navy hover:text-crimson-red font-semibold transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-3 text-deep-navy hover:text-crimson-red font-semibold transition-colors"
              >
                About Us
              </Link>
              <div>
                <div className="py-3 text-deep-navy font-bold">Practice Areas</div>
                <div className="pl-4 space-y-2">
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.name}
                      href={area.href}
                      className="block py-2 text-steel-gray hover:text-crimson-red transition-colors"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/team"
                className="block py-3 text-deep-navy hover:text-crimson-red font-semibold transition-colors"
              >
                Our Team
              </Link>
              <Link
                href="/case-studies"
                className="block py-3 text-deep-navy hover:text-crimson-red font-semibold transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/contact-cta.tsx"
                className="block py-3 text-deep-navy hover:text-crimson-red font-semibold transition-colors"
              >
                Contact
              </Link>

              <div className="pt-4 space-y-3">
                {user ? (
                  // Mobile logged in menu
                  <>
                    <div className="flex items-center space-x-3 p-3 bg-platinum rounded-lg">
                      <div className="w-10 h-10 bg-authority-gradient rounded-full flex items-center justify-center">
                        <span className="text-pure-white font-bold">{user.name.charAt(0).toUpperCase()}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-deep-navy">{user.name}</p>
                        <p className="text-sm text-steel-gray">{user.email}</p>
                      </div>
                    </div>
                    <Link href="/client-portal" className="block">
                      <Button className="w-full bg-authority-gradient text-pure-white font-semibold">
                        Go to Dashboard
                      </Button>
                    </Link>
                    <Button
                      onClick={handleLogout}
                      className="w-full bg-crimson-red hover:bg-crimson-red/90 text-pure-white font-semibold"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  // Mobile not logged in menu
                  <>
                    <Link href="/login" className="block">
                      <Button
                        variant="outline"
                        className="w-full border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-pure-white font-semibold bg-transparent"
                      >
                        Client Login
                      </Button>
                    </Link>
                    <Link href="/register" className="block">
                      <Button className="w-full bg-power-gradient text-pure-white font-semibold">Create Account</Button>
                    </Link>
                    <Button className="w-full bg-authority-gradient text-pure-white font-semibold">
                      Free Consultation
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
