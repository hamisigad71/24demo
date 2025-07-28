"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Shield } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ email: string; name: string } | null>(
    null
  );

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userEmail = localStorage.getItem("userEmail");
    const userName = localStorage.getItem("userName");

    if (isLoggedIn) {
      setUser({
        email: userEmail || "",
        name: userName || userEmail || "User",
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    setUser(null);
    window.location.href = "/";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const practiceAreas = [
    { name: "Criminal Law", href: "/practice-areas/criminal-law" },
    { name: "Family Law", href: "/practice-areas/family-law" },
    { name: "Corporate Law", href: "/practice-areas/corporate-law" },
    { name: "Real Estate Law", href: "/practice-areas/real-estate-law" },
    { name: "Immigration", href: "/practice-areas/immigration" },
    { name: "Employment & Labor Law", href: "/practice-areas/employment-law" },
  ];

  return (
    <>
      {/* Top Contact Bar - Elegant Dark Blue */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+254 (755) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Mail className="h-4 w-4" />
              <span>miller@milleradvocate.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-blue-200">
            <Shield className="h-4 w-4" />
            <span>Free Confidential Consultation</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Professional with Logo */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Creative Styling */}
            <Link href="/" className="flex items-center group">
              <div className="relative h-16 w-48">
                <Image
                  src="https://www.milleradvocates.com/sites/default/files/miller_logo-01.png"
                  alt="Miller Advocates Logo"
                  fill
                  className="object-contain object-left transition-all group-hover:scale-105"
                  priority
                />
              </div>
              <span className="sr-only">Miller Advocates</span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-gray-800 hover:text-blue-700 font-medium rounded-lg transition-colors hover:bg-blue-50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-gray-800 hover:text-blue-700 font-medium rounded-lg transition-colors hover:bg-blue-50">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-blue-700 font-medium data-[state=open]:text-blue-700 bg-transparent hover:bg-blue-50">
                    Practice Areas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] grid-cols-2 gap-3 p-4 bg-white shadow-xl rounded-lg border border-gray-200">
                      {practiceAreas.map((area) => (
                        <Link
                          key={area.name}
                          href={area.href}
                          className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group"
                        >
                          <h3 className="font-medium text-gray-800 group-hover:text-blue-700">
                            {area.name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600">
                            Expert legal representation
                          </p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/team" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-gray-800 hover:text-blue-700 font-medium rounded-lg transition-colors hover:bg-blue-50">
                      Our Team
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/case-studies" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-gray-800 hover:text-blue-700 font-medium rounded-lg transition-colors hover:bg-blue-50">
                      Case Studies
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-gray-800 hover:text-blue-700 font-medium rounded-lg transition-colors hover:bg-blue-50">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {user.name}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="border-blue-700 text-blue-700 hover:bg-blue-50"
                    >
                      Client Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-800 hover:text-blue-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-inner">
            <div className="container mx-auto px-4 py-3 space-y-3">
              <Link
                href="/"
                className="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="py-3 px-4">
                <div className="font-medium text-gray-800 mb-2">
                  Practice Areas
                </div>
                <div className="pl-4 space-y-2">
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.name}
                      href={area.href}
                      className="block py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors pl-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/team"
                className="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link
                href="/case-studies"
                className="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                className="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 space-y-3 border-t mt-2">
                {user ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-medium">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/login" className="block">
                      <Button
                        variant="outline"
                        className="w-full border-blue-700 text-blue-700 hover:bg-blue-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/register" className="block">
                      <Button
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Register
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
