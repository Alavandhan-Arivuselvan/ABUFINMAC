import groq from 'groq'

export const eventSlugsQuery = `*[_type == "event"]{
    title,
    slug,
    image,
    category,
  }`;

export const singleEventQuery = groq`
  *[_type == "event" && slug.current == $slug][0]
`