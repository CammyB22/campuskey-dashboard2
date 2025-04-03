import Link from "next/link"
import { ArrowLeft, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VisualIdentityPage() {
  const colors = [
    { name: "Primary Red", hex: "#FF6B6B", rgb: "255, 107, 107", class: "bg-[#FF6B6B]" },
    { name: "Teal", hex: "#4ECDC4", rgb: "78, 205, 196", class: "bg-[#4ECDC4]" },
    { name: "Yellow", hex: "#FFD166", rgb: "255, 209, 102", class: "bg-[#FFD166]" },
    { name: "Dark", hex: "#292F36", rgb: "41, 47, 54", class: "bg-[#292F36] text-white" },
    { name: "Light Gray", hex: "#F7F7F7", rgb: "247, 247, 247", class: "bg-[#F7F7F7] border" },
    { name: "Medium Gray", hex: "#ADADAD", rgb: "173, 173, 173", class: "bg-[#ADADAD]" },
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
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <Palette className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Visual Identity</h1>
            <p className="text-muted-foreground">Logos, colors, typography, and imagery</p>
          </div>
        </div>

        <Tabs defaultValue="logo" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="logo">Logo</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
          </TabsList>

          <TabsContent value="logo" className="space-y-6">
            <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Logo Variations</CardTitle>
                <CardDescription>Our logo in different formats</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-6">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10">
                      <svg
                        className="h-12 w-12 text-blue-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 20H22V16H2V20ZM2 4V8H22V4H2ZM2 14H22V10H2V14Z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-center text-sm font-medium">Primary Logo</p>
                    <p className="text-center text-xs text-muted-foreground mt-1">Use for most applications</p>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-6">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10">
                      <svg
                        className="h-12 w-12 text-blue-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2L6.5 11H17.5L12 2Z" fill="currentColor" />
                        <path d="M17.5 22L12 13L6.5 22H17.5Z" fill="currentColor" />
                      </svg>
                    </div>
                    <p className="text-center text-sm font-medium">Icon Only</p>
                    <p className="text-center text-xs text-muted-foreground mt-1">For small spaces and icons</p>
                  </div>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Clear Space</h4>
                  <p className="text-sm text-muted-foreground">
                    Always maintain a minimum clear space around the logo equal to the height of the "C" in the logo.
                    This ensures the logo remains visible and impactful.
                  </p>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Minimum Size</h4>
                  <p className="text-sm text-muted-foreground">
                    To ensure legibility, the logo should never be smaller than:
                  </p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc pl-5">
                    <li>Print: 25mm wide</li>
                    <li>Digital: 100px wide</li>
                    <li>Icon only: 16px wide</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Logo Usage</CardTitle>
                <CardDescription>Guidelines for using our logo correctly</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Do</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="rounded-full bg-green-100 dark:bg-green-900/30 p-0.5 mt-0.5">
                          <svg className="h-3 w-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm">Use the logo with proper clear space</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="rounded-full bg-green-100 dark:bg-green-900/30 p-0.5 mt-0.5">
                          <svg className="h-3 w-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm">Use approved color variations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="rounded-full bg-green-100 dark:bg-green-900/30 p-0.5 mt-0.5">
                          <svg className="h-3 w-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm">Scale the logo proportionally</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Don't</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="rounded-full bg-red-100 dark:bg-red-900/30 p-0.5 mt-0.5">
                          <svg className="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                        <span className="text-sm">Distort or stretch the logo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="rounded-full bg-red-100 dark:bg-red-900/30 p-0.5 mt-0.5">
                          <svg className="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                        <span className="text-sm">Change the logo colors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="rounded-full bg-red-100 dark:bg-red-900/30 p-0.5 mt-0.5">
                          <svg className="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                        <span className="text-sm">Add effects like shadows or outlines</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="colors" className="space-y-6">
            <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Brand Colors</CardTitle>
                <CardDescription>Official color palette with hex codes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {colors.map((color, index) => (
                    <div key={index} className="space-y-2">
                      <div className={`h-24 rounded-md ${color.class}`}></div>
                      <div className="space-y-1">
                        <p className="font-medium">{color.name}</p>
                        <p className="text-xs text-muted-foreground">HEX: {color.hex}</p>
                        <p className="text-xs text-muted-foreground">RGB: {color.rgb}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Color Usage</h4>
                  <p className="text-sm text-muted-foreground">
                    Primary Red is our main brand color and should be used for primary actions and key brand elements.
                    Teal and Yellow provide accent colors for supporting elements. Dark is used for text and UI
                    elements.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Color Combinations</CardTitle>
                <CardDescription>Recommended color pairings for various applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden">
                    <div className="bg-[#FF6B6B] p-4 text-white font-medium">Primary Red + White</div>
                    <div className="bg-white p-4 text-[#FF6B6B] font-medium border">White + Primary Red</div>
                  </div>

                  <div className="rounded-lg overflow-hidden">
                    <div className="bg-[#292F36] p-4 text-[#4ECDC4] font-medium">Dark + Teal</div>
                    <div className="bg-[#4ECDC4] p-4 text-[#292F36] font-medium">Teal + Dark</div>
                  </div>

                  <div className="rounded-lg overflow-hidden">
                    <div className="bg-[#292F36] p-4 text-[#FFD166] font-medium">Dark + Yellow</div>
                    <div className="bg-[#FFD166] p-4 text-[#292F36] font-medium">Yellow + Dark</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="typography" className="space-y-6">
            <Card className="bg-white/80 dark:bg-black/30 backdrop-blur-sm">
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

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Typography Hierarchy</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold">Heading 1</p>
                      <p className="text-xs text-muted-foreground">Montserrat Bold, 30px/36px</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">Heading 2</p>
                      <p className="text-xs text-muted-foreground">Montserrat Bold, 24px/30px</p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold">Heading 3</p>
                      <p className="text-xs text-muted-foreground">Montserrat Semibold, 20px/28px</p>
                    </div>
                    <div>
                      <p className="text-lg font-medium">Heading 4</p>
                      <p className="text-xs text-muted-foreground">Montserrat Medium, 18px/24px</p>
                    </div>
                    <div>
                      <p className="text-base">Body Text</p>
                      <p className="text-xs text-muted-foreground">Inter Regular, 16px/24px</p>
                    </div>
                    <div>
                      <p className="text-sm">Small Text</p>
                      <p className="text-xs text-muted-foreground">Inter Regular, 14px/20px</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

