import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DosDontsPage() {
  const categories = [
    {
      title: "Visual Identity",
      dos: [
        "Use the logo with proper clear space",
        "Apply brand colors consistently",
        "Use approved typography",
        "Scale the logo proportionally",
      ],
      donts: [
        "Distort or modify the logo",
        "Use unapproved color combinations",
        "Mix different font families",
        "Add effects like shadows to the logo",
      ],
    },
    {
      title: "Tone of Voice",
      dos: [
        "Write in a conversational, friendly tone",
        "Use active voice and direct language",
        "Be inclusive and welcoming",
        "Keep messaging concise and clear",
      ],
      donts: [
        "Use overly formal or technical language",
        "Write long, complicated sentences",
        "Use jargon or complex terminology",
        "Sound impersonal or corporate",
      ],
    },
    {
      title: "Photography",
      dos: [
        "Use authentic, diverse imagery",
        "Show real student life and experiences",
        "Ensure photos are high quality",
        "Feature our actual facilities",
      ],
      donts: [
        "Use obvious stock photography",
        "Show unrealistic or staged scenarios",
        "Use low-resolution or poor quality images",
        "Feature outdated facilities or branding",
      ],
    },
    {
      title: "Social Media",
      dos: [
        "Maintain a consistent posting schedule",
        "Engage with comments and messages",
        "Share authentic student stories",
        "Use our brand voice and personality",
      ],
      donts: [
        "Post without a clear purpose",
        "Ignore comments or feedback",
        "Share content that doesn't align with our values",
        "Use inconsistent visual styles",
      ],
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
          <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
            <Check className="h-6 w-6 text-teal-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Do's and Don'ts</h1>
            <p className="text-muted-foreground">Guidelines for proper brand application</p>
          </div>
        </div>

        <div className="space-y-6">
          {categories.map((category, index) => (
            <Card key={index} className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>Guidelines for {category.title.toLowerCase()}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-green-200 dark:border-green-900 p-4">
                    <h3 className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium mb-3">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Do's
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {category.dos.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg
                            className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg border border-red-200 dark:border-red-900 p-4">
                    <h3 className="flex items-center gap-2 text-red-600 dark:text-red-400 font-medium mb-3">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Don'ts
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {category.donts.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg
                            className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-950/20 dark:to-green-950/20 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Remember</h3>
              <p className="text-muted-foreground">
                Consistent application of these guidelines helps build a strong, recognizable brand that resonates with
                our audience. When in doubt, refer back to our brand values and personality.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

