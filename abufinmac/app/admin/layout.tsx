"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // This is a simple mock authentication check
    // In a real application, you would check for a valid token or session
    const checkAuth = () => {
      // For demo purposes, we'll consider the user authenticated if they're not on the login page
      // In a real app, you would check for a valid token or session
      if (pathname === "/admin") {
        setIsAuthenticated(false)
      } else {
        setIsAuthenticated(true)
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [pathname])

  const handleLogout = () => {
    // In a real app, you would clear the token or session here
    router.push("/admin")
  }

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  // If on login page or not authenticated, just render the children (login form)
  if (pathname === "/admin" || !isAuthenticated) {
    return children
  }

  // If authenticated and not on login page, render the admin layout
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin/posts" className="text-xl font-bold">
                Admin Dashboard
              </Link>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 border-r hidden md:block">
          <div className="p-4">
            <nav className="space-y-2">
              <Link href="/admin/posts">
                <div
                  className={`px-3 py-2 rounded-md ${
                    pathname.startsWith("/admin/posts") ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  Posts
                </div>
              </Link>
              <Link href="/">
                <div className="px-3 py-2 rounded-md hover:bg-muted">View Site</div>
              </Link>
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
