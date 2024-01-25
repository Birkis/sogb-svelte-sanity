
import {defineField, defineType} from 'sanity'
import {
  DocumentTextIcon,
  DashboardIcon,
  SplitVerticalIcon,
  PlayIcon,
  HeartIcon,
  ComposeIcon
} from '@sanity/icons'


// image Gallery
export const gallery = defineType({
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
  icon: DashboardIcon,
  preview: {
    select: {
      media: 'image',
    },
    prepare({media}) {
      return {
        title: 'Gallery',
        subtitle: 'Image Gallery',
        media: media || DocumentTextIcon,
      }
    },
  },
})

// video 
export const video = defineType({
  name: 'video',
  type: 'object',
  fields: [
    defineField({
      name: 'videoLabel',
      type: 'string',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
  ],
  icon: PlayIcon,
  preview: {
    select: {
      media: 'videoLabel',
    },
    prepare({media}) {
      return {
        title: 'Video',
        subtitle: 'Video',
        media: media || DashboardIcon,
      }
    },
  },
})

// text with image
export const textWithImage = defineType({
  name: 'textWithImage',
  type: 'object',
  title: 'Text with Image',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      name: 'alignment',
      type: 'string',
      title: 'Image and Text Alignment',
      description: 'Choose the alignment of the image and text',
      options: {
        list: [
          { title: 'Image Left, Text Right', value: 'imageLeft' },
          { title: 'Image Right, Text Left', value: 'imageRight' },
          // You can easily add more options here in the future
        ],
      },
      initialValue: 'imageLeft', // Optional: set a default value
    }), 
  ],
  icon: SplitVerticalIcon,
  preview: {
    select: {
      media: 'image',
    },
    prepare({media}) {
      return {
        title: 'Text with Image',
        subtitle: 'Text with Image',
        media: media || SplitVerticalIcon,
      }
    },
  },
})

// hero
export const landingPageHero = defineType({
  name: 'landingPageHero',
  type: 'object',
  title: 'Landing Page Hero',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
  icon: HeartIcon,
})

// form
export const form = defineType({
  name: 'form',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'form',
      type: 'string',
      description: 'Select form type',
      options: {
        list: ['newsletter', 'register', 'contact'],
      },
    }),
  ],
  icon: ComposeIcon
})