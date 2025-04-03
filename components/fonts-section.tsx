import { Download } from "lucide-react"
import Link from "next/link"

export function FontsSection() {
  const fonts = [
    {
      name: "Gotham Light",
      weight: "300",
      description: "Light weight for large headings and delicate text",
      downloadUrl: "/fonts/Gotham-Light.zip",
      bgColor: "bg-blue-50/80 dark:bg-blue-950/30",
    },
    {
      name: "Gotham Book",
      weight: "400",
      description: "Regular weight for body text and general content",
      downloadUrl: "/fonts/Gotham-Book.zip",
      bgColor: "bg-pink-50/80 dark:bg-pink-950/30",
    },
    {
      name: "Gotham Medium",
      weight: "500",
      description: "Medium weight for subheadings and emphasized text",
      downloadUrl: "/fonts/Gotham-Medium.zip",
      bgColor: "bg-purple-50/80 dark:bg-purple-950/30",
    },
    {
      name: "Gotham Bold",
      weight: "700",
      description: "Bold weight for headings and important callouts",
      downloadUrl: "/fonts/Gotham-Bold.zip",
      bgColor: "bg-green-50/80 dark:bg-green-950/30",
    },
    {
      name: "Gotham Ultra",
      weight: "900",
      description: "Ultra weight for high-impact headlines and statements",
      downloadUrl: "/fonts/Gotham-Ultra.zip",
      bgColor: "bg-yellow-50/80 dark:bg-yellow-950/30",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Fonts Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {fonts.map((font, index) => (
          <div
            key={index}
            className={`${font.bgColor} backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px] border border-white/20 dark:border-white/5`}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4">{font.name}</h3>
                <div className="bg-white/80 dark:bg-black/30 rounded-lg p-4 mb-4">
                  <p
                    className={`text-2xl ${index === 0 ? "font-light" : index === 1 ? "font-normal" : index === 2 ? "font-medium" : index === 3 ? "font-bold" : "font-black"}`}
                  >
                    Aa Bb Cc Dd Ee
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{font.description}</p>
                <p className="text-sm font-medium">Weight: {font.weight}</p>
              </div>

              <Link
                href={font.downloadUrl}
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-red-500 hover:bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors"
              >
                <Download className="mr-2 h-4 w-4" /> Download ZIP
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Download All Section */}
      <div className="backdrop-blur-sm bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-8 shadow-sm border border-white/20 dark:border-white/5 text-center">
        <h3 className="text-2xl font-bold mb-4">Download All Gotham Fonts</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get the complete Gotham font family in a single package, including all weights and styles for consistent brand
          typography.
        </p>
        <Link
          href="/fonts/Gotham-Font-Pack.zip"
          className="inline-flex items-center justify-center rounded-md bg-red-500 hover:bg-red-600 px-6 py-3 text-base font-medium text-white transition-colors"
        >
          <Download className="mr-2 h-5 w-5" /> Download Complete Font Pack
        </Link>
      </div>
    </div>
  )
}

