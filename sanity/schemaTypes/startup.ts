import {defineType, defineField} from 'sanity';

export const startup = defineType({
  name: 'startup',
  title: 'Startup',
  type: 'document',
  fields: [
    defineField({
        name: 'titlt',
        type: 'string',
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: {
            source: 'title',
        }
    }),
    defineField({
        name: 'author',
        type: 'reference',
        to: {type: 'author'},
    }),
    defineField({
        name: 'views',
        type: 'number',
    }),
    defineField({
        name: 'description',
        type: 'text',
    }),
    defineField({
        name: 'category',
        type: 'string',
        validation: (Rule) => Rule.min(1).max(20).required().error('A category is required and should be less than 20 characters'),
    }),
    defineField({
        name: 'image',
        type: 'url',
        validation: (Rule) => Rule.required()
    }),
    defineField({
        name: 'pitch',
        type: 'markdown',
    }),
  ],
})