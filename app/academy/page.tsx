import { BookOpen, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AcademyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
            <GraduationCap className="h-8 w-8 text-purple-500" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">CampusKey Academy</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Training materials and learning resources to help you excel in your role.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-8">
          <div className="max-w-2xl w-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-900/20 rounded-xl p-8 shadow-sm border border-white/20 dark:border-white/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Brand Training Hub</h2>
            <p className="text-muted-foreground mb-6">
              Complete our brand training modules to become a certified CampusKey Brand Ambassador.
            </p>
            <Link href="/academy/training-hub">
              <Button className="gap-2">
                Enter Training Hub <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center py-6">
          <div className="flex flex-col items-center gap-4 text-muted-foreground">
            <BookOpen className="h-16 w-16" />
            <p className="text-lg">Additional academy content coming soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}

