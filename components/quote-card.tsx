"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const quotes = [
  "Be bold, brave and brilliant",
  "This is where it all begins",
  "Own your vibe",
  "Community is the culture",
  "Campus is the canvas",
  "Lead with kindness, act with purpose",
  "Live your best life!",
  "Right where you belong",
]

export function QuoteCard({ className }: { className?: string }) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)

      // Wait for fade-out animation to complete
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length)

        // Wait a tiny bit before starting fade-in
        setTimeout(() => {
          setIsAnimating(false)
        }, 50)
      }, 400)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card
      className={cn(
        "overflow-hidden bg-gradient-to-r from-[#FFE5D9] to-[#FFCAD4] dark:from-[#3D2C2E]/40 dark:to-[#3D2A2E]/40 backdrop-blur-sm border-0 shadow-md",
        className,
      )}
    >
      <CardContent className="flex flex-col items-center justify-center p-8 md:p-10 h-full min-h-[200px] text-center">
        <blockquote
          className={cn(
            "mb-4 text-xl md:text-2xl lg:text-3xl font-medium italic transition-all duration-400 ease-in-out transform",
            isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
          )}
          aria-live="polite"
        >
          "{quotes[currentQuoteIndex]}"
        </blockquote>
        <p
          className="text-sm text-muted-foreground transition-opacity duration-300 ease-in-out"
          style={{ opacity: isAnimating ? 0 : 0.8 }}
        >
          CampusKey Values
        </p>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1.5">
          {quotes.map((_, index) => (
            <span
              key={index}
              className={cn(
                "block h-1.5 w-1.5 rounded-full transition-all duration-300",
                currentQuoteIndex === index ? "bg-primary/70 w-3" : "bg-primary/30",
              )}
              aria-hidden="true"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

