import { Hero } from "@/components/hero"
import { AboutPreview } from "@/components/about-preview"
import { Stats } from "@/components/stats"
import { PracticeAreas } from "@/components/practice-areas"
import { Testimonials } from "@/components/testimonials"
import { CaseStudies } from "@/components/case-studies"
import { ContactCTA } from "@/components/contact-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutPreview />
      <Stats />
      <PracticeAreas />
      <Testimonials />
      <CaseStudies />
      <ContactCTA />
    </main>
  )
}
