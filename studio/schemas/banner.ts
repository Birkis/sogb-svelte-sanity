export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'bannerTitle',
          maxLength: 96,
        },
      },
      {
        name: 'bannerTitle',
        title: 'Banner Title',
        type: 'string',
      },
      {
        name: 'bannerBody',
        title: 'Banner Body',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'bannerCTA',
        title: 'Banner CTA',
        type: 'string',
      },
      {
        name: 'bannerLink',
        title: 'Banner Link',
        type: 'url',
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }
  