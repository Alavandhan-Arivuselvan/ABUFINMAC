import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { formatDate } from "@/lib/utils"
import { getPosts } from "@/lib/data"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function BlogPage() {
  const posts = getPosts()
  let items=[{key:1,name:"all"},
    {key:2,name:"Finance"},
    {key:3,name:"Management"},
    {key:4,name:"Taxation"}
  ]
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 dark:opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-500/20 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
                  All Articles
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Browse our complete collection of articles
                </p>
              </div>
            </div>
            <div className="flex gap-2 mb-1">
              {items.map((e)=>(<Button  variant="ghost" key={e.key} className="dark:bg-slate-950 bg-slate-100 hover:bg-slate-200  dark:hover:bg-slate-800">{e.name}</Button>))}
              
              
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card
                  key={post.slug}
                  className="flex flex-col overflow-hidden border border-border bg-card transition-all hover:shadow-lg card-hover"
                >
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs bg-primary/10 hover:bg-primary/20 transition-colors">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground flex-1">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild variant="ghost" className="w-full group">
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
