"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, X } from "lucide-react"

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Buttons */}
      <div
        className={`flex flex-col space-y-3 mb-4 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <Button
          size="icon"
          className="bg-crimson hover:bg-crimson/90 text-white shadow-lg w-12 h-12 rounded-full"
          onClick={() => window.open("tel:+15551234567")}
        >
          <Phone className="h-5 w-5" />
        </Button>

        <Button
          size="icon"
          className="bg-green-500 hover:bg-green-600 text-white shadow-lg w-12 h-12 rounded-full"
          onClick={() => window.open("https://wa.me/15551234567")}
        >
          <MessageCircle className="h-5 w-5" />
        </Button>

        <Button
          size="icon"
          className="bg-navy hover:bg-navy/90 text-white shadow-lg w-12 h-12 rounded-full"
          onClick={() => window.open("mailto:info@lawfirm.com")}
        >
          <Mail className="h-5 w-5" />
        </Button>
      </div>

      {/* Main Toggle Button */}
      <Button
        size="icon"
        className="bg-crimson hover:bg-crimson/90 text-white shadow-lg w-14 h-14 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
      </Button>
    </div>
  )
}
