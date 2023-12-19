export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the page',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'paragraph',
          title: 'Paragraph',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'text',
            },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'additionalImages',
      title: 'Additional Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'flexibleComponents',
      title: 'Flexible Components',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'imageGallery' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title', // replace 'title' with the field you want to use as the title in the preview
      subtitle: 'createdAt', // replace 'createdAt' with the field you want to use as the subtitle in the preview
    },
  },
};
