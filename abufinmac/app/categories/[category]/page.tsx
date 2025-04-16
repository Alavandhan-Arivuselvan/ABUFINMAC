import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from "next/navigation"

// This would be replaced with a real data fetching function
async function getCategoryPosts(category: string) {
  const allPosts = [
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
      title: "Understanding React Server Components",
      slug: "understanding-react-server-components",
      category: "Tech",
      excerpt:
        "Dive into the new React Server Components paradigm and how it changes the way we build React applications.",
      date: "2023-06-10",
    },
    {
      id: 3,
      title: "My Journey Through Southeast Asia",
      slug: "journey-through-southeast-asia",
      category: "Travel",
      excerpt: "Exploring the beautiful landscapes and rich cultures of Thailand, Vietnam, and Cambodia.",
      date: "2023-04-22",
    },
    {
      id: 4,
      title: "Hidden Gems in Europe",
      slug: "hidden-gems-europe",
      category: "Travel",
      excerpt:
        "Discover lesser-known but amazing destinations across Europe that are worth adding to your travel bucket list.",
      date: "2023-07-05",
    },
    {
      id: 5,
      title: "Mindfulness Practices for Daily Life",
      slug: "mindfulness-practices-daily-life",
      category: "Lifestyle",
      excerpt: "Simple techniques to incorporate mindfulness into your everyday routine for better mental health.",
      date: "2023-03-10",
    },
    {
      id: 6,
      title: "Creating a Sustainable Home Office",
      slug: "sustainable-home-office",
      category: "Lifestyle",
      excerpt: "Tips and ideas for setting up an eco-friendly and productive home workspace.",
      date: "2023-05-28",
    },
  ]

  if (category.toLowerCase() === "all") {
    return allPosts
  }

  return allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}

// This would be replaced with a real data fetching function
async function getCategories() {
  return [
    { name: "All", slug: "all" },
    { name: "Tech", slug: "tech" },
    { name: "Travel", slug: "travel" },
    { name: "Lifestyle", slug: "lifestyle" },
  ]
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await (params)
  const { category } = resolvedParams
  const categories = await getCategories()
  const posts = await getCategoryPosts(category)

  // Check if category exists
  const categoryExists = categories.some((cat) => cat.slug.toLowerCase() === category.toLowerCase())

  if (!categoryExists) {
    notFound()
  }

  const categoryName = categories.find((cat) => cat.slug.toLowerCase() === category.toLowerCase())?.name || category

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          {categoryName === "All" ? "All Articles" : `${categoryName} Articles`}
        </h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/categories/${cat.slug}`}>
              <Button variant={cat.slug.toLowerCase() === category.toLowerCase() ? "default" : "outline"} size="sm">
                {cat.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {posts.length > 0 ? (
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
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">No articles found</h2>
          <p className="text-muted-foreground mb-6">There are no articles in this category yet.</p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
