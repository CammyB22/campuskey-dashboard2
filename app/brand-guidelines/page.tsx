import { CardFooter } from "@/components/ui/card"
import { Download, FileText, Image, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function BrandGuidelines() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6 md:p-8 lg:p-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">CampusKey Brand Guidelines</h1>
        <p className="text-lg text-muted-foreground">
          Everything you need to represent the brand with clarity, energy, and consistency.
        </p>
      </section>

      <Tabs defaultValue="visual-identity" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="visual-identity">Visual Identity</TabsTrigger>
          <TabsTrigger value="voice-tone">Voice & Tone</TabsTrigger>
          <TabsTrigger value="message-architecture">Message Architecture</TabsTrigger>
        </TabsList>

        <TabsContent value="visual-identity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Logo Usage</CardTitle>
              <CardDescription>Guidelines for using the CampusKey logo correctly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Layers className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-center text-sm text-muted-foreground">Primary Logo</p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Layers className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-center text-sm text-muted-foreground">Icon Only</p>
                </div>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="mb-2 font-medium">Clear Space</h4>
                <p className="text-sm text-muted-foreground">
                  Always maintain a minimum clear space around the logo equal to the height of the "C" in the logo.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Brand Colors</CardTitle>
              <CardDescription>Official color palette with hex codes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div className="space-y-2">
                  <div className="h-24 rounded-md bg-[#FF6B6B]"></div>
                  <div className="space-y-1">
                    <p className="font-medium">Primary Red</p>
                    <p className="text-xs text-muted-foreground">#FF6B6B</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-md bg-[#4ECDC4]"></div>
                  <div className="space-y-1">
                    <p className="font-medium">Teal</p>
                    <p className="text-xs text-muted-foreground">#4ECDC4</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-md bg-[#FFD166]"></div>
                  <div className="space-y-1">
                    <p className="font-medium">Yellow</p>
                    <p className="text-xs text-muted-foreground">#FFD166</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-md bg-[#292F36]"></div>
                  <div className="space-y-1">
                    <p className="font-medium">Dark</p>
                    <p className="text-xs text-muted-foreground">#292F36</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
              <CardDescription>Font families and usage guidelines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Montserrat</h3>
                <p className="text-sm text-muted-foreground">Primary font for headings and display text</p>
                <div className="space-y-2">
                  <div className="rounded-md bg-muted p-4">
                    <p className="text-3xl font-bold">Aa Bb Cc Dd Ee</p>
                    <p className="text-sm text-muted-foreground mt-2">Bold (700) - Used for headings</p>
                  </div>
                  <div className="rounded-md bg-muted p-4">
                    <p className="text-3xl font-semibold">Aa Bb Cc Dd Ee</p>
                    <p className="text-sm text-muted-foreground mt-2">Semibold (600) - Used for subheadings</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Inter</h3>
                <p className="text-sm text-muted-foreground">Secondary font for body text and UI elements</p>
                <div className="space-y-2">
                  <div className="rounded-md bg-muted p-4">
                    <p className="text-lg">Aa Bb Cc Dd Ee</p>
                    <p className="text-sm text-muted-foreground mt-2">Regular (400) - Used for body text</p>
                  </div>
                  <div className="rounded-md bg-muted p-4">
                    <p className="text-lg font-medium">Aa Bb Cc Dd Ee</p>
                    <p className="text-sm text-muted-foreground mt-2">Medium (500) - Used for emphasis</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="voice-tone" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Brand Personality</CardTitle>
              <CardDescription>The character and attributes of our brand voice</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-950/20">
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
                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950/20">
                  <h3 className="mb-2 font-semibold">Inclusive</h3>
                  <p className="text-sm text-muted-foreground">
                    We use language that welcomes everyone, creating a sense of belonging and community.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
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
        </TabsContent>

        <TabsContent value="message-architecture" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Slogans</CardTitle>
              <CardDescription>Official taglines and slogans for consistent messaging</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg bg-gradient-to-r from-orange-50 to-pink-50 p-6 text-center dark:from-orange-950/20 dark:to-pink-900/20">
                  <p className="text-xl font-medium italic md:text-2xl">"Be bold, brave and brilliant"</p>
                  <p className="mt-2 text-sm text-muted-foreground">Primary Slogan</p>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-6 text-center dark:from-blue-950/20 dark:to-purple-900/20">
                  <p className="text-xl font-medium italic md:text-2xl">"This is where it all begins"</p>
                  <p className="mt-2 text-sm text-muted-foreground">Secondary Slogan</p>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-green-50 to-teal-50 p-6 text-center dark:from-green-950/20 dark:to-teal-900/20">
                  <p className="text-xl font-medium italic md:text-2xl">"Creating spaces, building futures"</p>
                  <p className="mt-2 text-sm text-muted-foreground">Tertiary Slogan</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Value Statements</CardTitle>
              <CardDescription>Core values that guide our messaging</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    We foster connections and create spaces where people feel they belong.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    We embrace new ideas and approaches to create better experiences.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    We strive for the highest standards in everything we do.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">Integrity</h3>
                  <p className="text-sm text-muted-foreground">
                    We act with honesty and transparency in all our interactions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Do's and Don'ts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-green-200 dark:border-green-900">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Do's
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-green-600 dark:text-green-400"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Use the full logo with clear space around it</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-green-600 dark:text-green-400"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Maintain consistent brand colors across all materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-green-600 dark:text-green-400"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Use approved fonts for all communications</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-green-600 dark:text-green-400"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Write in a conversational, friendly tone</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-green-600 dark:text-green-400"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Use official slogans and taglines consistently</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-900">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
                Don'ts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600 dark:text-red-400"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  <span>Distort or modify the logo in any way</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600 dark:text-red-400"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  <span>Use unapproved color combinations</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600 dark:text-red-400"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  <span>Use different fonts than the approved typefaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600 dark:text-red-400"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  <span>Use overly formal or technical language</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600 dark:text-red-400"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  <span>Create unofficial slogans or taglines</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Downloads</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Image className="h-5 w-5 text-primary" />
                Logo Pack
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground">All logo variations in various formats (PNG, SVG, PDF)</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2">
                <Download className="h-4 w-4" /> Download
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="h-5 w-5 text-primary" />
                Font Files
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground">Montserrat and Inter font files for all weights</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2">
                <Download className="h-4 w-4" /> Download
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Layers className="h-5 w-5 text-primary" />
                Brand Colors
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground">Color palette swatches for design software</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2">
                <Download className="h-4 w-4" /> Download
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="h-5 w-5 text-primary" />
                Email Signature
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground">HTML email signature template with instructions</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2">
                <Download className="h-4 w-4" /> Download
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}

