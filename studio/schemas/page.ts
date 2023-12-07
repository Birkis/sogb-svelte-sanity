export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'bannerImage',
        title: 'Banner Image',
        type: 'image',
        options: {
          hotspot: true, // Enables the hotspot functionality for selecting the focus area on the image
        },
      },
      {
        name: 'ingress',
        title: 'Ingress',
        type: 'text',
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
    ],
  };
  