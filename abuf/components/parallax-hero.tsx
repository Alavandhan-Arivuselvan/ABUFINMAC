"use client"

import { useEffect, useState } from "react"

export default function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating elements that move on scroll */}
      <div
        className="absolute w-32 h-32 rounded-full bg-green-500/10 dark:bg-green-500/5 blur-xl"
        style={{
          top: "20%",
          left: "10%",
          transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.05}px)`,
        }}
      ></div>
      <div
        className="absolute w-40 h-40 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-xl"
        style={{
          top: "60%",
          right: "15%",
          transform: `translate(${scrollY * -0.08}px, ${scrollY * 0.03}px)`,
        }}
      ></div>
      <div
        className="absolute w-24 h-24 rounded-full bg-green-500/10 dark:bg-green-500/5 blur-xl"
        style={{
          top: "30%",
          right: "25%",
          transform: `translate(${scrollY * -0.06}px, ${scrollY * -0.04}px)`,
        }}
      ></div>
      <div
        className="absolute w-36 h-36 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-xl"
        style={{
          top: "70%",
          left: "25%",
          transform: `translate(${scrollY * 0.07}px, ${scrollY * 0.02}px)`,
        }}
      ></div>
    </div>
  )
}
