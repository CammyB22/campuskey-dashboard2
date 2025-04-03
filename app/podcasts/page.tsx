import { Headphones } from "lucide-react"

export default function PodcastsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
            <Headphones className="h-8 w-8 text-blue-500" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">CampusKey Podcasts</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Listen to our latest podcasts and audio content.
          </p>
        </div>

        {/* New Podcast Episode Card */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-xl p-6 shadow-sm border border-indigo-100 dark:border-indigo-900/30 backdrop-blur-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-100 dark:bg-indigo-900/50 rounded-full p-2">
                <Headphones className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-xl font-semibold">CampusKey Strategy — Episode 1</h2>
            </div>

            <p className="text-muted-foreground">
              Tune into our first AI-powered podcast exploring how CK's brand strategy helps us scale with soul.
            </p>

            <div className="pt-2">
              <audio controls className="w-full" src="/podcasts/episode-1.wav">
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-muted-foreground mt-2 italic">
                If you can't hear the audio, try refreshing the page or use a Chrome browser.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-8">
          <div className="flex flex-col items-center gap-4 text-muted-foreground">
            <Headphones className="h-12 w-12" />
            <p className="text-lg">More episodes coming soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}

