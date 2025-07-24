import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LawFirm - Professional Legal Services | Justice. Integrity. Results.",
  description:
    "Experienced legal representation across multiple practice areas. 25+ years of excellence in Criminal Law, Family Law, Corporate Law, Real Estate, Immigration & Employment Law.",
  keywords:
    "law firm, legal services, attorney, lawyer, criminal law, family law, corporate law, real estate law, immigration, employment law",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  )
}
