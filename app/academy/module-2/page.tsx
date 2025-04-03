"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Award, ChevronRight, Home, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function BrandValuesModule() {
  // Quiz state
  const [activeSection, setActiveSection] = useState<"intro" | "content" | "quiz" | "results">("intro")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [bonusAnswer, setBonusAnswer] = useState("")
  const [bonusCorrect, setBonusCorrect] = useState(false)
  const [bonusSubmitted, setBonusSubmitted] = useState(false)

  // Refs for scrolling
  const contentSectionRef = useRef<HTMLDivElement>(null)
  const quizSectionRef = useRef<HTMLDivElement>(null)
  const resultsSectionRef = useRef<HTMLDivElement>(null)

  // Brand values data
  const brandValues = [
    {
      title: "Real & Relatable",
      description: "We're human, down-to-earth, and honest.",
      color: "from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20",
      textColor: "text-pink-800 dark:text-pink-300",
      borderColor: "border-pink-200 dark:border-pink-800/30",
    },
    {
      title: "Brave & Bold",
      description: "We take initiative and own our actions.",
      color: "from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20",
      textColor: "text-purple-800 dark:text-purple-300",
      borderColor: "border-purple-200 dark:border-purple-800/30",
    },
    {
      title: "Intentional",
      description: "We act with clarity and purpose.",
      color: "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20",
      textColor: "text-blue-800 dark:text-blue-300",
      borderColor: "border-blue-200 dark:border-blue-800/30",
    },
    {
      title: "Kind & Respectful",
      description: "We show empathy and care in every moment.",
      color: "from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20",
      textColor: "text-green-800 dark:text-green-300",
      borderColor: "border-green-200 dark:border-green-800/30",
    },
    {
      title: "Fun & Energy-Driven",
      description: "We bring the vibe and lift the space.",
      color: "from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20",
      textColor: "text-orange-800 dark:text-orange-300",
      borderColor: "border-orange-200 dark:border-orange-800/30",
    },
    {
      title: "We Don't Just Build Beds",
      description: "We create lifestyle experiences.",
      color: "from-teal-50 to-teal-100 dark:from-teal-950/20 dark:to-teal-900/20",
      textColor: "text-teal-800 dark:text-teal-300",
      borderColor: "border-teal-200 dark:border-teal-800/30",
    },
  ]

  // Quiz questions
  const questions = [
    {
      question: "Which of these is a core CampusKey brand value?",
      options: ["Luxury & Exclusivity", "Real & Relatable", "Formal & Traditional", "Competitive & Aggressive"],
      correctAnswer: 1,
      feedback:
        "Real & Relatable is one of our core values. We're human, down-to-earth, and honest in all our interactions.",
    },
    {
      question: "What does 'We Don't Just Build Beds' mean as a brand value?",
      options: [
        "We also build desks and chairs",
        "We focus on construction quality",
        "We create lifestyle experiences",
        "We offer more furniture options",
      ],
      correctAnswer: 2,
      feedback:
        "This value means we go beyond physical accommodations to create complete lifestyle experiences for students.",
    },
    {
      question: "How should team members demonstrate the 'Brave & Bold' value?",
      options: [
        "By taking unnecessary risks",
        "By being loud and demanding",
        "By taking initiative and owning their actions",
        "By working independently without collaboration",
      ],
      correctAnswer: 2,
      feedback:
        "Being Brave & Bold means taking initiative, owning your actions, and not being afraid to try new approaches.",
    },
    {
      question: "Which of these best demonstrates the 'Intentional' value?",
      options: [
        "Making quick decisions without planning",
        "Acting with clarity and purpose",
        "Following traditions without questioning",
        "Doing what everyone else is doing",
      ],
      correctAnswer: 1,
      feedback:
        "Being Intentional means acting with clarity and purpose, making deliberate choices aligned with our vision.",
    },
    {
      question: "True or False: 'Fun & Energy-Driven' means we prioritize parties over academics.",
      options: ["True", "False"],
      correctAnswer: 1,
      feedback:
        "False. While we bring positive energy and create enjoyable environments, we balance this with supporting academic success and personal growth.",
    },
    {
      question: "Which brand value emphasizes our commitment to treating others well?",
      options: ["Real & Relatable", "Brave & Bold", "Kind & Respectful", "Fun & Energy-Driven"],
      correctAnswer: 2,
      feedback: "Kind & Respectful emphasizes our commitment to showing empathy and care in every interaction.",
    },
    {
      question: "How do our brand values influence decision-making at CampusKey?",
      options: [
        "They're just marketing slogans with no real impact",
        "They guide all our decisions and interactions",
        "They only apply to external communications",
        "They're only relevant for management",
      ],
      correctAnswer: 1,
      difficulty: "hard",
      feedback:
        "Our brand values are foundational principles that guide all our decisions and interactions, both internally and with students.",
    },
    {
      question: "When faced with a difficult situation, which value reminds us to approach it with honesty?",
      options: ["Brave & Bold", "Intentional", "Real & Relatable", "We Don't Just Build Beds"],
      correctAnswer: 2,
      difficulty: "hard",
      feedback:
        "Real & Relatable reminds us to be honest, authentic, and down-to-earth, especially in challenging situations.",
    },
    {
      question: "How should the 'Kind & Respectful' value be applied when giving feedback?",
      options: [
        "Avoid giving negative feedback altogether",
        "Deliver feedback with empathy while still being honest",
        "Only focus on positive aspects",
        "Delegate difficult feedback to someone else",
      ],
      correctAnswer: 1,
      difficulty: "hard",
      feedback:
        "Being Kind & Respectful means delivering feedback with empathy and care, while still being honest and helpful.",
    },
    {
      question: "Which statement best captures how our values work together?",
      options: [
        "Each value operates independently in different situations",
        "Some values are more important than others",
        "Our values sometimes conflict with each other",
        "All our values work together to create a cohesive brand experience",
      ],
      correctAnswer: 3,
      difficulty: "hard",
      feedback:
        "All our values work together harmoniously to create a cohesive brand experience, with each value complementing the others.",
    },
    {
      question:
        "Bonus Question: Describe a specific scenario where multiple CampusKey brand values would guide your actions and decisions.",
      type: "text",
      difficulty: "bonus",
      correctAnswerCheck: (answer: string) => {
        const keywords = [
          "real",
          "relatable",
          "brave",
          "bold",
          "intentional",
          "kind",
          "respectful",
          "fun",
          "energy",
          "experience",
          "lifestyle",
        ]
        // Check if the answer contains at least 3 keywords and is at least 30 characters long
        return answer.length >= 30 && keywords.filter((keyword) => answer.toLowerCase().includes(keyword)).length >= 3
      },
      feedback:
        "A good answer demonstrates how multiple values would guide your approach to a specific situation, showing how our values work together in practice.",
    },
  ]

  // Function to navigate to content section
  const goToContent = () => {
    setActiveSection("content")
    if (contentSectionRef.current) {
      contentSectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Function to start the quiz
  const startQuiz = () => {
    setActiveSection("quiz")
    // Scroll to quiz section
    if (quizSectionRef.current) {
      quizSectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Function to handle answer selection
  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return // Prevent selecting another answer during feedback

    setSelectedAnswer(answerIndex)
    const correct = answerIndex === questions[currentQuestion].correctAnswer
    setIsCorrect(correct)
    setShowFeedback(true)

    if (correct) {
      setScore((prevScore) => prevScore + 1)
    }
  }

  // Function to handle bonus question submission
  const handleBonusSubmit = () => {
    if (bonusSubmitted) return

    const isCorrect = questions[10].correctAnswerCheck(bonusAnswer)
    setBonusCorrect(isCorrect)
    setBonusSubmitted(true)

    if (isCorrect) {
      setScore((prevScore) => prevScore + 3)
    }
  }

  // Function to move to the next question
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1)
      setShowFeedback(false)
      setSelectedAnswer(null)
    } else {
      setActiveSection("results")
      // Scroll to results section
      if (resultsSectionRef.current) {
        resultsSectionRef.current.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  // Function to reset the quiz
  const resetQuiz = () => {
    setCurrentQuestion(0)
    setShowFeedback(false)
    setIsCorrect(false)
    setScore(0)
    setSelectedAnswer(null)
    setBonusAnswer("")
    setBonusCorrect(false)
    setBonusSubmitted(false)
    setActiveSection("quiz")
    // Scroll to quiz section
    if (quizSectionRef.current) {
      quizSectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Calculate if user passed (7 or more correct answers)
  const passed = score >= 7

  // Save completion status to localStorage
  useEffect(() => {
    if (activeSection === "results" && passed) {
      const totalPoints = 10 + (bonusCorrect ? 3 : 0)
      localStorage.setItem("ck_module2_complete", "true")
      localStorage.setItem("ck_module2_points", totalPoints.toString())
    }
  }, [activeSection, passed, bonusCorrect])

  // Effect to handle initial scroll position
  useEffect(() => {
    // If the URL has a hash, scroll to that section
    if (window.location.hash) {
      const hash = window.location.hash.substring(1)
      if (hash === "quiz") {
        setActiveSection("quiz")
        if (quizSectionRef.current) {
          quizSectionRef.current.scrollIntoView({ behavior: "smooth" })
        }
      } else if (hash === "content") {
        setActiveSection("content")
        if (contentSectionRef.current) {
          contentSectionRef.current.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/academy/training-hub">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Training Hub
              </Link>
            </Button>

            <div className="flex space-x-2">
              <Button
                variant={activeSection === "intro" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveSection("intro")}
              >
                Intro
              </Button>
              <Button variant={activeSection === "content" ? "default" : "ghost"} size="sm" onClick={goToContent}>
                Content
              </Button>
              <Button
                variant={activeSection === "quiz" || activeSection === "results" ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  if (activeSection !== "results") {
                    setActiveSection("quiz")
                    if (quizSectionRef.current) {
                      quizSectionRef.current.scrollIntoView({ behavior: "smooth" })
                    }
                  } else {
                    if (resultsSectionRef.current) {
                      resultsSectionRef.current.scrollIntoView({ behavior: "smooth" })
                    }
                  }
                }}
              >
                {activeSection === "results" ? "Results" : "Quiz"}
              </Button>
            </div>
          </div>

          {/* Module Introduction */}
          <section
            className={`space-y-8 transition-opacity duration-500 ${activeSection === "intro" ? "opacity-100" : "opacity-70"}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/30 text-purple-800 dark:text-purple-300 text-sm font-medium">
                Module 2
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Brand Values & Agreements</h1>
              <p className="text-xl text-muted-foreground">Who we are. How we show up.</p>
            </div>

            <Card className="bg-white/80 dark:bg-black/20 backdrop-blur-sm border shadow-sm overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  Our brand values define who we are and how we show up in every interaction — internally and
                  externally. From being intentional to staying real, these principles guide our decision-making,
                  culture, and the CampusKey experience.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between pt-2 pb-6">
                <Button variant="outline" onClick={goToContent} className="gap-2">
                  <Heart className="h-4 w-4" />
                  Explore Values
                </Button>
                <Button onClick={startQuiz} className="gap-2">
                  Take Quiz <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl opacity-30"></div>
              <div className="relative p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <div className="grid gap-6 md:grid-cols-3 text-left">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                        1
                      </div>
                      <h3 className="font-medium">Core Values</h3>
                    </div>
                    <p className="text-sm text-muted-foreground pl-10">The principles that guide our actions</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
                        2
                      </div>
                      <h3 className="font-medium">Brand Agreements</h3>
                    </div>
                    <p className="text-sm text-muted-foreground pl-10">How we commit to working together</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        3
                      </div>
                      <h3 className="font-medium">Living the Values</h3>
                    </div>
                    <p className="text-sm text-muted-foreground pl-10">Applying our values in everyday situations</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Module Content */}
          <section
            ref={contentSectionRef}
            id="content"
            className={`space-y-8 transition-opacity duration-500 ${activeSection === "content" ? "opacity-100" : "opacity-70"}`}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Our Brand Values</h2>
              <p className="text-muted-foreground">These core principles define who we are and guide how we operate.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {brandValues.map((value, index) => (
                <Card
                  key={index}
                  className={cn(
                    "overflow-hidden bg-gradient-to-br backdrop-blur-sm border shadow-sm hover:shadow-md transition-all duration-300",
                    value.color,
                    value.borderColor,
                  )}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className={cn("text-xl", value.textColor)}>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white/80 dark:bg-black/20 backdrop-blur-sm border shadow-sm overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <CardHeader>
                <CardTitle>Brand Agreements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our brand agreements are the promises we make to each other about how we'll work together and
                  represent CampusKey. These agreements guide our behavior and decision-making.
                </p>
                <div className="space-y-3">
                  {[
                    "Be bold, brave and brilliant in everything we do",
                    "Lead with kindness and act with purpose",
                    "Embrace challenges as opportunities for growth",
                    "Celebrate successes, learn from failures",
                    "Respect each other's differences and perspectives",
                    "Take ownership of our actions and their impact",
                    "Communicate openly, honestly, and constructively",
                  ].map((agreement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-800/30 flex items-center justify-center text-purple-600 text-sm font-medium">
                        {index + 1}
                      </span>
                      <p className="font-medium">{agreement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <blockquote className="text-xl md:text-2xl font-medium italic text-center">
                  "We don't just build student accommodation; we create communities where students can thrive."
                </blockquote>
                <p className="text-center text-sm text-muted-foreground mt-4">— CampusKey Founding Principle</p>
              </CardContent>
            </Card>

            <div className="flex justify-center pt-4">
              <Button onClick={startQuiz} className="gap-2">
                Take the Quiz <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </section>

          {/* Quiz Section */}
          <section
            ref={quizSectionRef}
            id="quiz"
            className={`space-y-8 transition-opacity duration-500 ${activeSection === "quiz" ? "opacity-100" : "opacity-70"}`}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Module Quiz</h2>
              <p className="text-muted-foreground">
                🎯 Complete the quiz below to test your understanding and unlock your next badge.
              </p>
            </div>

            <Card className="bg-white/80 dark:bg-black/20 backdrop-blur-sm border shadow-md">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium">Score: {score}</span>
                </div>
                <Progress value={(currentQuestion / (questions.length - 1)) * 100} className="h-2" />
                <div className="flex items-center gap-2 mt-4">
                  {questions[currentQuestion].difficulty === "hard" && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-orange-100 dark:bg-orange-950/30 text-orange-800 dark:text-orange-300">
                      Hard
                    </span>
                  )}
                  {questions[currentQuestion].difficulty === "bonus" && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-950/30 text-purple-800 dark:text-purple-300">
                      Bonus
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl font-bold mt-2">{questions[currentQuestion].question}</CardTitle>
              </CardHeader>

              <CardContent className="pb-4">
                {questions[currentQuestion].type === "text" ? (
                  <div className="space-y-4">
                    <textarea
                      className="w-full p-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      rows={4}
                      placeholder="Type your answer here..."
                      value={bonusAnswer}
                      onChange={(e) => setBonusAnswer(e.target.value)}
                      disabled={bonusSubmitted}
                    />
                    {!bonusSubmitted ? (
                      <Button onClick={handleBonusSubmit} className="w-full">
                        Submit Answer
                      </Button>
                    ) : (
                      <div
                        className={`p-4 rounded-md ${bonusCorrect ? "bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/30" : "bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/30"}`}
                      >
                        <div className="flex items-start gap-3">
                          {bonusCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          )}
                          <div>
                            <p
                              className={`font-medium ${bonusCorrect ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300"}`}
                            >
                              {bonusCorrect ? "Great answer!" : "Not quite there"}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">{questions[currentQuestion].feedback}</p>
                            {bonusCorrect && (
                              <p className="text-sm font-medium text-green-600 dark:text-green-400 mt-2">
                                🔥 Bonus unlocked! +3 extra points
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        className={`w-full p-4 text-left rounded-md border transition-all ${
                          selectedAnswer === index
                            ? isCorrect
                              ? "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800/30"
                              : "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800/30"
                            : "bg-white dark:bg-black/10 border-gray-200 dark:border-gray-800/30 hover:bg-gray-50 dark:hover:bg-gray-900/20"
                        } ${showFeedback ? "cursor-default" : "cursor-pointer"}`}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showFeedback}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {showFeedback &&
                            selectedAnswer === index &&
                            (isCorrect ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-500" />
                            ))}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {showFeedback && questions[currentQuestion].type !== "text" && (
                  <div
                    className={`mt-4 p-4 rounded-md ${isCorrect ? "bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/30" : "bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/30"}`}
                  >
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      )}
                      <div>
                        <p
                          className={`font-medium ${isCorrect ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300"}`}
                        >
                          {isCorrect ? "Correct!" : "Oops, not quite"}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">{questions[currentQuestion].feedback}</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="pt-2 pb-6">
                {(showFeedback || bonusSubmitted) && (
                  <Button onClick={nextQuestion} className="gap-2 ml-auto">
                    {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          </section>

          {/* Results Section */}
          <section
            ref={resultsSectionRef}
            id="results"
            className={`space-y-8 transition-opacity duration-500 ${activeSection === "results" ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Quiz Results</h2>
              <p className="text-muted-foreground">
                See how well you understand CampusKey's brand values and agreements.
              </p>
            </div>

            <Card className="bg-white/80 dark:bg-black/20 backdrop-blur-sm border shadow-md overflow-hidden">
              <div className={`h-2 w-full ${passed ? "bg-green-500" : "bg-orange-500"}`}></div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold">{passed ? "Congratulations!" : "Almost There!"}</CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col items-center text-center pb-4">
                {passed ? (
                  <>
                    <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                      <Award className="h-12 w-12 text-green-500" />
                    </div>
                    <p className="text-lg font-medium mb-2">You've completed the module!</p>
                    <p className="text-muted-foreground mb-4">
                      Your score: {score} / {questions.length - 1 + (bonusCorrect ? 3 : 0)} points
                    </p>
                    <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/30 rounded-lg p-4 mb-6 inline-flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-green-800 dark:text-green-300 font-medium">
                        ✅ You passed! You've earned 10 points.
                      </span>
                    </div>
                    {bonusCorrect && (
                      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/30 rounded-lg p-4 mb-6 inline-flex items-center">
                        <span className="text-amber-800 dark:text-amber-300 font-medium">
                          🔥 Bonus unlocked! +3 extra points
                        </span>
                      </div>
                    )}

                    <div className="w-full max-w-md p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-100 dark:border-green-900/30 mb-4">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-white/80 dark:bg-black/20 flex items-center justify-center">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-green-500"
                            />
                            <path
                              d="M7.5 12L10.5 15L16.5 9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-green-500"
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2">🎉 Module Complete! Badge Unlocked</h3>
                      <p className="text-sm text-muted-foreground">
                        You've successfully completed Module 2: Brand Values & Agreements
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-24 h-24 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6">
                      <Award className="h-12 w-12 text-orange-500" />
                    </div>
                    <p className="text-lg font-medium mb-2">You need a few more correct answers</p>
                    <p className="text-muted-foreground mb-4">
                      Your score: {score} / {questions.length - 1} points
                    </p>
                    <p className="text-muted-foreground mb-6">You need 7 correct answers to pass this module.</p>
                  </>
                )}
              </CardContent>

              <CardFooter className="flex justify-center gap-4 pt-2 pb-8">
                {passed ? (
                  <Button asChild>
                    <Link href="/academy/training-hub">
                      <Home className="h-4 w-4 mr-2" />
                      Return to CK Academy
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button variant="outline" onClick={goToContent}>
                      Review Content
                    </Button>
                    <Button onClick={resetQuiz}>Try Again</Button>
                  </>
                )}
              </CardFooter>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}

