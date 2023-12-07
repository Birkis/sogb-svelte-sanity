export default {
    name: 'supplier',
    title: 'Supplier Brand',
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
          source: 'brandName',
          maxLength: 96,
        },
      },
      {
        name: 'brandName',
        title: 'Brand Name',
        type: 'string',
      },
      {
        name: 'productType',
        title: 'Product Type',
        type: 'string',
      },
      {
        name: 'brandUrl',
        title: 'Brand URL',
        type: 'url',
      },
      {
        name: 'brandLogo',
        title: 'Brand Logo',
        type: 'image',
        options: {
          hotspot: true, // Enables the hotspot functionality for selecting the focus area on the image
        },
      },
    ],
  };
  