import { defineField, defineArrayMember, defineType } from "sanity";


export const brand = defineType ({
    name: 'brand',
    title: 'Brand',
    type: 'document',
    fields: [
        defineField(    {
            name: 'brandName',
            title: 'Brand Name',
            type: 'string',
        }),
      defineField({
            name: 'productType',
            title: 'Product Type',
            type: 'string',
          }),
    defineField({
        name: 'brandUrl',
        title: 'Brand URL',
        type: 'url',
    }),
    defineField(      {
        name: 'brandLogo',
        title: 'Brand Logo',
        type: 'image',
        options: {
          hotspot: true, // Enables the hotspot functionality for selecting the focus area on the image
        },
      })
    ],
  });