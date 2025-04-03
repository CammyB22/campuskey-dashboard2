import { PodcastEpisodeCard } from "@/components/podcast-episode-card"

export default function PodcastEpisodeExamplePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Podcast Episode Card</h1>

        <PodcastEpisodeCard
          title="Episode 1 — CampusKey's Brand Strategy"
          subtitle="Listen to our first AI-generated podcast based on the Brand Bubble"
          description="This episode explores the core pillars of CampusKey's identity, culture, and student lifestyle."
          duration="11:23"
          audioSrc="https://your-project-name.vercel.app/podcasts/episode-1.wav"
        />

        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">How to Use</h2>
          <p className="text-muted-foreground">
            This component displays a podcast episode with a fully-featured audio player. The player includes:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Play/pause button</li>
            <li>Progress bar with time display</li>
            <li>Volume control with mute toggle</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            <strong>Note:</strong> For this example, the audio source is a placeholder URL. In a real implementation,
            you would provide a valid path to a WAV file hosted on your server or CDN.
          </p>
        </div>
      </div>
    </div>
  )
}

