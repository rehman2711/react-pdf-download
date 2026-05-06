"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Page() {
  const router = useRouter()

  return (
    <div className="flex h-[90vh] items-center justify-center">
      <Button className="rounded-none group" onClick={() => router.push("/inventory")}>
        Go to Your Inventory
        <span className="group-hover:translate-x-2 duration-500"><ArrowRight /></span>
      </Button>
    </div>
  )
}
