"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ModuleCardProps {
  id: string
  title: string
  description: string
  href: string
  color: string
  icon: React.ReactNode
  storageKey: string
  className?: string
}

export function ModuleCard({ id, title, description, href, color, icon, storageKey, className }: ModuleCardProps) {
  const [isCompleted, setIsCompleted] = useState(false)

  // Check localStorage for completion status
  useEffect(() => {
    const completionStatus = localStorage.getItem(storageKey)
    setIsCompleted(completionStatus === "true")
  }, [storageKey])

  return (
    <Link href={href} className="block transition-transform duration-300 hover:-translate-y-1 focus:outline-none">
      <Card
        className={cn(
          "h-full overflow-hidden bg-gradient-to-br backdrop-blur-sm border shadow-sm hover:shadow-md transition-all duration-300 relative",
          color,
          className,
        )}
      >
        {/* Completion indicator */}
        {isCompleted && (
          <div className="absolute top-3 right-3 w-6 h-6 text-green-500">
            <CheckCircle className="h-6 w-6" />
          </div>
        )}

        <CardContent className="p-6 pb-4">
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/80 dark:bg-white/10 backdrop-blur-sm">
              {icon}
            </div>
          </div>

          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-2">
          <Button
            variant={isCompleted ? "outline" : "default"}
            className="w-full"
            aria-label={isCompleted ? `Review ${title} module` : `Start ${title} module`}
          >
            {isCompleted ? "Review Module" : "Start Module"}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

