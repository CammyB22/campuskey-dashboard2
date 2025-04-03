import { QuoteCard } from "@/components/quote-card"

export default function QuoteExample() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-center">CampusKey Quote Card</h1>
        <p className="text-lg text-muted-foreground text-center">
          A rotating display of our core values and principles
        </p>

        <QuoteCard />
      </div>
    </div>
  )
}

