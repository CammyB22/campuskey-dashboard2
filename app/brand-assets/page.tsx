import { Download, FileText, Palette, Type, Layout, Image, Info, X, Sparkles } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FontsSection } from "@/components/fonts-section"

export default function BrandAssetsPage() {
  const colorSwatches = [
    { name: "Primary Red", hex: "#FF6B6B", rgb: "255, 107, 107", class: "bg-[#FF6B6B]" },
    { name: "Teal", hex: "#4ECDC4", rgb: "78, 205, 196", class: "bg-[#4ECDC4]" },
    { name: "Yellow", hex: "#FFD166", rgb: "255, 209, 102", class: "bg-[#FFD166]" },
    { name: "Dark", hex: "#292F36", rgb: "41, 47, 54", class: "bg-[#292F36] text-white" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
            <Image className="h-10 w-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">CampusKey Brand Assets</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to represent the brand beautifully and consistently.
          </p>
        </section>

        {/* Tabbed Content */}
        <Tabs defaultValue="logos" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="logos" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden md:inline">Logos</span>
            </TabsTrigger>
            <TabsTrigger value="colors" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span className="hidden md:inline">Colors</span>
            </TabsTrigger>
            <TabsTrigger value="fonts" className="flex items-center gap-2">
              <Type className="h-4 w-4" />
              <span className="hidden md:inline">Fonts</span>
            </TabsTrigger>
            <TabsTrigger value="templates" className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              <span className="hidden md:inline">Templates</span>
            </TabsTrigger>
            <TabsTrigger value="icons" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              <span className="hidden md:inline">Icons & Graphics</span>
            </TabsTrigger>
          </TabsList>

          {/* Logos Tab */}
          <TabsContent value="logos" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Main Logo (Dark Font)</CardTitle>
                  <CardDescription>Primary logo with dark typography</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="aspect-video rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                    <div className="w-3/4 h-12 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-sm text-slate-500 dark:text-slate-400">
                      Logo Preview
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full gap-2">
                    <Download className="h-4 w-4" /> Download
                  </Button>
                </CardFooter>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Main Logo (Light Font)</CardTitle>
                  <CardDescription>Primary logo with light typography</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="aspect-video rounded-md bg-slate-800 flex items-center justify-center">
                    <div className="w-3/4 h-12 bg-slate-700 rounded flex items-center justify-center text-sm text-slate-300">
                      Logo Preview
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full gap-2">
                    <Download className="h-4 w-4" /> Download
                  </Button>
                </CardFooter>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">CK Badge Logo</CardTitle>
                  <CardDescription>Compact badge version of the logo</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="aspect-video rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                    <div className="w-24 h-24 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center text-sm text-slate-500 dark:text-slate-400">
                      CK
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full gap-2">
                    <Download className="h-4 w-4" /> Download
                  </Button>
                </CardFooter>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Logo Without Line</CardTitle>
                  <CardDescription>Clean version without the divider line</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="aspect-video rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                    <div className="w-3/4 h-12 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-sm text-slate-500 dark:text-slate-400">
                      Logo Preview
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full gap-2">
                    <Download className="h-4 w-4" /> Download
                  </Button>
                </CardFooter>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Logo Placement Guidelines</CardTitle>
                  <CardDescription>Rules for proper logo usage and placement</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="aspect-video rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-slate-300 dark:text-slate-600" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full gap-2">
                    <Download className="h-4 w-4" /> Download PDF
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-6">
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm">
              <CardHeader>
                <CardTitle>Brand Colors</CardTitle>
                <CardDescription>Official color palette with hex codes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                  {colorSwatches.map((color, index) => (
                    <div key={index} className="space-y-2">
                      <div className={`h-24 rounded-md ${color.class} shadow-sm`}></div>
                      <div className="space-y-1">
                        <p className="font-medium">{color.name}</p>
                        <p className="text-xs text-muted-foreground">HEX: {color.hex}</p>
                        <p className="text-xs text-muted-foreground">RGB: {color.rgb}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" /> Download ASE
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" /> Download SCSS
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" /> Download LESS
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fonts Tab */}
          <TabsContent value="fonts" className="space-y-6">
            <FontsSection />
          </TabsContent>

          {/* Templates Tab */}
          <TabsContent value="templates" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" /> Letterhead Template
                  </CardTitle>
                  <CardDescription>Official letterhead for business communications</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="aspect-[8.5/11] rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4">
                    <div className="w-full h-full border border-dashed border-slate-300 dark:border-slate-700 rounded flex flex-col">
                      <div className="h-20 border-b border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center">
                        <div className="w-32 h-8 bg-slate-200 dark:bg-slate-800 rounded"></div>
                      </div>
                      <div className="flex-grow p-4">
                        <div className="w-full h-4 bg-slate-200 dark:bg-slate-800 rounded mb-2"></div>
                        <div className="w-full h-4 bg-slate-200 dark:bg-slate-800 rounded mb-2"></div>
                        <div className="w-3/4 h-4 bg-slate-200 dark:bg-slate-800 rounded"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> PDF
                  </Button>
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> DOCX
                  </Button>
                </CardFooter>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" /> Email Signature
                  </CardTitle>
                  <CardDescription>Standardized email signature for staff</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="rounded-md bg-slate-50 dark:bg-slate-900 p-4">
                    <div className="border-l-4 border-primary p-3 space-y-2">
                      <p className="font-bold">Jane Smith</p>
                      <p className="text-sm">Marketing Manager</p>
                      <div className="w-24 h-6 bg-slate-200 dark:bg-slate-800 rounded"></div>
                      <p className="text-xs text-muted-foreground">jane.smith@campuskey.co.za | +27 21 555 1234</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> PNG
                  </Button>
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> HTML
                  </Button>
                </CardFooter>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" /> Business Card Template
                  </CardTitle>
                  <CardDescription>Standard business card design</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="aspect-[1.75/1] rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4">
                    <div className="w-full h-full border border-dashed border-slate-300 dark:border-slate-700 rounded flex flex-col justify-between p-3">
                      <div className="w-24 h-6 bg-slate-200 dark:bg-slate-800 rounded"></div>
                      <div>
                        <div className="w-32 h-4 bg-slate-200 dark:bg-slate-800 rounded mb-1"></div>
                        <div className="w-40 h-3 bg-slate-200 dark:bg-slate-800 rounded"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardFooter>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Layout className="h-5 w-5" /> Presentation Template
                  </CardTitle>
                  <CardDescription>Slides deck for presentations</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="aspect-video rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white dark:bg-slate-800 rounded shadow-sm flex flex-col">
                      <div className="h-12 bg-primary/10 flex items-center p-3">
                        <div className="w-24 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                      </div>
                      <div className="flex-grow flex items-center justify-center">
                        <div className="w-32 h-6 bg-slate-200 dark:bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> PPTX
                  </Button>
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> Keynote
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Icons & Graphics Tab */}
          <TabsContent value="icons" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Behavior-Based Icons</CardTitle>
                  <CardDescription>Icons representing student behaviors</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="aspect-square rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                        <span className="text-xs">Icon</span>
                      </div>
                    </div>
                    <div className="aspect-square rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                        <span className="text-xs">Icon</span>
                      </div>
                    </div>
                    <div className="aspect-square rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                        <span className="text-xs">Icon</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> SVG
                  </Button>
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> PNG
                  </Button>
                </CardFooter>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Sparkle Icon</CardTitle>
                  <CardDescription>Decorative sparkle element</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="aspect-video rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-yellow-400" />
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> SVG
                  </Button>
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> PNG
                  </Button>
                </CardFooter>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Socks Icon</CardTitle>
                  <CardDescription>Lifestyle icon for comfort</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="aspect-video rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                    <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-sm">
                      Socks
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> SVG
                  </Button>
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> PNG
                  </Button>
                </CardFooter>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Bed/Furniture Icons</CardTitle>
                  <CardDescription>Accommodation-related icons</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="aspect-square rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                      <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-xs">
                        Bed
                      </div>
                    </div>
                    <div className="aspect-square rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                      <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-xs">
                        Chair
                      </div>
                    </div>
                    <div className="aspect-square rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                      <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-xs">
                        Desk
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> SVG
                  </Button>
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> PNG
                  </Button>
                </CardFooter>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 dark:bg-black/30 border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Community Signs</CardTitle>
                  <CardDescription>Signage for common areas</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-square rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                        <X className="h-6 w-6 text-red-500" />
                      </div>
                    </div>
                    <div className="aspect-square rounded-md bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <Info className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> SVG
                  </Button>
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" /> PNG
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Information */}
        <section className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Info className="h-5 w-5" />
            <span>Need Help?</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            For custom asset requests or questions, please contact the brand team.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <Button variant="outline" size="sm">
              Contact Brand Team
            </Button>
            <Button variant="outline" size="sm">
              Request Custom Asset
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

