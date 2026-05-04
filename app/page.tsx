"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Page() {
  const router = useRouter()

  return (
    <div className="flex h-[90vh] items-center justify-center">
      <Button className="rounded-none" onClick={() => router.push("/inventory")}>
        Go to Your Inventory 
      </Button>
    </div>
  )
}
