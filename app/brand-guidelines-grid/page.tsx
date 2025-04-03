import Link from "next/link"
import { ArrowRight, BookOpen, Check, FileText, Heart, MessageSquare, Palette, Sparkles, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function BrandGuidelinesGrid() {
  const guidelines = [
    {
      title: "Purpose, Vision & Mission",
      description: "Our reason for being and where we're headed",
      icon: Sparkles,
      color: "from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20",
      iconColor: "text-pink-500",
      href: "/brand-guidelines/purpose",
    },
    {
      title: "Brand Values & Agreements",
      description: "The principles that guide our actions",
      icon: Heart,
      color: "from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20",
      iconColor: "text-purple-500",
      href: "/brand-guidelines/values",
    },
    {
      title: "Visual Identity",
      description: "Logos, colors, typography, and imagery",
      icon: Palette,
      color: "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20",
      iconColor: "text-blue-500",
      href: "/brand-guidelines/visual-identity",
    },
    {
      title: "Tone of Voice & Personality",
      description: "How we sound and express ourselves",
      icon: MessageSquare,
      color: "from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20",
      iconColor: "text-green-500",
      href: "/brand-guidelines/tone-voice",
    },
    {
      title: "Message Architecture",
      description: "Key messages and communication hierarchy",
      icon: FileText,
      color: "from-yellow-50 to-yellow-100 dark:from-yellow-950/20 dark:to-yellow-900/20",
      iconColor: "text-yellow-500",
      href: "/brand-guidelines/message",
    },
    {
      title: "Brand Touchpoints & Experience Design",
      description: "How our brand comes to life across channels",
      icon: Users,
      color: "from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20",
      iconColor: "text-orange-500",
      href: "/brand-guidelines/touchpoints",
    },
    {
      title: "Do's and Don'ts",
      description: "Guidelines for proper brand application",
      icon: Check,
      color: "from-teal-50 to-teal-100 dark:from-teal-950/20 dark:to-teal-900/20",
      iconColor: "text-teal-500",
      href: "/brand-guidelines/dos-donts",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">CampusKey Brand Guidelines</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to represent our brand with clarity, energy, and consistency.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {guidelines.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
            >
              <Card
                className={cn(
                  "overflow-hidden bg-gradient-to-br backdrop-blur-sm border shadow-sm hover:shadow-md transition-all duration-300 group-hover:translate-y-[-4px]",
                  item.color,
                )}
              >
                <div className="p-6 flex flex-col h-[280px]">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110",
                      "bg-white/80 dark:bg-white/10 backdrop-blur-sm",
                    )}
                  >
                    <item.icon className={cn("h-6 w-6", item.iconColor)} />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{item.description}</p>

                  <div className="flex items-center text-sm font-medium text-primary mt-auto">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <BookOpen className="h-5 w-5" />
            <span>Complete Brand Book</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Need the full brand guidelines? Download our comprehensive brand book.
          </p>
          <button className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  )
}

