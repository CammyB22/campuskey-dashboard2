"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "Brand Guidelines", href: "/brand-guidelines-grid" },
  { name: "CK Academy", href: "/academy" },
  { name: "Assets", href: "/brand-assets" },
  { name: "Podcasts", href: "/podcasts" },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:bg-navy-900/80 dark:supports-[backdrop-filter]:bg-navy-900/60 dark:border-navy-800 transition-colors duration-300">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 transition-colors hover:text-primary font-gotham">
            <span className="font-bold text-xl tracking-tight">CampusKey Core</span>
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 font-gotham">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  pathname === item.href
                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                    : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

