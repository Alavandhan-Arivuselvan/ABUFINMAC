import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// This would be replaced with a real data fetching function
async function getPostBySlug(slug: string) {
  const allPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      slug: "getting-started-with-nextjs",
      category: "Tech",
      date: "2023-05-15",
      content: `
        <p>Next.js has emerged as one of the most popular frameworks for building React applications. It provides a great developer experience with features like server-side rendering, static site generation, and more.</p>
        
        <h2>Why Next.js?</h2>
        
        <p>Next.js solves many common problems in React development:</p>
        
        <ul>
          <li>Server-side rendering for improved SEO and performance</li>
          <li>Automatic code splitting for faster page loads</li>
          <li>Simple client-side routing</li>
          <li>API routes for backend functionality</li>
          <li>Built-in CSS and Sass support</li>
        </ul>
        
        <h2>Getting Started</h2>
        
        <p>To create a new Next.js app, you can use the create-next-app command:</p>
        
        <pre><code>npx create-next-app@latest my-next-app</code></pre>
        
        <p>This will set up a new Next.js project with all the necessary configuration.</p>
        
        <h2>Pages and Routing</h2>
        
        <p>Next.js uses a file-system based router. Files in the pages directory automatically become routes.</p>
        
        <p>For example, pages/about.js will be accessible at /about, and pages/posts/[id].js will create dynamic routes for posts.</p>
        
        <h2>Conclusion</h2>
        
        <p>Next.js provides an excellent framework for building modern web applications with React. Its features make it easier to create performant, SEO-friendly applications with a great developer experience.</p>
      `,
    },
    {
      id: 3,
      title: "My Journey Through Southeast Asia",
      slug: "journey-through-southeast-asia",
      category: "Travel",
      date: "2023-04-22",
      content: `
        <p>Last month, I embarked on a three-week adventure through Southeast Asia, exploring Thailand, Vietnam, and Cambodia. The experience was transformative, offering a rich tapestry of cultures, cuisines, and landscapes.</p>
        
        <h2>Thailand: Land of Smiles</h2>
        
        <p>My journey began in Bangkok, a city of contrasts where ancient temples stand alongside modern skyscrapers. The Grand Palace and Wat Arun were breathtaking, their intricate details showcasing Thailand's rich cultural heritage.</p>
        
        <p>From Bangkok, I headed north to Chiang Mai, where I participated in a cooking class, learning to prepare authentic Thai dishes like Pad Thai and Green Curry. The night markets were a feast for the senses, filled with local crafts, street food, and live music.</p>
        
        <h2>Vietnam: A Culinary Paradise</h2>
        
        <p>Next, I flew to Hanoi, Vietnam's capital, characterized by its French colonial architecture and vibrant street life. The Old Quarter's narrow streets were packed with vendors selling everything from fresh produce to handcrafted souvenirs.</p>
        
        <p>A highlight of Vietnam was a two-day cruise in Ha Long Bay, where limestone karsts rise dramatically from emerald waters. Kayaking through hidden caves and swimming in secluded bays provided unforgettable moments of serenity.</p>
        
        <h2>Cambodia: Ancient Wonders</h2>
        
        <p>The final leg of my journey took me to Siem Reap, Cambodia, home to the magnificent Angkor Wat temple complex. Watching the sunrise over Angkor Wat was a spiritual experience, the ancient stones glowing golden in the early morning light.</p>
        
        <p>Beyond the temples, I visited floating villages on Tonle Sap Lake, where entire communities live on the water, adapting to the lake's dramatic seasonal changes.</p>
        
        <h2>Reflections</h2>
        
        <p>Southeast Asia taught me the value of slowing down and embracing the present moment. The warmth of the people, the richness of the cultures, and the beauty of the landscapes have left an indelible mark on my heart.</p>
        
        <p>If you're planning a trip to Southeast Asia, my advice is to allow plenty of time in each location, venture beyond the tourist hotspots, and approach each experience with an open mind and heart.</p>
      `,
    },
    {
      id: 5,
      title: "Mindfulness Practices for Daily Life",
      slug: "mindfulness-practices-daily-life",
      category: "Lifestyle",
      date: "2023-03-10",
      content: `
        <p>In our fast-paced world, finding moments of peace and presence can seem challenging. However, incorporating mindfulness into your daily routine doesn't require hours of meditation or major lifestyle changes. Here are some simple practices that can help you cultivate mindfulness throughout your day.</p>
        
        <h2>Morning Mindfulness</h2>
        
        <p>How you start your day sets the tone for what follows. Instead of immediately reaching for your phone, take a few minutes to:</p>
        
        <ul>
          <li>Focus on your breath, noticing the sensation of inhaling and exhaling</li>
          <li>Set an intention for the day</li>
          <li>Express gratitude for three things in your life</li>
        </ul>
        
        <p>This simple morning ritual can help ground you and create a sense of purpose before the day's demands begin.</p>
        
        <h2>Mindful Eating</h2>
        
        <p>Meals provide natural opportunities for mindfulness. Try these approaches:</p>
        
        <ul>
          <li>Eat without distractions (no phones, TV, or computers)</li>
          <li>Notice the colors, smells, and textures of your food</li>
          <li>Chew slowly and savor each bite</li>
          <li>Pay attention to how the food makes your body feel</li>
        </ul>
        
        <p>Mindful eating not only enhances your enjoyment of food but can also improve digestion and help prevent overeating.</p>
        
        <h2>Mindful Movement</h2>
        
        <p>Exercise doesn't have to be separate from mindfulness practice. Whether you're walking, running, or doing yoga:</p>
        
        <ul>
          <li>Notice the sensations in your body as you move</li>
          <li>Feel your feet connecting with the ground</li>
          <li>Observe your breath synchronizing with your movements</li>
          <li>Acknowledge thoughts without judgment, then return to physical sensations</li>
        </ul>
        
        <h2>Mindful Work</h2>
        
        <p>Even during busy workdays, you can incorporate mindfulness:</p>
        
        <ul>
          <li>Take short breathing breaks between tasks</li>
          <li>Single-task rather than multitask</li>
          <li>Set a gentle reminder to check in with yourself hourly</li>
          <li>Practice active listening during conversations</li>
        </ul>
        
        <h2>Evening Wind-Down</h2>
        
        <p>End your day mindfully to promote better sleep and closure:</p>
        
        <ul>
          <li>Reflect on three positive moments from your day</li>
          <li>Practice a body scan meditation before sleep</li>
          <li>Set aside digital devices at least 30 minutes before bedtime</li>
          <li>Create a simple ritual that signals to your body it's time to rest</li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>Mindfulness isn't about perfection or achieving a particular state of mind. It's about returning, again and again, to the present moment with kindness and curiosity. By incorporating these simple practices into your daily routine, you can cultivate greater awareness, reduce stress, and enhance your overall well-being.</p>
      `,
    },
  ]

  return allPosts.find((post) => post.slug === slug) || null
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await(params)
  const { slug } = resolvedParams

  if (!slug) {
    notFound()
  }

  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href={`/categories/${post.category.toLowerCase()}`}>
            <Button variant="outline" size="sm" className="mb-4">
              {post.category}
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-muted-foreground">Published on {post.date}</p>
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="border-t pt-6 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild>
              <Link href={`/categories/${post.category.toLowerCase()}`}>More {post.category} Articles</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
