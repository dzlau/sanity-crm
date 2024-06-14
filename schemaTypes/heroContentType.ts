import { defineField, defineType } from 'sanity'

export const heroContentType = defineType({
    name: 'hero_content',
    title: 'Hero Content',
    type: 'document',
    fields: [
        defineField({ name: 'value', type: 'string' }),
    ]
})