// app/events/[slug]/page.tsx
import { client } from '@/lib/sanity'
import { singleEventQuery } from '@/lib/queries'
import EventPage from '@/components/blog-input'

interface Event {
  name: string
  category: string
  image: { asset: { url: string } }
  sections: Array<{ subheading: string, content: any }>
}

export default async function EventPageWrapper({ params }: { params: { slug: string } }) {
  const event = await client.fetch(singleEventQuery, {
    slug: params.slug,
  })

  return <EventPage event={event} />
}


