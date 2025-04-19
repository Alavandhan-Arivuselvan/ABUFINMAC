import {defineField, defineType} from 'sanity'

export const blogPost = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'category',
      options: {
        list: [
          { title: 'Finance', value: 'Finance' },
          { title: 'Business', value: 'Business' },
          { title: 'Accounting', value: 'Accounting' },
        ],
        layout: 'dropdown', 
      }}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,  
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')   
            .replace(/[^\w\-]+/g, '') 
            .slice(0, 96),
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'sections',
      title: 'Subsections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'subheading',
              title: 'Subheading',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{ type: 'block' }], 
            },
          ],
        },
      ],
    })
  ],
})