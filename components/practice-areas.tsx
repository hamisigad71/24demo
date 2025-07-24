"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, Heart, Building, Home, Plane, Briefcase, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"

export function PracticeAreas() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const practiceAreas = [
    {
      icon: Scale,
      title: "Criminal Law",
      description:
        "Comprehensive defense for criminal charges, from misdemeanors to serious felonies. Our experienced criminal defense attorneys fight to protect your rights.",
      features: ["DUI/DWI Defense", "Drug Crimes", "White Collar Crimes", "Violent Crimes"],
      detailedServices: [
        { name: "DUI/DWI Defense", description: "Expert defense against drunk driving charges" },
        { name: "Drug Crimes", description: "Defending against possession and trafficking charges" },
        { name: "White Collar Crimes", description: "Corporate fraud and financial crime defense" },
        { name: "Violent Crimes", description: "Assault, battery, and violent offense representation" },
        { name: "Theft & Burglary", description: "Property crime defense strategies" },
        { name: "Domestic Violence", description: "Sensitive handling of domestic dispute cases" },
      ],
      href: "/practice-areas/criminal-law",
      color: "crimson",
    },
    {
      icon: Heart,
      title: "Family Law",
      description:
        "Compassionate legal support for family matters including divorce, custody, and adoption. We understand the emotional complexity of family legal issues.",
      features: ["Divorce & Separation", "Child Custody", "Adoption", "Domestic Violence"],
      detailedServices: [
        { name: "Divorce & Separation", description: "Guiding you through the divorce process" },
        { name: "Child Custody", description: "Protecting your parental rights and children's interests" },
        { name: "Adoption", description: "Making your family dreams come true legally" },
        { name: "Domestic Violence", description: "Protection orders and safety planning" },
        { name: "Alimony & Support", description: "Fair spousal and child support arrangements" },
        { name: "Property Division", description: "Equitable distribution of marital assets" },
      ],
      href: "/practice-areas/family-law",
      color: "royal-blue",
    },
    {
      icon: Building,
      title: "Corporate Law",
      description:
        "Strategic legal counsel for businesses of all sizes. From startups to Fortune 500 companies, we provide comprehensive corporate legal services.",
      features: ["Business Formation", "Mergers & Acquisitions", "Contract Law", "Compliance"],
      detailedServices: [
        { name: "Business Formation", description: "LLC, Corporation, and Partnership setup" },
        { name: "Mergers & Acquisitions", description: "Complex M&A transaction guidance" },
        { name: "Contract Law", description: "Drafting and reviewing business agreements" },
        { name: "Compliance", description: "Regulatory compliance and risk management" },
        { name: "Employment Law", description: "Workplace policies and employment issues" },
        { name: "Intellectual Property", description: "Protecting your business innovations" },
      ],
      href: "/practice-areas/corporate-law",
      color: "deep-navy",
    },
    {
      icon: Home,
      title: "Real Estate Law",
      description:
        "Expert guidance through complex real estate transactions and disputes. Protecting your property interests with thorough legal representation.",
      features: ["Property Transactions", "Title Issues", "Zoning & Land Use", "Real Estate Litigation"],
      detailedServices: [
        { name: "Property Transactions", description: "Residential and commercial property sales" },
        { name: "Title Issues", description: "Resolving title defects and disputes" },
        { name: "Zoning & Land Use", description: "Municipal law and development approvals" },
        { name: "Real Estate Litigation", description: "Property dispute resolution" },
        { name: "Landlord-Tenant", description: "Rental agreements and eviction proceedings" },
        { name: "Construction Law", description: "Building contracts and construction disputes" },
      ],
      href: "/practice-areas/real-estate-law",
      color: "crimson",
    },
    {
      icon: Plane,
      title: "Immigration",
      description:
        "Comprehensive immigration services to help individuals and families navigate the complex U.S. immigration system successfully.",
      features: ["Visa Applications", "Green Card Process", "Citizenship", "Deportation Defense"],
      detailedServices: [
        { name: "Visa Applications", description: "Work, family, and student visa assistance" },
        { name: "Green Card Process", description: "Permanent residency applications" },
        { name: "Citizenship", description: "Naturalization and citizenship ceremonies" },
        { name: "Deportation Defense", description: "Removal proceedings representation" },
        { name: "Asylum Cases", description: "Protection for those fleeing persecution" },
        { name: "Family Reunification", description: "Bringing families together legally" },
      ],
      href: "/practice-areas/immigration",
      color: "royal-blue",
    },
    {
      icon: Briefcase,
      title: "Employment & Labor Law",
      description:
        "Protecting workers' rights and helping employers maintain compliant workplaces. Expert representation in employment disputes.",
      features: ["Wrongful Termination", "Discrimination Claims", "Wage & Hour Disputes", "Employment Contracts"],
      detailedServices: [
        { name: "Wrongful Termination", description: "Protecting against unlawful job loss" },
        { name: "Discrimination Claims", description: "Fighting workplace discrimination" },
        { name: "Wage & Hour Disputes", description: "Ensuring fair compensation" },
        { name: "Employment Contracts", description: "Negotiating fair employment terms" },
        { name: "Workplace Harassment", description: "Creating safe work environments" },
        { name: "Workers' Compensation", description: "Injury claims and benefits" },
      ],
      href: "/practice-areas/employment-law",
      color: "deep-navy",
    },
  ]

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case "crimson":
        return {
          icon: "text-crimson-red group-hover:text-white",
          iconBg: "bg-crimson-red/10 group-hover:bg-crimson-red",
          title: "group-hover:text-crimson-red",
          button: "text-crimson-red hover:text-white hover:bg-crimson-red",
          dropdown: "border-l-4 border-crimson-red bg-crimson-red/5",
        }
      case "royal-blue":
        return {
          icon: "text-royal-blue group-hover:text-white",
          iconBg: "bg-royal-blue/10 group-hover:bg-royal-blue",
          title: "group-hover:text-royal-blue",
          button: "text-royal-blue hover:text-white hover:bg-royal-blue",
          dropdown: "border-l-4 border-royal-blue bg-royal-blue/5",
        }
      case "deep-navy":
        return {
          icon: "text-deep-navy group-hover:text-white",
          iconBg: "bg-deep-navy/10 group-hover:bg-deep-navy",
          title: "group-hover:text-deep-navy",
          button: "text-deep-navy hover:text-white hover:bg-deep-navy",
          dropdown: "border-l-4 border-deep-navy bg-deep-navy/5",
        }
      default:
        return {
          icon: "text-crimson-red group-hover:text-white",
          iconBg: "bg-crimson-red/10 group-hover:bg-crimson-red",
          title: "group-hover:text-crimson-red",
          button: "text-crimson-red hover:text-white hover:bg-crimson-red",
          dropdown: "border-l-4 border-crimson-red bg-crimson-red/5",
        }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-crimson-red mb-4">
            <div className="w-12 h-1 bg-crimson-red"></div>
            <span className="text-sm font-semibold tracking-wider uppercase">Our Expertise</span>
            <div className="w-12 h-1 bg-crimson-red"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy mb-6">Comprehensive Legal Services</h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced attorneys provide expert legal representation across multiple practice areas, ensuring
            comprehensive solutions for all your legal needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const colors = getColorClasses(area.color)
            const isExpanded = expandedCard === index

            return (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg ${
                  isExpanded ? "hover:-translate-y-2 shadow-2xl" : "hover:-translate-y-2"
                }`}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 ${colors.iconBg} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                    >
                      <area.icon className={`h-8 w-8 ${colors.icon}`} />
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold text-deep-navy mb-4 ${colors.title} transition-colors`}>
                    {area.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>

                  <ul className="space-y-2 mb-6">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div
                          className={`w-2 h-2 ${area.color === "crimson" ? "bg-crimson-red" : area.color === "royal-blue" ? "bg-royal-blue" : "bg-deep-navy"} rounded-full mr-3`}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Expandable Dropdown */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-96 mb-6" : "max-h-0"}`}
                  >
                    <div className={`${colors.dropdown} rounded-lg p-4 mt-4`}>
                      <h4 className="font-semibold text-deep-navy mb-3">Detailed Services:</h4>
                      <div className="space-y-3">
                        {area.detailedServices.map((service, serviceIndex) => (
                          <div
                            key={serviceIndex}
                            className="group/service hover:bg-white/50 p-2 rounded transition-colors"
                          >
                            <div className="font-medium text-deep-navy text-sm">{service.name}</div>
                            <div className="text-xs text-gray-600 mt-1">{service.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      className={`${colors.button} p-0 h-auto font-semibold group/btn transition-all duration-300`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCard(index)}
                      className={`${colors.button} p-2 rounded-full transition-all duration-300`}
                    >
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-deep-navy hover:bg-deep-navy/90 text-white px-8 py-4">
            View All Practice Areas
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
