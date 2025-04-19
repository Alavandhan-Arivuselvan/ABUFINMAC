import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'b1mtdeoc',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)