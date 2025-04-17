"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, FileText, Settings, LogOut } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import { getPosts } from "@/lib/data"
import AdminHeader from "@/components/admin-header"

export default function AdminDashboard() {
  const { logout } = useAuth()
  const router = useRouter()
  const posts = getPosts()

  const handleLogout = () => {
    logout()
    router.push("/admin/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gradient">Dashboard</h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="border-primary/20 hover:border-primary/40"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle>Total Posts</CardTitle>
              <CardDescription>All published blog posts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gradient">{posts.length}</p>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle>Categories</CardTitle>
              <CardDescription>Post categories</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gradient">3</p>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gradient">Active</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and actions</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <Button asChild className="h-24 flex flex-col items-center justify-center bg-gradient-primary">
                <Link href="/admin/posts/new">
                  <PlusCircle className="h-8 w-8 mb-2" />
                  New Post
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-24 flex flex-col items-center justify-center border-primary/20 hover:border-primary/40"
              >
                <Link href="/admin/posts">
                  <FileText className="h-8 w-8 mb-2" />
                  Manage Posts
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-24 flex flex-col items-center justify-center border-primary/20 hover:border-primary/40"
              >
                <Settings className="h-8 w-8 mb-2" />
                Settings
              </Button>
              <Button variant="secondary" className="h-24 flex flex-col items-center justify-center">
                <Link href="/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 mb-2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View Site
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Recent Posts</CardTitle>
              <CardDescription>Latest published articles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {posts.slice(0, 5).map((post) => (
                <div key={post.slug} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{post.title}</p>
                    <p className="text-sm text-muted-foreground">{post.category}</p>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="hover:bg-primary/10">
                    <Link href={`/admin/posts/edit/${post.slug}`}>Edit</Link>
                  </Button>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full border-primary/20 hover:border-primary/40">
                <Link href="/admin/posts">View All Posts</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
