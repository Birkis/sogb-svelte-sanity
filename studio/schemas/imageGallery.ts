export default {
    name: 'imageGallery',
    title: 'Image Gallery',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Title of the image gallery',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A short description of the gallery',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
              },
              {
                name: 'caption',
                title: 'Caption',
                type: 'string',
                options: {
                  isHighlighted: true, // Highlights the caption field in the studio for easy access
                },
              },
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
                description: 'Important for SEO and accessibility',
                options: {
                  isHighlighted: true,
                },
              },
            ],
            preview: {
              select: {
                title: 'caption',
                media: 'image',
              },
            },
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'description',
        media: 'images.0.image', // Show the first image as preview in the studio
      },
    },
  };
  