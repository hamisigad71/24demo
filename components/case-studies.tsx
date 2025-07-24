import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, DollarSign, Users } from "lucide-react";
import Image from "next/image";

export function CaseStudies() {
  const caseStudies = [
    {
      title: "Assisting a Justice Seeker in a Land Dispute",
      category: "Corporate Law",
      client: " Technology Company",
      result: "$2.5B Successful Merger",
      duration: "18 months",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLzKhYiatu9BiilRIdpuyFzOCFBbOF5WqKQ&s",
      description:
        "Mary attended a free legal clinic organized by local lawyers. During her consultation, she received comprehensive advice on Kenyan land laws and her rights as a landowner.",
      highlights: [
        "Regulatory approval in 6 countries",
        "Zero compliance issues",
        "Completed 2 months ahead of schedule",
      ],
    },
    {
      title: "Child Custody Case Favoring a Fathert",
      category: "Family",
      client: "County gov't Worker",
      result: "$8.5M Settlement",
      duration: "3 years",
      image:
        "https://images.pexels.com/photos/7979456/pexels-photo-7979456.jpeg",
      description:
        "Won a landmark custody case for a father who proved better capacity to provide care, challenging the traditional maternal preference in family courts.",
      highlights: [
        "Largest settlement in state history",
        "Established new safety precedent",
        "Full medical coverage secured",
      ],
    },
    {
      title: "Workplace Sexual Harassment Compensation",
      category: "Personal",
      client: "International Family",
      result: "Permanent Residency Granted",
      duration: "2 years",
      image: "https://images.pexels.com/photos/7640818/pexels-photo-7640818.jpeg",
      description:
        "Represented a female employee of a Nairobi-based company in a sexual harassment lawsuit. Successfully negotiated a KSh 2M out-of-court settlement.",
      highlights: [
        "Overcame previous visa denials",
        "Reunited family of 6",
        "Expedited processing achieved",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-crimson mb-4">
            <div className="w-12 h-1 bg-crimson"></div>
            <span className="text-sm font-semibold tracking-wider uppercase">
              Success Stories
            </span>
            <div className="w-12 h-1 bg-crimson"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Recent Case Studies
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our most significant legal victories and the
            strategies that led to successful outcomes for our clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-crimson text-white">
                    {study.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-crimson transition-colors">
                  {study.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-crimson" />
                    <span className="font-semibold mr-2">Client:</span>
                    {study.client}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2 text-crimson" />
                    <span className="font-semibold mr-2">Result:</span>
                    {study.result}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-crimson" />
                    <span className="font-semibold mr-2">Duration:</span>
                    {study.duration}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-3">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {study.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-crimson rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="ghost"
                  className="text-crimson hover:text-white hover:bg-crimson p-0 h-auto font-semibold group/btn"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-navy hover:bg-navy/90 text-white px-8 py-4"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
