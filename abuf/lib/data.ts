// Mock data store for blog posts
let posts = [
  {
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    date: "2023-04-15",
    category: "Tech",
    author: "Jane Doe",
    image: "/placeholder.svg?height=600&width=800",
    excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
    content: `
# Getting Started with Next.js

Next.js is a React framework that enables functionality such as server-side rendering and static site generation.

## Why Next.js?

Next.js provides a great developer experience with features like:

- **Server-side rendering**
- **Static site generation**
- **API routes**
- **File-based routing**
- **Built-in CSS support**

## Installation

To create a new Next.js app, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## File-based Routing

Next.js has a file-system based router built on the concept of pages.

\`\`\`jsx
// pages/index.js
export default function Home() {
  return <h1>Hello, Next.js!</h1>
}
\`\`\`

## Data Fetching

Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.

\`\`\`jsx
// Static Generation
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()
  
  return {
    props: { data }
  }
}
\`\`\`

## Conclusion

Next.js is a powerful framework that makes building React applications easier and more efficient.
`,
  },
  {
    title: "Exploring the Swiss Alps",
    slug: "exploring-the-swiss-alps",
    date: "2023-05-20",
    category: "Travel",
    author: "John Smith",
    image: "/placeholder.svg?height=600&width=800",
    excerpt: "A journey through the breathtaking landscapes of the Swiss Alps, from Zermatt to Interlaken.",
    content: `
# Exploring the Swiss Alps

The Swiss Alps offer some of the most stunning mountain scenery in the world.

## Best Time to Visit

The best time to visit depends on what you want to do:

- **Summer (June-August)**: Hiking and outdoor activities
- **Winter (December-March)**: Skiing and winter sports
- **Spring/Fall**: Fewer crowds and beautiful landscapes

## Top Destinations

### Zermatt

Home to the iconic Matterhorn, Zermatt is a car-free village with charming streets and excellent skiing.

### Interlaken

Located between two lakes, Interlaken is the adventure capital of Switzerland.

### Lucerne

A beautiful city with a well-preserved medieval core and stunning lake views.

## Getting Around

Switzerland has an excellent public transportation system. Consider getting a Swiss Travel Pass for unlimited travel.

## Must-Try Experiences

1. Ride the Glacier Express
2. Hike the Alpine trails
3. Try authentic Swiss fondue
4. Visit a chocolate factory

## Photography Tips

The Swiss Alps offer incredible photo opportunities. Here are some tips:

\`\`\`
- Golden hour lighting is magical on the mountains
- Include lakes in foregrounds for reflections
- Use a polarizing filter to enhance blue skies
- Don't forget to capture the charming villages
\`\`\`

## Conclusion

The Swiss Alps are a must-visit destination for nature lovers and adventure seekers alike.
`,
  },
  {
    title: "Mindfulness Practices for Daily Life",
    slug: "mindfulness-practices-for-daily-life",
    date: "2023-06-10",
    category: "Lifestyle",
    author: "Alex Johnson",
    image: "/placeholder.svg?height=600&width=800",
    excerpt: "Simple mindfulness techniques to reduce stress and increase presence in your everyday routine.",
    content: `
# Mindfulness Practices for Daily Life

Mindfulness is the practice of being fully present and engaged in the moment.

## Benefits of Mindfulness

Research has shown that mindfulness can:

- Reduce stress and anxiety
- Improve focus and concentration
- Enhance emotional regulation
- Promote better sleep
- Boost immune function

## Morning Mindfulness Routine

Starting your day mindfully can set a positive tone:

1. **Mindful breathing**: Take 5 deep breaths before getting out of bed
2. **Body scan**: Notice sensations in your body without judgment
3. **Gratitude practice**: Think of three things you're grateful for

## Mindful Eating

\`\`\`
Steps for mindful eating:
1. Look at your food and appreciate its colors and textures
2. Smell your food and notice the aromas
3. Take small bites and chew slowly
4. Notice the flavors and textures in your mouth
5. Put down your utensils between bites
\`\`\`

## Mindfulness at Work

### Mindful Transitions

Take a few mindful breaths between tasks to reset your attention.

### Mindful Listening

Practice giving your full attention when others are speaking.

## Evening Wind-Down

End your day with these practices:

- **Digital sunset**: Turn off screens 1-2 hours before bed
- **Gratitude journal**: Write down positive experiences from your day
- **Body scan meditation**: Progressively relax your body from head to toe

## Resources for Further Practice

- Meditation apps like Headspace and Calm
- Books by Jon Kabat-Zinn and Thich Nhat Hanh
- Local mindfulness groups or classes

## Conclusion

Mindfulness doesn't require hours of meditation. Small moments of presence throughout your day can transform your experience of life.
`,
  },
  {
    title: "Understanding Blockchain Technology",
    slug: "understanding-blockchain-technology",
    date: "2023-07-05",
    category: "Tech",
    author: "Michael Chen",
    image: "/placeholder.svg?height=600&width=800",
    excerpt:
      "A beginner's guide to blockchain technology, its applications, and potential impact on various industries.",
    content: `
# Understanding Blockchain Technology

Blockchain is a distributed ledger technology that enables secure, transparent, and immutable record-keeping.

## How Blockchain Works

At its core, blockchain consists of:

1. **Blocks**: Collections of data
2. **Chain**: The blocks are linked using cryptography
3. **Consensus**: Network participants validate transactions
4. **Decentralization**: No single point of control

## Key Features

### Immutability

Once data is recorded on the blockchain, it cannot be altered without consensus.

### Transparency

All transactions are visible to network participants.

### Security

\`\`\`
Blockchain security features:
- Cryptographic hashing
- Distributed consensus
- Public and private keys
- No single point of failure
\`\`\`

## Applications Beyond Cryptocurrency

While blockchain is known for powering Bitcoin, its applications extend to:

- **Supply chain management**
- **Healthcare records**
- **Voting systems**
- **Smart contracts**
- **Digital identity**

## Smart Contracts

Smart contracts are self-executing contracts with the terms directly written into code.

\`\`\`javascript
// Simple smart contract example (Solidity)
contract SimpleStorage {
    uint storedData;
    
    function set(uint x) public {
        storedData = x;
    }
    
    function get() public view returns (uint) {
        return storedData;
    }
}
\`\`\`

## Challenges and Limitations

- **Scalability**: Many blockchains have limited transaction throughput
- **Energy consumption**: Proof of Work consensus is resource-intensive
- **Regulatory uncertainty**: Legal frameworks are still evolving
- **Technical complexity**: High barrier to entry for development

## The Future of Blockchain

Emerging trends include:

- Layer 2 scaling solutions
- Interoperability between blockchains
- Integration with IoT and AI
- Central Bank Digital Currencies (CBDCs)

## Conclusion

Blockchain technology has the potential to transform industries by enabling trust, transparency, and efficiency in digital transactions.
`,
  },
  {
    title: "Sustainable Travel: Reducing Your Carbon Footprint",
    slug: "sustainable-travel-reducing-carbon-footprint",
    date: "2023-08-12",
    category: "Travel",
    author: "Emma Wilson",
    image: "/placeholder.svg?height=600&width=800",
    excerpt:
      "Practical tips for traveling more sustainably while still enjoying meaningful experiences around the world.",
    content: `
# Sustainable Travel: Reducing Your Carbon Footprint

Travel broadens our horizons but can have significant environmental impacts. Here's how to travel more sustainably.

## Understanding Your Travel Footprint

Different aspects of travel contribute to your carbon footprint:

- **Transportation**: Typically the largest contributor
- **Accommodation**: Energy and water usage
- **Activities**: Impact on local environments
- **Food and shopping**: Consumption patterns

## Sustainable Transportation

### Air Travel

\`\`\`
Tips for reducing air travel impact:
- Fly direct when possible (takeoffs and landings use the most fuel)
- Choose newer, more efficient aircraft
- Consider carbon offset programs
- Pack lighter to reduce fuel consumption
\`\`\`

### Ground Transportation

- Use public transportation in destinations
- Choose trains over short-haul flights
- Consider electric vehicle rentals
- Explore bike-sharing programs

## Eco-Friendly Accommodations

Look for properties that:

1. Have recognized sustainability certifications
2. Implement water and energy conservation measures
3. Reduce single-use plastics
4. Support local communities
5. Source food locally

## Responsible Tourism Practices

### Supporting Local Communities

- Stay in locally-owned accommodations
- Eat at local restaurants
- Purchase souvenirs directly from artisans
- Respect cultural norms and traditions

### Protecting Natural Environments

- Stay on designated trails
- Follow "leave no trace" principles
- Avoid wildlife attractions that exploit animals
- Choose tour operators with strong environmental policies

## Packing for Sustainable Travel

Essential items include:

- Reusable water bottle
- Tote bag for shopping
- Reef-safe sunscreen
- Bamboo utensils
- Digital maps instead of paper

## Conclusion

Sustainable travel isn't about perfection—it's about making mindful choices that reduce your impact while still enjoying meaningful travel experiences.
`,
  },
  {
    title: "Plant-Based Cooking: Getting Started",
    slug: "plant-based-cooking-getting-started",
    date: "2023-09-18",
    category: "Lifestyle",
    author: "Sam Rodriguez",
    image: "/placeholder.svg?height=600&width=800",
    excerpt:
      "An introduction to plant-based cooking with simple recipes, essential ingredients, and tips for transitioning to a more plant-forward diet.",
    content: `
# Plant-Based Cooking: Getting Started

Plant-based cooking focuses on ingredients derived from plants, including vegetables, fruits, whole grains, legumes, nuts, and seeds.

## Benefits of Plant-Based Eating

Research suggests plant-based diets can:

- Lower risk of heart disease
- Reduce inflammation
- Support healthy weight management
- Decrease environmental impact
- Reduce food costs

## Stocking Your Pantry

### Essential Ingredients

\`\`\`
Plant-based pantry staples:
- Whole grains: Brown rice, quinoa, oats, farro
- Legumes: Lentils, chickpeas, black beans, tofu
- Nuts and seeds: Almonds, walnuts, chia, flax
- Healthy fats: Olive oil, avocado, tahini
- Spices: Cumin, turmeric, paprika, nutritional yeast
\`\`\`

## Simple Beginner Recipes

### Breakfast: Overnight Oats

**Ingredients:**
- 1/2 cup rolled oats
- 1 tablespoon chia seeds
- 1 cup plant milk
- 1 tablespoon maple syrup
- Toppings: berries, banana, nuts

**Instructions:**
1. Mix all ingredients in a jar
2. Refrigerate overnight
3. Add toppings before serving

### Lunch: Buddha Bowl

Build a balanced bowl with:
1. Base: Quinoa or brown rice
2. Protein: Roasted chickpeas or tofu
3. Vegetables: Roasted and raw options
4. Sauce: Tahini dressing or avocado

## Plant-Based Protein Sources

Many people worry about protein when eating more plants. Good sources include:

- Legumes (15-18g per cup)
- Tofu and tempeh (20g per cup)
- Seitan (25g per 3.5oz)
- Quinoa (8g per cup)
- Nuts and seeds (5-7g per 1/4 cup)

## Veganizing Favorite Recipes

### Dairy Alternatives

- Milk: Oat, almond, soy
- Cheese: Nutritional yeast, cashew-based options
- Butter: Coconut oil, plant-based spreads

### Egg Alternatives

- Baking: Flax eggs (1 Tbsp ground flax + 3 Tbsp water)
- Scrambles: Tofu with turmeric and black salt

## Conclusion

Start with a few plant-based meals per week and gradually increase as you discover favorites. Focus on adding plants rather than removing foods for a sustainable approach.
`,
  },
]

// Get all posts
export function getPosts() {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get post by slug
export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}

// Get related posts
export function getRelatedPosts(category: string, currentSlug: string) {
  return posts
    .filter((post) => post.category === category && post.slug !== currentSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
}

// Save post (create or update)
export function savePost(postData: any, oldSlug: string | null = null) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      if (oldSlug) {
        // Update existing post
        posts = posts.map((post) => {
          if (post.slug === oldSlug) {
            return { ...postData }
          }
          return post
        })
      } else {
        // Create new post
        posts.push({ ...postData })
      }
      resolve()
    }, 500) // Simulate API delay
  })
}

// Delete post
export function deletePost(slug: string) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      posts = posts.filter((post) => post.slug !== slug)
      resolve()
    }, 500) // Simulate API delay
  })
}
