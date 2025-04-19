"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/theme-toggle"
import Image from "next/image"
export default function AdminHeader() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/admin",
      label: "Dashboard",
      active: pathname === "/admin",
    },
    {
      href: "/admin/posts",
      label: "Posts",
      active: pathname === "/admin/posts" || pathname.startsWith("/admin/posts/"),
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="flex items-center space-x-2">
                 <Image src={"/logo.png"} 
                          alt="logo"
                          className="mb-2"
                          width={70}
                          height={30}/>            
                        <span className="font-bold text-xl ">ABUFINMAC</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  route.active ? "text-primary" : "text-muted-foreground",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/" target="_blank" className="text-sm text-muted-foreground hover:text-primary">
            View Site
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
