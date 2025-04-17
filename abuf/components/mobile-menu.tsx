"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ThemeToggle from "@/components/theme-toggle"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500"></div>
              <span className="font-bold text-xl">NxWIND</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <nav className="flex flex-col gap-4">
            <Link
              href="#components"
              className="px-2 py-1 text-lg font-medium hover:text-green-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Components
            </Link>
            <Link
              href="#templates"
              className="px-2 py-1 text-lg font-medium hover:text-green-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Templates
            </Link>
            <Link
              href="#"
              className="px-2 py-1 text-lg font-medium hover:text-green-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="#"
              className="px-2 py-1 text-lg font-medium hover:text-green-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
          </nav>

          <div className="mt-auto space-y-4">
            <Button variant="outline" className="w-full gap-2 justify-center">
              <Github className="h-4 w-4" />
              <span>Star on GitHub</span>
            </Button>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Toggle theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
