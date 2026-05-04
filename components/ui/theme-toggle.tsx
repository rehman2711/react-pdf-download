"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Github } from "@/components/ui/github"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex gap-2">
      <Link
        href="https://github.com/rehman2711/react-pdf-download.git"
        target="blank"
      >
        <Button variant="outline" size="icon-lg" className="rounded-none">
          <Github className="" />
        </Button>
      </Link>

      <Button
        variant="outline"
        size="icon-lg"
        onClick={toggleTheme}
        className="rounded-none"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:scale-0 dark:rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
