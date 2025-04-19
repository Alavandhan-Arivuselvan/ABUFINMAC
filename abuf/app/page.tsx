import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { formatDate } from "@/lib/utils"
import { getPosts } from "@/lib/data"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { client } from '@/lib/sanity'
import { eventSlugsQuery } from '@/lib/queries'
import {urlFor} from "@/lib/sanity"
// import Link from 'next/link'

export default async function Home() {
  const posts = await client.fetch(eventSlugsQuery)
  console.log(posts[0])
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 dark:opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-500/20 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to <span className="text-gradient">ABUFINMAC</span> 
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  EMPOWERING YOUR FINANCIAL SUCCESS
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-primary">
                  <Link href="#recent-posts">Explore Articles</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary/40">
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section id="recent-posts" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recent Articles</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our latest thoughts, ideas, and insights
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {posts.map((post,i) => {
                // console.log(post,111)
                // if (post.name !== undefined)
                return(
                <Card
                  key={i}
                  className="flex flex-col overflow-hidden border border-border bg-card transition-all hover:shadow-lg"
                >
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={urlFor(post.image).url() || "/placeholder.svg"}
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground"></span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground flex-1">{post.title}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild variant="ghost" className="w-full group">
                      <Link href={`/events/${post.slug.current}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              )})}
            </div>
            <div className="flex justify-center mt-10">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}




// import { client } from '@/lib/sanity'
// import { eventSlugsQuery } from '@/lib/queries'
// import Link from 'next/link'

// export default async function HomePage() {
//   // Fetch a list of slugs or event titles
//   const events = await client.fetch(eventSlugsQuery)

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold">Events</h1>
//       <ul className="mt-4">
//         {events.map((slug: string) => (
//           <li key={slug} className="mt-2">
//             <Link href={`/events/${slug}`} className="text-blue-500 hover:underline">
//               {slug}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
//}

