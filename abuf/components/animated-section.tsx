"use client"

import type React from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </section>
  )
}
