import { Sparkles } from "lucide-react"
import { ModuleCard } from "@/components/module-card"

export default function ModuleCardExample() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Module Card Example</h1>

        <ModuleCard
          id="module-1"
          title="Purpose, Vision & Mission"
          description="Learn what drives us as a brand."
          href="/academy/module-1"
          color="from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20"
          icon={<Sparkles className="h-6 w-6 text-pink-500" />}
          storageKey="ck_module1_complete"
        />

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Try setting <code>localStorage.setItem("ck_module1_complete", "true")</code> in the console
          </p>
          <p>and refreshing the page to see the completed state.</p>
        </div>
      </div>
    </div>
  )
}

