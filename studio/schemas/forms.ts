// schemas/forms.js
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'forms',
  title: 'Forms',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the form',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'Upload the PDF file for the form',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description of the form (optional)',
    }),
    defineField({
      name: 'previewThumb',
      title: 'Preview Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload a thumbnail image for the form preview (optional)',
    }),
  ],
})
