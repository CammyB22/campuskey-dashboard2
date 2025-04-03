"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface PodcastEpisodeCardProps {
  title: string
  subtitle: string
  description: string
  duration: string
  audioSrc: string
  className?: string
}

export function PodcastEpisodeCard({
  title,
  subtitle,
  description,
  duration,
  audioSrc,
  className,
}: PodcastEpisodeCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration2, setDuration2] = useState(0)
  const [volume, setVolume] = useState(0.75)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
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

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
      setIsMuted(newVolume === 0)
    }
  }

  const handleProgressChange = (value: number[]) => {
    const newTime = value[0]
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
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
      setIsLoaded(true)
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

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950/40 dark:to-blue-900/30 backdrop-blur-sm border-0",
        className,
      )}
    >
      <CardContent className="p-6 space-y-5">
        <div className="flex items-start justify-between">
          <div className="space-y-1.5">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground font-medium">{subtitle}</p>
          </div>
          <div className="flex items-center text-sm text-muted-foreground bg-white/50 dark:bg-black/20 px-3 py-1 rounded-full">
            <span className="mr-1.5">🎧</span>
            {duration}
          </div>
        </div>

        <p className="text-muted-foreground line-clamp-2">{description}</p>

        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="secondary"
              className="h-10 w-10 rounded-full p-0 flex items-center justify-center bg-white/70 dark:bg-white/10 hover:bg-white/90 dark:hover:bg-white/20"
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause" : "Play"}
              disabled={!isLoaded}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>

            <div className="flex-1">
              <Slider
                value={[currentTime]}
                max={duration2 || 100}
                step={0.1}
                onValueChange={handleProgressChange}
                disabled={!isLoaded}
                className="cursor-pointer"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{isLoaded ? formatTime(duration2) : duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 rounded-full"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Slider
                value={[volume]}
                max={1}
                step={0.01}
                onValueChange={handleVolumeChange}
                className="w-20 cursor-pointer"
              />
            </div>
          </div>

          <audio ref={audioRef} src={audioSrc} preload="metadata" className="hidden" />
        </div>
      </CardContent>
    </Card>
  )
}

