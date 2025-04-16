import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

async function getRecentPosts() {
  // This would be replaced with a real data fetching function
  return [
    {
      id: 1,
      title: "Getting Started with Next.js",
      slug: "getting-started-with-nextjs",
      category: "Tech",
      excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
      date: "2023-05-15",
    },
    {
      id: 2,
      title: "My Journey Through Southeast Asia",
      slug: "journey-through-southeast-asia",
      category: "Travel",
      excerpt: "Exploring the beautiful landscapes and rich cultures of Thailand, Vietnam, and Cambodia.",
      date: "2023-04-22",
    },
    {
      id: 3,
      title: "Mindfulness Practices for Daily Life",
      slug: "mindfulness-practices-daily-life",
      category: "Lifestyle",
      excerpt: "Simple techniques to incorporate mindfulness into your everyday routine for better mental health.",
      date: "2023-03-10",
    },
  ]
}

export default async function Home() {
  const posts = await getRecentPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing thoughts, experiences, and insights on technology, travel, and mindful living.
          </p>
        </div>
        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link href="/categories/all">Browse All Articles</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Recent Articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">
                  {post.date} • {post.category}
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/posts/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/categories/all">View All Posts</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
