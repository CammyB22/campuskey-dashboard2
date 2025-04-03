import { PodcastCard } from "@/components/podcast-card"

export default function PodcastExamplePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Podcast Card Example</h1>

        <PodcastCard
          title="Understanding CampusKey's Brand Identity"
          description="Dive into what makes our brand unique and how we express our values through visual and verbal communication."
          duration="12:45"
          audioSrc="/audio/brand-identity.mp3"
          category="Brand Bubble"
        />

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">How to Use</h2>
          <p className="text-muted-foreground mb-4">
            This component displays a podcast episode with playback controls. The audio player is embedded directly in
            the card.
          </p>
          <p className="text-muted-foreground">
            Note: For this example, the audio source is a placeholder. In a real implementation, you would provide a
            valid path to an MP3 file.
          </p>
        </div>
      </div>
    </div>
  )
}

