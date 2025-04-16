"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const categories = [
  { name: "Tech", slug: "tech" },
  { name: "Travel", slug: "travel" },
  { name: "Lifestyle", slug: "lifestyle" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Personal Blog
          </Link>

          {isMobile ? (
            <>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>

              {isMenuOpen && (
                <div className="fixed inset-0 top-16 z-50 bg-background p-4">
                  <nav className="flex flex-col space-y-4">
                    <Link href="/" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                      Home
                    </Link>
                    <Link href="/about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                      About
                    </Link>
                    <div className="space-y-2">
                      <div className="text-lg font-medium">Categories</div>
                      <div className="pl-4 space-y-2">
                        {categories.map((category) => (
                          <Link
                            key={category.slug}
                            href={`/categories/${category.slug}`}
                            className="block text-muted-foreground hover:text-foreground"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                      Contact
                    </Link>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <nav className="flex items-center space-x-6">
              <Link href="/" className="font-medium">
                Home
              </Link>
              <Link href="/about" className="font-medium">
                About
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="font-medium flex items-center gap-1">
                    Categories <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {categories.map((category) => (
                    <DropdownMenuItem key={category.slug} asChild>
                      <Link href={`/categories/${category.slug}`}>{category.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/contact" className="font-medium">
                Contact
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
