import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PurposePage() {
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
          <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-pink-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Purpose, Vision & Mission</h1>
            <p className="text-muted-foreground">Our reason for being and where we're headed</p>
          </div>
        </div>

        <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Our Purpose</CardTitle>
            <CardDescription>Why we exist</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              CampusKey exists to create transformative living spaces that empower students to thrive academically,
              socially, and personally. We believe that the right environment is fundamental to success and growth.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic">
              "To create spaces where students can live their best lives and reach their full potential."
            </blockquote>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
            <CardDescription>Where we're headed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              To be recognized globally as the leader in innovative student living, setting new standards for
              community-focused accommodation that nurtures academic excellence and personal development.
            </p>
            <p>By 2030, we aim to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Expand our presence to 25 major university cities worldwide</li>
              <li>Pioneer sustainable living practices in student accommodation</li>
              <li>Create a global community of CampusKey alumni who are making positive impacts in their fields</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>How we'll get there</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>We accomplish our vision by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Designing thoughtful living spaces that balance privacy with community</li>
              <li>Creating programs that foster academic success and personal growth</li>
              <li>Building vibrant communities where students feel they belong</li>
              <li>Embracing innovation in our facilities, services, and experiences</li>
              <li>Maintaining the highest standards of safety, comfort, and sustainability</li>
            </ul>
            <div className="rounded-lg bg-pink-50 dark:bg-pink-900/20 p-4 mt-4">
              <h3 className="font-medium mb-2">Our Promise</h3>
              <p className="text-sm">
                At CampusKey, we promise to create more than just a place to stay—we create a home where students can
                belong, grow, and succeed. Every decision we make is guided by this commitment.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

