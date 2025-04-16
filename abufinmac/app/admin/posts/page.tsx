"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Search, Edit, Trash2 } from "lucide-react"

// Mock data - in a real app, this would come from an API or database
const mockPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    category: "Tech",
    date: "2023-05-15",
    status: "Published",
  },
  {
    id: 2,
    title: "Understanding React Server Components",
    slug: "understanding-react-server-components",
    category: "Tech",
    date: "2023-06-10",
    status: "Published",
  },
  {
    id: 3,
    title: "My Journey Through Southeast Asia",
    slug: "journey-through-southeast-asia",
    category: "Travel",
    date: "2023-04-22",
    status: "Published",
  },
  {
    id: 4,
    title: "Hidden Gems in Europe",
    slug: "hidden-gems-europe",
    category: "Travel",
    date: "2023-07-05",
    status: "Draft",
  },
  {
    id: 5,
    title: "Mindfulness Practices for Daily Life",
    slug: "mindfulness-practices-daily-life",
    category: "Lifestyle",
    date: "2023-03-10",
    status: "Published",
  },
  {
    id: 6,
    title: "Creating a Sustainable Home Office",
    slug: "sustainable-home-office",
    category: "Lifestyle",
    date: "2023-05-28",
    status: "Draft",
  },
]

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<typeof mockPosts>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Simulate fetching posts from an API
    setPosts(mockPosts)
  }, [])

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDelete = (id: number) => {
    // In a real app, you would call an API to delete the post
    setPosts(posts.filter((post) => post.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Manage Posts</CardTitle>
          <Button asChild>
            <Link href="/admin/posts/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Post
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.category}</TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            post.status === "Published"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}
                        >
                          {post.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button asChild size="sm" variant="outline">
                            <Link href={`/admin/posts/edit/${post.id}`}>
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Link>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-500 hover:text-red-600"
                            onClick={() => handleDelete(post.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      No posts found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
