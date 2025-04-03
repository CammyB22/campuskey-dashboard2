"use client"

import { useState, useEffect } from "react"
import { Sparkles, Heart, Palette, MessageSquare, Users, Lightbulb, Star, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import Link from "next/link"

export default function TrainingHub() {
  const isMobile = useIsMobile()
  const [activeModuleId, setActiveModuleId] = useState<number | null>(null)
  const [completedModules, setCompletedModules] = useState<number[]>([])
  const [totalPoints, setTotalPoints] = useState(0)

  // Training modules data
  const modules = [
    {
      id: 1,
      title: "Purpose & Vision",
      description: "Understand our reason for being and where we're headed",
      icon: Sparkles,
      color: "from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20",
      iconColor: "text-pink-500",
      href: "/academy/module-1",
      storageKey: "ck_module1_complete",
      pointsKey: "ck_module1_points",
    },
    {
      id: 2,
      title: "Brand Values",
      description: "Learn the principles that guide our actions",
      icon: Heart,
      color: "from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20",
      iconColor: "text-purple-500",
      href: "/academy/module-2",
      storageKey: "ck_module2_complete",
      pointsKey: "ck_module2_points",
    },
    {
      id: 3,
      title: "Visual Identity",
      description: "Master our logos, colors, typography, and imagery",
      icon: Palette,
      color: "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20",
      iconColor: "text-blue-500",
      href: "#",
      storageKey: "ck_module3_complete",
      pointsKey: "ck_module3_points",
    },
    {
      id: 4,
      title: "Tone of Voice",
      description: "Discover how we sound and express ourselves",
      icon: MessageSquare,
      color: "from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20",
      iconColor: "text-green-500",
      href: "#",
      storageKey: "ck_module4_complete",
      pointsKey: "ck_module4_points",
    },
    {
      id: 5,
      title: "Touchpoints",
      description: "Explore how our brand comes to life across channels",
      icon: Users,
      color: "from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20",
      iconColor: "text-orange-500",
      href: "#",
      storageKey: "ck_module5_complete",
      pointsKey: "ck_module5_points",
    },
    {
      id: 6,
      title: "Behavior Icons",
      description: "Learn our visual language for student behaviors",
      icon: Lightbulb,
      color: "from-yellow-50 to-yellow-100 dark:from-yellow-950/20 dark:to-yellow-900/20",
      iconColor: "text-yellow-500",
      href: "#",
      storageKey: "ck_module6_complete",
      pointsKey: "ck_module6_points",
    },
    {
      id: 7,
      title: "Living the Brand",
      description: "Apply our brand principles in everyday situations",
      icon: Star,
      color: "from-teal-50 to-teal-100 dark:from-teal-950/20 dark:to-teal-900/20",
      iconColor: "text-teal-500",
      href: "#",
      storageKey: "ck_module7_complete",
      pointsKey: "ck_module7_points",
    },
  ]

  // Leaderboard data
  const leaderboardData = [
    { rank: 1, name: "Sarah Johnson", points: 840 },
    { rank: 2, name: "Michael Chen", points: 765 },
    { rank: 3, name: "Emma Williams", points: 720 },
    { rank: 4, name: "David Rodriguez", points: 685 },
    { rank: 5, name: "Olivia Taylor", points: 650 },
  ]

  // Load completion status and points from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check which modules are completed
      const completed = modules
        .filter((module) => localStorage.getItem(module.storageKey) === "true")
        .map((module) => module.id)

      setCompletedModules(completed)

      // Calculate total points
      let points = 0
      modules.forEach((module) => {
        const modulePoints = localStorage.getItem(module.pointsKey)
        if (modulePoints) {
          points += Number.parseInt(modulePoints, 10)
        }
      })

      setTotalPoints(points)
    }
  }, [])

  // Calculate progress
  const totalModules = modules.length
  const progressPercentage = (completedModules.length / totalModules) * 100

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="flex min-h-screen">
        {/* Leaderboard Sidebar */}
        <Sidebar variant="inset" collapsible="offcanvas">
          <SidebarHeader className="p-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" /> Leaderboard
            </h2>
          </SidebarHeader>
          <SidebarContent className="px-4 pb-4">
            <h3 className="text-sm uppercase font-semibold text-muted-foreground mb-3">Top Performers</h3>
            <div className="space-y-4">
              {leaderboardData.map((entry) => (
                <div
                  key={entry.rank}
                  className={`flex items-center p-3 rounded-lg ${
                    entry.rank === 1
                      ? "bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/30"
                      : entry.rank === 2
                        ? "bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/30"
                        : entry.rank === 3
                          ? "bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/30"
                          : "bg-white/50 dark:bg-black/10 border border-gray-100 dark:border-gray-800/30"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      entry.rank === 1
                        ? "bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200"
                        : entry.rank === 2
                          ? "bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300"
                          : entry.rank === 3
                            ? "bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200"
                            : "bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    #{entry.rank}
                  </div>
                  <div className="ml-3 flex-grow">
                    <p className="font-medium text-sm">{entry.name}</p>
                  </div>
                  <div className="text-sm font-semibold">{entry.points} pts</div>
                </div>
              ))}
            </div>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <SidebarInset>
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-5xl mx-auto space-y-12">
              {/* Mobile Leaderboard (only visible on mobile) */}
              {isMobile && (
                <div className="md:hidden bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800/30">
                  <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                    <Trophy className="h-5 w-5 text-amber-500" /> Leaderboard
                  </h2>
                  <div className="space-y-3">
                    {leaderboardData.slice(0, 3).map((entry) => (
                      <div
                        key={entry.rank}
                        className={`flex items-center p-3 rounded-lg ${
                          entry.rank === 1
                            ? "bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/30"
                            : entry.rank === 2
                              ? "bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/30"
                              : "bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/30"
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            entry.rank === 1
                              ? "bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200"
                              : entry.rank === 2
                                ? "bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300"
                                : "bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200"
                          }`}
                        >
                          #{entry.rank}
                        </div>
                        <div className="ml-3 flex-grow">
                          <p className="font-medium text-sm">{entry.name}</p>
                        </div>
                        <div className="text-sm font-semibold">{entry.points} pts</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hero Section */}
              <section className="space-y-6">
                <div className="text-center space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">CK Academy</h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Learn the brand. Live the brand.</p>
                </div>

                <div className="max-w-md mx-auto space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Your progress</span>
                    <span>
                      {completedModules.length} of {totalModules} modules completed
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                  {totalPoints > 0 && (
                    <div className="text-center mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 text-sm font-medium">
                        <Trophy className="h-4 w-4 mr-1.5" /> {totalPoints} points earned
                      </span>
                    </div>
                  )}
                </div>
              </section>

              {/* Modules Grid */}
              <section>
                <div className="grid gap-6 sm:grid-cols-2">
                  {modules.map((module) => {
                    const isCompleted = completedModules.includes(module.id)
                    const isAvailable = module.id <= 2 // Only first two modules available

                    return (
                      <Link
                        key={module.id}
                        href={isAvailable ? module.href : "#"}
                        className={`block transition-transform duration-300 hover:translate-y-[-4px] ${!isAvailable ? "cursor-not-allowed opacity-70" : ""}`}
                        onClick={(e) => {
                          if (!isAvailable) {
                            e.preventDefault()
                            setActiveModuleId(module.id)
                          }
                        }}
                      >
                        <Card
                          className="overflow-hidden bg-gradient-to-br backdrop-blur-sm border shadow-sm hover:shadow-md transition-all duration-300 h-full"
                          style={{
                            background: `linear-gradient(to bottom right, var(--${module.color.split(" ")[0].split("-")[1]}-50), var(--${module.color.split(" ")[0].split("-")[1]}-100))`,
                          }}
                        >
                          <CardHeader className="pb-4">
                            <div className="flex items-start">
                              <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white/80 dark:bg-white/10 backdrop-blur-sm ${module.iconColor}`}
                              >
                                <module.icon className="h-6 w-6" />
                              </div>
                              <div
                                className={`w-6 h-6 ml-auto ${isCompleted ? "text-green-500" : "text-gray-300 dark:text-gray-600"}`}
                              >
                                {isCompleted && (
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                      fillRule="evenodd"
                                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                )}
                              </div>
                            </div>
                            <CardTitle className="text-xl font-bold">{module.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="pb-4">
                            <p className="text-sm text-muted-foreground">{module.description}</p>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full" variant={isCompleted ? "outline" : "default"}>
                              {isCompleted ? "Review Module" : isAvailable ? "Start Module" : "Coming Soon"}
                            </Button>
                          </CardFooter>
                        </Card>
                      </Link>
                    )
                  })}
                </div>
              </section>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

