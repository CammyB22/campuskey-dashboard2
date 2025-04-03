import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MessageArchitecturePage() {
  const slogans = [
    {
      text: "Be bold, brave and brilliant",
      type: "Primary Slogan",
      usage: "Main brand tagline, used in primary marketing materials",
    },
    {
      text: "This is where it all begins",
      type: "Secondary Slogan",
      usage: "Used for new student recruitment and onboarding",
    },
    {
      text: "Creating spaces, building futures",
      type: "Tertiary Slogan",
      usage: "Used for corporate communications and partnerships",
    },
    {
      text: "Live your best life!",
      type: "Campaign Slogan",
      usage: "Used for student lifestyle campaigns",
    },
  ]

  const keyMessages = [
    {
      title: "Community-Focused",
      message: "CampusKey creates vibrant communities where students feel they belong and can thrive together.",
    },
    {
      title: "Quality Living",
      message: "Our accommodations offer premium facilities designed specifically for student success and comfort.",
    },
    {
      title: "Holistic Experience",
      message:
        "We provide more than just a room—we offer a complete lifestyle experience that supports academic and personal growth.",
    },
    {
      title: "Safety & Security",
      message:
        "Students and parents can have peace of mind with our comprehensive security measures and support systems.",
    },
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
          <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
            <FileText className="h-6 w-6 text-yellow-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Message Architecture</h1>
            <p className="text-muted-foreground">Key messages and communication hierarchy</p>
          </div>
        </div>

        <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Key Slogans</CardTitle>
            <CardDescription>Official taglines and slogans for consistent messaging</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {slogans.map((slogan, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 p-6 dark:from-yellow-950/20 dark:to-orange-900/20"
                >
                  <p className="text-xl font-medium italic md:text-2xl">"{slogan.text}"</p>
                  <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-medium">{slogan.type}</p>
                    <p className="text-sm text-muted-foreground">{slogan.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Key Messages</CardTitle>
            <CardDescription>Core messages that should be consistently communicated</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {keyMessages.map((item, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.message}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-medium">Message Hierarchy</h4>
              <p className="text-sm text-muted-foreground">
                When communicating about CampusKey, prioritize messages in this order:
              </p>
              <ol className="mt-2 space-y-1 text-sm text-muted-foreground list-decimal pl-5">
                <li>Community and belonging</li>
                <li>Quality of accommodations and facilities</li>
                <li>Holistic student experience</li>
                <li>Safety and security</li>
                <li>Convenience and location</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Elevator Pitch</CardTitle>
            <CardDescription>A concise description of who we are and what we offer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-950/20">
              <p className="text-lg">
                CampusKey creates premium student living environments where community, quality, and holistic experiences
                come together. We're more than just student accommodation—we're a lifestyle designed to help students
                thrive academically and personally in safe, vibrant communities.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-medium mb-1">30-Second Version</h4>
                <p className="text-sm text-muted-foreground">
                  CampusKey offers premium student accommodation designed to create vibrant communities where students
                  can thrive. Our facilities combine quality living spaces with thoughtful amenities and support
                  services that enhance both academic success and personal growth. With locations near major
                  universities, we provide safe, convenient, and inspiring environments where students can truly live
                  their best lives.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">10-Second Version</h4>
                <p className="text-sm text-muted-foreground">
                  CampusKey provides premium student accommodation that combines quality living spaces with vibrant
                  community experiences, helping students thrive academically and personally.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

