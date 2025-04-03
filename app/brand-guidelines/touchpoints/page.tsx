import Link from "next/link"
import { ArrowLeft, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TouchpointsPage() {
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
          <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
            <Users className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Brand Touchpoints & Experience Design</h1>
            <p className="text-muted-foreground">How our brand comes to life across channels</p>
          </div>
        </div>

        <Tabs defaultValue="digital" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="digital">Digital</TabsTrigger>
            <TabsTrigger value="physical">Physical</TabsTrigger>
            <TabsTrigger value="experiential">Experiential</TabsTrigger>
          </TabsList>

          <TabsContent value="digital" className="space-y-6">
            <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Website & Digital Platforms</CardTitle>
                <CardDescription>Guidelines for our online presence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Website</h4>
                  <p className="text-sm text-muted-foreground">
                    Our website should reflect our brand personality with clean, modern design, intuitive navigation,
                    and content that speaks directly to students and parents. Use plenty of authentic photography
                    showing real student life at CampusKey.
                  </p>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Social Media</h4>
                  <p className="text-sm text-muted-foreground">
                    Social content should be vibrant, authentic, and community-focused. Showcase student stories,
                    events, and daily life. Use a consistent visual style with our brand colors and typography.
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-md bg-white/50 dark:bg-black/20 p-3">
                      <h5 className="text-sm font-medium mb-1">Content Pillars</h5>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                        <li>Student Success Stories</li>
                        <li>Community Events</li>
                        <li>Facility Highlights</li>
                        <li>Student Life Tips</li>
                        <li>Behind-the-Scenes</li>
                      </ul>
                    </div>
                    <div className="rounded-md bg-white/50 dark:bg-black/20 p-3">
                      <h5 className="text-sm font-medium mb-1">Tone</h5>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                        <li>Friendly and conversational</li>
                        <li>Energetic and positive</li>
                        <li>Authentic and relatable</li>
                        <li>Helpful and informative</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Email Communications</h4>
                  <p className="text-sm text-muted-foreground">
                    Emails should be concise, visually consistent with our brand, and personalized where possible. Use a
                    clear hierarchy of information with prominent calls-to-action.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="physical" className="space-y-6">
            <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Physical Environments</CardTitle>
                <CardDescription>How our brand manifests in physical spaces</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Building Exteriors</h4>
                  <p className="text-sm text-muted-foreground">
                    Building exteriors should be modern, welcoming, and clearly branded with the CampusKey logo. Use
                    architectural elements and landscaping that create a sense of community and belonging.
                  </p>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Common Areas</h4>
                  <p className="text-sm text-muted-foreground">
                    Common areas should be designed to foster community and collaboration. Use comfortable, durable
                    furniture in our brand colors, with plenty of natural light and plants. Incorporate subtle brand
                    elements like our colors and typography in signage and decor.
                  </p>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Signage & Wayfinding</h4>
                  <p className="text-sm text-muted-foreground">
                    All signage should use our brand typography and colors for consistency. Wayfinding should be
                    intuitive, clear, and reflect our friendly, helpful brand personality. Use icons and visuals to
                    complement text.
                  </p>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Print Materials</h4>
                  <p className="text-sm text-muted-foreground">
                    Brochures, flyers, and other print materials should maintain consistent branding with high-quality
                    photography, clean layouts, and concise messaging. Use our brand colors, typography, and visual
                    style.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experiential" className="space-y-6">
            <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Events & Experiences</CardTitle>
                <CardDescription>Creating memorable brand experiences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Student Events</h4>
                  <p className="text-sm text-muted-foreground">
                    Events should embody our community-focused values and energetic personality. Create experiences that
                    foster connections between students while subtly reinforcing our brand through decor, activities,
                    and communications.
                  </p>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Move-In Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    The move-in experience should be welcoming, organized, and exciting. Use branded welcome materials,
                    clear signage, and friendly staff to create a positive first impression that sets the tone for the
                    CampusKey experience.
                  </p>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Customer Service</h4>
                  <p className="text-sm text-muted-foreground">
                    All customer interactions should reflect our brand values and personality. Staff should be friendly,
                    helpful, and solution-oriented. Response times should be quick, and communication should be clear
                    and personable.
                  </p>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Community Programs</h4>
                  <p className="text-sm text-muted-foreground">
                    Programs and activities should support both academic success and personal development. Create a
                    balanced calendar of events that builds community while providing value to students' university
                    experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

