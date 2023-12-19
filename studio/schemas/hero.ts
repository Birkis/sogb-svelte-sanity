export default {
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
          }
        ]
      },
      {
        name: 'readMoreLabel',
        title: 'Read More Label',
        type: 'string',
      },
      {
        name: 'readMoreLink',
        title: 'Read More Link',
        type: 'url',
      },
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'subheading',
        title: 'Subheading',
        type: 'text',
      },
      {
        name: 'primaryCta',
        title: 'Primary Call To Action',
        type: 'object',
        fields: [
          {
            name: 'label',
            title: 'Label',
            type: 'string',
          },
          {
            name: 'link',
            title: 'Link',
            type: 'url',
          }
        ]
      },
      {
        name: 'secondaryCta',
        title: 'Secondary Call To Action',
        type: 'object',
        fields: [
          {
            name: 'label',
            title: 'Label',
            type: 'string',
          },
          {
            name: 'link',
            title: 'Link',
            type: 'url',
          }
        ]
      }
    ],
    preview: {
      select: {
        title: 'heading',
        subtitle: 'subheading',
        media: 'backgroundImage'
      }
    }
  };
  