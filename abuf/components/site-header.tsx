"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Search } from 'lucide-react';
import { useAuth } from "@/components/auth-provider"
import ThemeToggle from "@/components/theme-toggle"
import Image from "next/image";
export default function SiteHeader() {
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/blog",
      label: "Blog",
      active: pathname === "/blog" || pathname.startsWith("/blog/"),
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
  ]

  return (
    <header className="sticky top-0 z-40  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16  justify-between">
        <div className="flex items-center  gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={"/logo.png"} 
              alt="logo"
              className="mb-2"
              width={70}
              height={30}/>            
            <span className="font-bold text-xl ">ABUFINMAC</span>
          </Link>
        </div>
        <input placeholder=" search" type="text" className="bg-white absolute right-[570px] top-4 h-1/2 w-[300px] rounded-lg text-black" ></input>
        <div className="absolute right-[525px] top-4 cursor-pointer rounded-lg  p-1 dark:bg-gray-900 bg-slate-100">
       <Search size={25} className=""/></div>
        <nav className="hidden md:flex items-center gap-6 mr-5">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary relative group",
                route.active ? "text-primary" : "text-muted-foreground",
              )}
            >
              {route.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full",
                  route.active ? "w-full" : "w-0",
                )}
              ></span>
            </Link>
          ))}
          {isAuthenticated && (
            <Link
              href="/admin"
              className="text-lg font-medium transition-colors hover:text-primary text-muted-foreground relative group"
            >
              Dashboard
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
          <ThemeToggle />
          <Button asChild variant="outline" size="lg" className="bg-gradient-primary rounded-full">
                  <Link href="">MEET </Link>
          </Button>
          

        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" className="mr-1 mt-2" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    route.active ? "text-primary" : "text-muted-foreground",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              {isAuthenticated && (
                <Link
                  href="/admin"
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              )}
              <div className="flex items-center">
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
