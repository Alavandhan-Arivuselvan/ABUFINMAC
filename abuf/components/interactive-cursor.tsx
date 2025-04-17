"use client"

import { useEffect, useState, useRef } from "react"

export default function InteractiveCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current && cursorRingRef.current) {
        // Use transform instead of left/top for better performance
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        cursorRingRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleLinkHoverIn = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON" ||
        (e.target as HTMLElement).closest("a") ||
        (e.target as HTMLElement).closest("button")
      ) {
        setLinkHovered(true)
      }
    }

    const handleLinkHoverOut = () => {
      setLinkHovered(false)
    }

    const handleMouseLeave = () => {
      setHidden(true)
    }

    document.addEventListener("mousemove", updatePosition, { passive: true })
    document.addEventListener("mouseenter", updatePosition, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleLinkHoverIn)
    document.addEventListener("mouseout", handleLinkHoverOut)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseenter", updatePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleLinkHoverIn)
      document.removeEventListener("mouseout", handleLinkHoverOut)
    }
  }, [])

  if (typeof window === "undefined") return null

  // Only show on desktop
  if (window.innerWidth < 1024) return null

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed z-50 pointer-events-none transition-opacity duration-300 will-change-transform ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: 0,
          top: 0,
          transform: "translate(0px, 0px)",
        }}
      >
        <div
          className={`relative -left-3 -top-3 rounded-full mix-blend-difference transition-all duration-200 ${
            clicked ? "bg-white/70 w-5 h-5" : linkHovered ? "bg-white w-8 h-8" : "bg-white w-6 h-6"
          }`}
        ></div>
      </div>
      <div
        ref={cursorRingRef}
        className={`fixed z-50 pointer-events-none transition-opacity duration-300 will-change-transform ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: 0,
          top: 0,
          transform: "translate(0px, 0px)",
          marginLeft: "-25px",
          marginTop: "-25px",
        }}
      >
        <div
          className={`rounded-full border border-purple-500/30 transition-all duration-300 ${
            linkHovered ? "w-20 h-20" : "w-12 h-12"
          }`}
        ></div>
      </div>
    </>
  )
}
