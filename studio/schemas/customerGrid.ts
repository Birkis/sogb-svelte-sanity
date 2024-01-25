import { defineField, defineType, defineArrayMember } from 'sanity';

export const customerGrid = defineType({
  name: 'customerGrid',
  title: 'Customer Grid',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'selectedCustomers',
      type: 'array',
      title: 'Selected Customers',
      of: [defineArrayMember({
        type: 'reference',
        to: [{ type: 'kunde' }],
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
        title: title ? title : 'No customers selected',
      };
    },
  },
});
