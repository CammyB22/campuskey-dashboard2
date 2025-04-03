"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PodcastCardProps {
  title: string
  description: string
  duration: string
  audioSrc: string
  category: string
  categoryColor?: string
  className?: string
}

export function PodcastCard({
  title,
  description,
  duration,
  audioSrc,
  category,
  categoryColor = "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  className,
}: PodcastCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration2, setDuration2] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration2(audio.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate)
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const progress = duration2 ? (currentTime / duration2) * 100 : 0

  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-md", className)}>
      <CardContent className="p-0">
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <Badge className={cn("font-medium", categoryColor)}>{category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5 mr-1" />
              {duration}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground line-clamp-2">{description}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant="outline"
                className="h-10 w-10 rounded-full p-0 flex items-center justify-center"
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>

              <div className="flex-1 space-y-1">
                <div className="h-1.5 w-full bg-secondary overflow-hidden rounded-full">
                  <div className="h-full bg-primary transition-all duration-100" style={{ width: `${progress}%` }} />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{formatTime(currentTime)}</span>
                  <span>{duration}</span>
                </div>
              </div>
            </div>

            <audio ref={audioRef} src={audioSrc} preload="metadata" className="hidden" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

