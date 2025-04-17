"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import AdminPostEditor from "@/components/admin-post-editor"
import { getPostBySlug } from "@/lib/data"

export default function AdminEditPostPage() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const params = useParams()
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    // If not authenticated, redirect to admin login
    if (!isAuthenticated) {
      router.push("/admin/login")
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    if (params.slug) {
      const currentPost = getPostBySlug(params.slug as string)
      if (currentPost) {
        setPost(currentPost)
      } else {
        router.push("/admin/posts")
      }
    }
  }, [params.slug, router])

  if (!isAuthenticated || !post) {
    return null
  }

  return <AdminPostEditor post={post} />
}
