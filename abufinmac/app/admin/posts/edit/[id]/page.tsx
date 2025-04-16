"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { use } from "react"

// Mock data - in a real app, this would come from an API or database
const mockPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    category: "Tech",
    excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
    content: "<p>Next.js has emerged as one of the most popular frameworks for building React applications...</p>",
    published: true,
  },
  {
    id: 2,
    title: "Understanding React Server Components",
    slug: "understanding-react-server-components",
    category: "Tech",
    excerpt:
      "Dive into the new React Server Components paradigm and how it changes the way we build React applications.",
    content: "<p>React Server Components represent a paradigm shift in how we build React applications...</p>",
    published: true,
  },
]

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const resolvedParams = use(params)
  const postId = Number.parseInt(resolvedParams.id)

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    content: "",
    published: true,
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching post data from an API
    const post = mockPosts.find((p) => p.id === postId)

    if (post) {
      setFormData({
        title: post.title,
        slug: post.slug,
        category: post.category,
        excerpt: post.excerpt,
        content: post.content,
        published: post.published,
      })
    } else {
      // Handle post not found
      router.push("/admin/posts")
    }

    setLoading(false)
  }, [postId, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, published: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would send this data to your API
    console.log("Form submitted:", formData)

    // Redirect back to posts list
    router.push("/admin/posts")
  }

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Edit Post</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter post title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="enter-post-slug"
                required
              />
              <p className="text-sm text-muted-foreground">This will be used in the URL: /posts/your-slug</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={formData.category} onValueChange={handleSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tech">Tech</SelectItem>
                  <SelectItem value="Travel">Travel</SelectItem>
                  <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Brief summary of the post"
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your post content here..."
                rows={15}
                required
              />
              <p className="text-sm text-muted-foreground">HTML formatting is supported.</p>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="published" checked={formData.published} onCheckedChange={handleSwitchChange} />
              <Label htmlFor="published">Published</Label>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => router.push("/admin/posts")}>
              Cancel
            </Button>
            <Button type="submit">Update Post</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
