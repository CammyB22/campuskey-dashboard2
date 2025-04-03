import type React from "react"
import "@/app/globals.css"
import { Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: "CampusKey Brand Bubble",
  description: "Your guide to our brand, culture, and values",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.variable}>
      <body className="font-montserrat bg-white text-gray-900 dark:bg-navy-950 dark:text-gray-50 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MainNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'