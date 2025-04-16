export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            Hello! I'm the author behind this personal blog. I'm passionate about technology, travel, and living a
            mindful lifestyle.
          </p>

          <p className="mb-4">
            I started this blog as a way to share my experiences, insights, and knowledge with others who share similar
            interests. Whether I'm exploring new tech trends, documenting my travels around the world, or sharing tips
            for a more balanced life, my goal is to create content that is both informative and engaging.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">My Background</h2>

          <p className="mb-4">
            With a background in technology and a love for exploration, I bring a unique perspective to the topics I
            write about. I've spent the last decade working in the tech industry, while also making time to travel and
            develop practices for maintaining balance in a fast-paced world.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Blog's Mission</h2>

          <p className="mb-4">This blog aims to:</p>

          <ul className="list-disc pl-6 mb-4">
            <li>Share practical insights about technology that can improve your daily life</li>
            <li>Provide authentic travel experiences and recommendations</li>
            <li>Offer actionable advice for living more mindfully</li>
          </ul>

          <p className="mb-4">
            I believe in quality over quantity, and each article is carefully researched and written to provide value to
            you, the reader.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Connect With Me</h2>

          <p className="mb-4">
            I love hearing from readers! If you have questions, suggestions, or just want to say hello, please don't
            hesitate to reach out through the{" "}
            <a href="/contact" className="text-primary hover:underline">
              contact page
            </a>
            .
          </p>

          <p className="mb-4">
            Thank you for visiting my blog. I hope you find something here that inspires, informs, or entertains you.
          </p>
        </div>
      </div>
    </div>
  )
}
