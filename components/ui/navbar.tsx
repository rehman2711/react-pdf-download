"use client"

import { ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./theme-toggle"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const router = useRouter()

  return (
    <header className="flex w-full items-center justify-center gap-4 px-4 pt-8">
      <div className="flex w-full max-w-4xl items-center justify-between rounded-none border bg-muted/30 ps-4">
        <div className="flex items-center gap-1 text-lg font-semibold">
          <button
            onClick={() => {
              router.push("/")
            }}
          >
            {" "}
            <span className="text-xl font-black">REACT - PDF</span>
          </button>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Button variant="ghost" className="rounded-none">
            SHOP
          </Button>

          <Button variant="ghost" className="rounded-none">
            ABOUT
          </Button>

          <Button variant="ghost" className="rounded-none">
            STORIES
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <div>
            <Button variant="outline" className="rounded-none" size="icon-lg">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="rounded-none" size="icon-lg">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <ModeToggle />
      </div>
    </header>
  )
}
