"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface TemplatePreviewProps {
  title: string
  category: string
}

export default function TemplatePreview({ title, category }: TemplatePreviewProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white dark:bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <CardContent className="p-0 overflow-hidden">
        <div className="relative h-[300px] w-full">
          <Image
            src="/placeholder.svg?height=600&width=800"
            fill
            alt={`${title} template preview`}
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-105" : ""}`}
            style={isHovered ? { transformOrigin: `${mousePosition.x}% ${mousePosition.y}%` } : undefined}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link href="#" className="text-white flex items-center gap-2 group">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                View Template
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-6">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{category}</p>
        </div>
        <Badge
          variant="secondary"
          className="text-xs bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 transition-colors"
        >
          Pro
        </Badge>
      </CardFooter>
    </Card>
  )
}
