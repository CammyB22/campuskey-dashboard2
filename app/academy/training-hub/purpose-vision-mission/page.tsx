"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Award, ChevronRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function PurposeVisionMission() {
  // Quiz state
  const [activeSection, setActiveSection] = useState<"intro" | "quiz" | "results">("intro")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [bonusAnswer, setBonusAnswer] = useState("")
  const [bonusCorrect, setBonusCorrect] = useState(false)
  const [bonusSubmitted, setBonusSubmitted] = useState(false)

  // Refs for scrolling
  const quizSectionRef = useRef<HTMLDivElement>(null)
  const resultsSectionRef = useRef<HTMLDivElement>(null)

  // Quiz questions
  const questions = [
    {
      question: "What is CampusKey's core purpose as a brand?",
      options: [
        "To provide affordable student housing",
        "To create a lifestyle experience for students",
        "To maximize profits for shareholders",
        "To build the most modern student accommodations",
      ],
      correctAnswer: 1,
      feedback:
        "CampusKey's core purpose is to create a lifestyle experience that goes beyond just providing accommodation.",
    },
    {
      question: "What does the CK vision aim to create?",
      options: [
        "The most affordable student housing",
        "The most luxurious student housing",
        "A community where students feel they belong",
        "The largest student housing company",
      ],
      correctAnswer: 2,
      feedback: "CampusKey's vision aims to create vibrant communities where students feel they belong and can thrive.",
    },
    {
      question: "What word best describes CampusKey's long-term ambition?",
      options: ["Affordability", "Expansion", "Transformation", "Profitability"],
      correctAnswer: 2,
      feedback:
        "Transformation best describes CampusKey's ambition - transforming student living experiences and creating spaces where students can transform their futures.",
    },
    {
      question: "CampusKey believes in 'Living the Brand.' What does that mean?",
      options: [
        "All staff must live in CampusKey properties",
        "Team members embody brand values in their daily work",
        "Marketing should focus on lifestyle imagery",
        "Students must follow strict brand guidelines",
      ],
      correctAnswer: 1,
      feedback: "Living the Brand means team members embody the brand values in their daily work and interactions.",
    },
    {
      question: "True or False: CampusKey's mission is to be the cheapest option in student housing.",
      options: ["True", "False"],
      correctAnswer: 1,
      feedback:
        "False. CampusKey's mission is focused on quality, community, and experience rather than being the cheapest option.",
    },
    {
      question: "What emotion is central to CampusKey's purpose?",
      options: ["Exclusivity", "Belonging", "Competition", "Independence"],
      correctAnswer: 1,
      feedback:
        "Belonging is central to CampusKey's purpose - creating spaces where students feel they belong and can thrive together.",
    },
    {
      question: "How is the CampusKey vision reflected in team interactions?",
      options: [
        "By focusing only on business metrics",
        "By treating each other with the same care expected for students",
        "By maintaining strict hierarchies",
        "By working independently to maximize efficiency",
      ],
      correctAnswer: 1,
      difficulty: "hard",
      feedback:
        "The CampusKey vision is reflected in team interactions by treating each other with the same care and respect that we expect team members to show to students.",
    },
    {
      question: "Why does CampusKey call it a 'lifestyle' rather than just accommodation?",
      options: [
        "It's just marketing language",
        "Because the buildings have luxury features",
        "Because we provide a holistic experience beyond just a place to sleep",
        "To justify higher prices",
      ],
      correctAnswer: 2,
      difficulty: "hard",
      feedback:
        "CampusKey uses 'lifestyle' because we provide a holistic experience that encompasses community, support, facilities, and programming beyond just a place to sleep.",
    },
    {
      question: "How should the purpose affect decision-making in daily work?",
      options: [
        "It shouldn't - daily decisions should focus on efficiency",
        "By prioritizing decisions that enhance student experience and community",
        "By focusing only on decisions that increase revenue",
        "By making decisions that reduce operational costs",
      ],
      correctAnswer: 1,
      difficulty: "hard",
      feedback:
        "The purpose should guide daily decision-making by prioritizing choices that enhance student experience and strengthen community.",
    },
    {
      question: "Which statement best captures CampusKey's mission?",
      options: [
        "To provide the most affordable student housing in every market",
        "To maximize returns for investors through strategic growth",
        "To create spaces where students can live their best lives and reach their full potential",
        "To build the most modern student accommodations with cutting-edge technology",
      ],
      correctAnswer: 2,
      difficulty: "hard",
      feedback:
        "CampusKey's mission is to create spaces where students can live their best lives and reach their full potential.",
    },
    {
      question:
        "Bonus Question: Describe how a new team member should interpret CampusKey's mission in their own words.",
      type: "text",
      difficulty: "bonus",
      correctAnswerCheck: (answer: string) => {
        const keywords = [
          "community",
          "experience",
          "lifestyle",
          "belonging",
          "potential",
          "thrive",
          "support",
          "growth",
        ]
        // Check if the answer contains at least 3 keywords and is at least 20 characters long
        return answer.length >= 20 && keywords.filter((keyword) => answer.toLowerCase().includes(keyword)).length >= 3
      },
      feedback:
        "A good interpretation includes key concepts like community, belonging, lifestyle experience, and helping students thrive and reach their potential.",
    },
  ]

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
      localStorage.setItem("ck_module1_complete", "true")
      localStorage.setItem("ck_module1_points", totalPoints.toString())
    }
  }, [activeSection, passed, bonusCorrect])

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
          </div>

          {/* Module Introduction */}
          <section
            className={`space-y-8 transition-opacity duration-500 ${activeSection === "intro" ? "opacity-100" : "opacity-70"}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-950/30 text-pink-800 dark:text-pink-300 text-sm font-medium">
                Module 1
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Purpose, Vision & Mission</h1>
              <p className="text-xl text-muted-foreground">Why we exist, what we believe, and where we're going.</p>
            </div>

            <Card className="bg-white/80 dark:bg-black/20 backdrop-blur-sm border shadow-sm overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-pink-500 to-purple-500"></div>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  At CampusKey, we don't just provide accommodation — we create a lifestyle experience rooted in
                  purpose. Our vision is bold, our mission is intentional, and every team member helps us bring it to
                  life.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end pt-2 pb-6">
                <Button onClick={startQuiz} className="gap-2">
                  Begin Quiz <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </section>

          {/* Quiz Section */}
          <section
            ref={quizSectionRef}
            id="quiz"
            className={`space-y-8 transition-opacity duration-500 ${activeSection === "quiz" ? "opacity-100" : "opacity-70"}`}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Module Quiz</h2>
              <p className="text-muted-foreground">Test your knowledge of CampusKey's purpose, vision, and mission.</p>
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
                          {isCorrect ? "Correct!" : "Incorrect"}
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
                See how well you understand CampusKey's purpose, vision, and mission.
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
                        🎉 You passed! You've earned 10 points.
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
                      <h3 className="text-lg font-bold mb-2">Module Complete</h3>
                      <p className="text-sm text-muted-foreground">
                        You've successfully completed Module 1: Purpose, Vision & Mission
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
                    <Button variant="outline" onClick={resetQuiz}>
                      Try Again
                    </Button>
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

