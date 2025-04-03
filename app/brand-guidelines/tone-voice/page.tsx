import Link from "next/link"
import { ArrowLeft, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ToneVoicePage() {
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
          <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <MessageSquare className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Tone of Voice & Personality</h1>
            <p className="text-muted-foreground">How we sound and express ourselves</p>
          </div>
        </div>

        <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Brand Personality</CardTitle>
            <CardDescription>The character and attributes of our brand voice</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950/20">
                <h3 className="mb-2 font-semibold">Energetic</h3>
                <p className="text-sm text-muted-foreground">
                  We bring enthusiasm and vibrancy to our communication, inspiring action and excitement.
                </p>
              </div>
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/20">
                <h3 className="mb-2 font-semibold">Authentic</h3>
                <p className="text-sm text-muted-foreground">
                  We speak with honesty and transparency, building trust through genuine communication.
                </p>
              </div>
              <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950/20">
                <h3 className="mb-2 font-semibold">Inclusive</h3>
                <p className="text-sm text-muted-foreground">
                  We use language that welcomes everyone, creating a sense of belonging and community.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Tone Styles</CardTitle>
            <CardDescription>How we adjust our voice for different contexts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">Conversational</h3>
                  <Badge variant="outline">Primary</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Friendly and approachable, like talking to a helpful friend. Used for most communications.
                </p>
                <div className="mt-2 rounded-md bg-muted p-3 text-sm">
                  <p className="italic">"Hey there! We're excited to welcome you to the CampusKey community."</p>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">Professional</h3>
                  <Badge variant="outline">Secondary</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Clear and straightforward, with a focus on accuracy. Used for formal communications.
                </p>
                <div className="mt-2 rounded-md bg-muted p-3 text-sm">
                  <p className="italic">
                    "CampusKey is committed to providing exceptional service and maintaining the highest standards."
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">Inspirational</h3>
                  <Badge variant="outline">Tertiary</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Motivating and uplifting, encouraging action. Used for campaigns and promotional content.
                </p>
                <div className="mt-2 rounded-md bg-muted p-3 text-sm">
                  <p className="italic">"Transform your future with CampusKey. This is where it all begins."</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Writing Guidelines</CardTitle>
            <CardDescription>Practical tips for writing in the CampusKey voice</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-green-200 dark:border-green-900 p-4">
                  <h3 className="text-green-600 dark:text-green-400 font-medium mb-2">Do</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Use active voice and direct language</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Write in short, clear sentences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Use inclusive language that welcomes everyone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Be conversational and approachable</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-red-200 dark:border-red-900 p-4">
                  <h3 className="text-red-600 dark:text-red-400 font-medium mb-2">Don't</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Use jargon or complex terminology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Write long, complicated sentences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Use language that excludes or alienates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Be overly formal or stiff</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4 mt-4">
                <h4 className="font-medium mb-2">Voice Examples</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Instead of:</p>
                    <p className="text-sm text-muted-foreground italic">
                      "Students are hereby notified that applications for accommodation must be submitted prior to the
                      specified deadline."
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Use:</p>
                    <p className="text-sm text-muted-foreground italic">
                      "Hey there! Don't forget to submit your application before the deadline to secure your spot at
                      CampusKey."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

