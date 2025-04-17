"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CodeBlock } from "@/components/code-block"
import { Copy } from "lucide-react"

interface ComponentCardProps {
  title: string
  description: string
  demoType: "buttons" | "card" | "badge" | "tabs" | "tooltip" | "modal"
}

export default function ComponentCard({ title, description, demoType }: ComponentCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [showCode, setShowCode] = useState(false)

  const getCodeExample = () => {
    switch (demoType) {
      case "buttons":
        return `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex gap-2">
      <Button>Primary</Button>
      <Button variant="outline">Secondary</Button>
    </div>
  )
}`
      case "card":
        return `import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-6">
        <div className="h-20 rounded bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30"></div>
      </CardContent>
      <CardFooter className="p-6 pt-0">Interactive Card</CardFooter>
    </Card>
  )
}`
      case "badge":
        return `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="secondary">Secondary</Badge>
    </div>
  )
}`
      case "tabs":
        return `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4">
        Account settings
      </TabsContent>
      <TabsContent value="password" className="p-4">
        Password settings
      </TabsContent>
    </Tabs>
  )
}`
      case "tooltip":
        return `import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`
      case "modal":
        return `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Dialog content goes here.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}`
      default:
        return ""
    }
  }

  const renderDemo = () => {
    switch (demoType) {
      case "buttons":
        return (
          <div className="flex gap-2">
            <Button size="sm" className="bg-gradient-to-r from-green-600 to-emerald-600">
              Primary
            </Button>
            <Button size="sm" variant="outline">
              Secondary
            </Button>
          </div>
        )
      case "card":
        return (
          <Card className="w-full max-w-[200px] mx-auto hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-4">
              <div className="w-full h-20 rounded bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30"></div>
            </CardContent>
            <CardFooter className="p-4 pt-0 text-xs">Interactive Card</CardFooter>
          </Card>
        )
      case "badge":
        return (
          <div className="flex gap-2 flex-wrap justify-center">
            <Badge className="bg-gradient-to-r from-green-600 to-emerald-600">New</Badge>
            <Badge variant="outline">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
          </div>
        )
      case "tabs":
        return (
          <Tabs defaultValue="tab1" className="w-full max-w-[200px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="p-2 text-xs text-center">
              Tab content 1
            </TabsContent>
            <TabsContent value="tab2" className="p-2 text-xs text-center">
              Tab content 2
            </TabsContent>
          </Tabs>
        )
      case "tooltip":
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  Hover me
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tooltip content</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      case "modal":
        return (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Open Dialog
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">Dialog content goes here.</p>
              </div>
            </DialogContent>
          </Dialog>
        )
      default:
        return null
    }
  }

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isClicked ? "ring-2 ring-green-500" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
    >
      <CardContent className="p-0">
        <div
          className={`h-48 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 flex items-center justify-center transition-all duration-500 ${
            isHovered ? "scale-[1.02]" : ""
          }`}
        >
          <div className="relative">
            <div
              className={`w-24 h-24 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 transition-all duration-500 ${
                isHovered ? "rotate-12 scale-110" : ""
              } ${showCode ? "opacity-0" : "opacity-100"}`}
            ></div>
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isHovered || showCode ? "opacity-100" : "opacity-0"
              }`}
            >
              {renderDemo()}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-6">
        <div className="flex items-center justify-between w-full mb-2">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{title}</h3>
            <Badge variant="outline" className="text-xs animate-pulse-slow">
              New
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={(e) => {
                e.stopPropagation()
                setShowCode(!showCode)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span className="sr-only">View Code</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={(e) => {
                e.stopPropagation()
                navigator.clipboard.writeText(getCodeExample())
              }}
            >
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy Code</span>
            </Button>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>

        {showCode && (
          <div className="w-full mt-4 overflow-hidden rounded-md border">
            <CodeBlock code={getCodeExample()} language="tsx" />
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
