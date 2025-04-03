import Link from "next/link"
import { ArrowLeft, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ValuesPage() {
  const values = [
    {
      title: "Community",
      description: "We create spaces where everyone belongs and connections thrive.",
      examples: [
        "We design spaces that encourage interaction and shared experiences",
        "We celebrate diversity and create inclusive environments",
        "We foster a sense of belonging through events and programs",
      ],
    },
    {
      title: "Excellence",
      description: "We pursue the highest standards in everything we do.",
      examples: [
        "We continuously improve our facilities and services",
        "We invest in staff development and training",
        "We measure our performance and act on feedback",
      ],
    },
    {
      title: "Innovation",
      description: "We embrace new ideas and approaches to create better experiences.",
      examples: [
        "We stay ahead of trends in student living",
        "We use technology to enhance the student experience",
        "We encourage creative problem-solving",
      ],
    },
    {
      title: "Integrity",
      description: "We act with honesty, transparency, and ethical responsibility.",
      examples: [
        "We communicate openly and honestly",
        "We honor our commitments",
        "We make decisions based on what's right, not what's easy",
      ],
    },
  ]

  const agreements = [
    "Be bold, brave and brilliant in everything we do",
    "Lead with kindness and act with purpose",
    "Embrace challenges as opportunities for growth",
    "Celebrate successes, learn from failures",
    "Respect each other's differences and perspectives",
    "Take ownership of our actions and their impact",
    "Communicate openly, honestly, and constructively",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/brand-guidelines-grid">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Guidelines
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
            <Heart className="h-6 w-6 text-purple-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Brand Values & Agreements</h1>
            <p className="text-muted-foreground">The principles that guide our actions</p>
          </div>
        </div>

        <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Our Core Values</CardTitle>
            <CardDescription>The fundamental beliefs that drive our organization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{value.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">In practice:</h4>
                    <ul className="text-sm space-y-1">
                      {value.examples.map((example, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-0.5 mt-0.5">
                            <svg
                              className="h-3 w-3 text-purple-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Brand Agreements</CardTitle>
            <CardDescription>How we commit to working together</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our brand agreements are the promises we make to each other about how we'll work together and represent
              CampusKey. These agreements guide our behavior and decision-making.
            </p>
            <div className="space-y-3">
              {agreements.map((agreement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-800/30 flex items-center justify-center text-purple-600 text-sm font-medium">
                    {index + 1}
                  </span>
                  <p className="font-medium">{agreement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 backdrop-blur-sm">
          <CardContent className="p-6">
            <blockquote className="text-xl md:text-2xl font-medium italic text-center">
              "We don't just build student accommodation; we create communities where students can thrive."
            </blockquote>
            <p className="text-center text-sm text-muted-foreground mt-4">— CampusKey Founding Principle</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

