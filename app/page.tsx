import Link from "next/link"
import { FileText, GraduationCap, Headphones, FolderDown, ChevronRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { QuoteCard } from "@/components/quote-card"

export default function Dashboard() {
  return (
    <main className="flex-1 p-6 md:p-8 lg:p-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Welcome to the CK Brand Bubble</h1>
          <p className="text-lg text-muted-foreground">
            One place for everything CampusKey — your guide to our brand, culture, and values.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Brand Guidelines */}
            <Link href="/brand-guidelines-grid">
              <div className="h-48 bg-pink-100 dark:bg-pink-950/30 rounded-xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-pink-600 dark:text-pink-400">
                    <FileText className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold">Brand Guidelines</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Access our brand identity, colors, and usage rules
                </p>
                <div className="text-sm text-primary font-medium mt-2 flex items-center">
                  View <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Link>

            {/* CK Academy */}
            <Link href="/academy">
              <div className="h-48 bg-purple-100 dark:bg-purple-950/30 rounded-xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 dark:text-purple-400">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold">CK Academy</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Training materials and learning resources</p>
                <div className="text-sm text-primary font-medium mt-2 flex items-center">
                  View <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Link>

            {/* Podcasts */}
            <Link href="/podcasts">
              <div className="h-48 bg-blue-100 dark:bg-blue-950/30 rounded-xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">
                    <Headphones className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold">Podcasts</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Listen to our latest podcasts and audio content
                </p>
                <div className="text-sm text-primary font-medium mt-2 flex items-center">
                  View <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Link>

            {/* Brand Assets */}
            <Link href="/assets">
              <div className="h-48 bg-green-100 dark:bg-green-950/30 rounded-xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400">
                    <FolderDown className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold">Brand Assets</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Download logos, images, and marketing materials
                </p>
                <div className="text-sm text-primary font-medium mt-2 flex items-center">
                  View <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Recent Updates</h2>
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">New logo pack uploaded</CardTitle>
                <CardDescription>Yesterday at 2:30 PM</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground">
                  Updated logo pack with new variants for social media and print.
                </p>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Download className="h-4 w-4" /> Download
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Podcast: Culture & Community</CardTitle>
                <CardDescription>2 days ago</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground">
                  New episode discussing CampusKey's approach to building community.
                </p>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Headphones className="h-4 w-4" /> Listen
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">New CK Values Course added</CardTitle>
                <CardDescription>Last week</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground">
                  Interactive course on CampusKey values and principles for new team members.
                </p>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <FileText className="h-4 w-4" /> Start Course
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section>
          <QuoteCard />
        </section>
      </div>
    </main>
  )
}

