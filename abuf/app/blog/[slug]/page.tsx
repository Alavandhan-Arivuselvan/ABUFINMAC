"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin } from "lucide-react"
import { formatDate } from "@/lib/utils"
import { getPostBySlug, getRelatedPosts } from "@/lib/data"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import TableOfContents from "@/components/table-of-contents"
import MarkdownRenderer from "@/components/markdown-renderer"

export default function BlogPost() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    if (params.slug) {
      const currentPost = getPostBySlug(params.slug as string)
      if (currentPost) {
        setPost(currentPost)
        setRelatedPosts(getRelatedPosts(currentPost.category, currentPost.slug))
      } else {
        router.push("/blog")
      }
    }
  }, [params.slug, router])

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading...</p>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const handleShare = () => {
    setShowShareMenu(!showShareMenu)
  }

  const handleSave = () => {
    setIsSaved(!isSaved)
  }

  // Update the blog post page to be more visually appealing
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="container px-4 md:px-6 py-6 md:py-12 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Button asChild variant="ghost" size="sm" className="hover:bg-primary/10">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Articles
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 transition-colors">
                {post.category}
              </Badge>
              <span className="text-sm text-muted-foreground">{formatDate(post.date)}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">{post.title}</h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-primary flex items-center justify-center text-white font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{post.author}</p>
                  <p className="text-xs text-muted-foreground">Editor</p>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <div className="relative">
                  <Button variant="ghost" size="icon" onClick={handleShare} className="hover:bg-primary/10">
                    <Share2 className="h-5 w-5" />
                  </Button>
                  {showShareMenu && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-card border border-border z-10 animate-in">
                      <div className="py-1">
                        <Button variant="ghost" className="w-full justify-start px-4 py-2 text-sm">
                          <Facebook className="mr-2 h-4 w-4" />
                          Share on Facebook
                        </Button>
                        <Button variant="ghost" className="w-full justify-start px-4 py-2 text-sm">
                          <Twitter className="mr-2 h-4 w-4" />
                          Share on Twitter
                        </Button>
                        <Button variant="ghost" className="w-full justify-start px-4 py-2 text-sm">
                          <Linkedin className="mr-2 h-4 w-4" />
                          Share on LinkedIn
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleSave}
                  className={`hover:bg-primary/10 ${isSaved ? "text-primary" : ""}`}
                >
                  <Bookmark className={`h-5 w-5 ${isSaved ? "fill-current" : ""}`} />
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden mb-8 shadow-lg">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <div className="prose dark:prose-invert">
                <MarkdownRenderer content={post.content} />
              </div>

              <Separator className="my-8" />

              <div className="flex items-center justify-between">
                <Button asChild variant="outline" className="border-primary/20 hover:border-primary/40">
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Articles
                  </Link>
                </Button>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={handleShare} className="hover:bg-primary/10">
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleSave}
                    className={`hover:bg-primary/10 ${isSaved ? "text-primary" : ""}`}
                  >
                    <Bookmark className={`h-5 w-5 ${isSaved ? "fill-current" : ""}`} />
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:w-1/4">
              <div className="sticky top-20">
                <TableOfContents content={post.content} />

                {relatedPosts.length > 0 && (
                  <div className="mt-8 p-4 rounded-lg border bg-card">
                    <h3 className="text-lg font-bold mb-4">More {post.category} Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.slug} className="group">
                          <Link
                            href={`/blog/${relatedPost.slug}`}
                            className="text-sm font-medium group-hover:text-primary transition-colors"
                          >
                            {relatedPost.title}
                          </Link>
                          <p className="text-xs text-muted-foreground">{formatDate(relatedPost.date)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
