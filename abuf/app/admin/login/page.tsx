"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import AdminLogin from "@/components/admin-login"

export default function AdminLoginPage() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // If already authenticated, redirect to admin dashboard
    if (isAuthenticated) {
      router.push("/admin")
    }
  }, [isAuthenticated, router])

  if (isAuthenticated) {
    return null
  }

  return <AdminLogin />
}
