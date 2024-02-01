import { defineField, defineType, defineArrayMember } from 'sanity';

export const supplierBrands = defineType({
  name: 'supplierBrands',
  title: 'Supplier Brands',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }), 
    defineField({
      name: 'selectedBrands',
      type: 'array',
      title: 'Selected Brands',
      of: [defineArrayMember({
        type: 'reference',
        to: [{ type: 'brand' }],
      })],
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title ? title : 'No posts selected',
      };
    },
  },
});

  