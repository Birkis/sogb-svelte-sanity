import { defineField, defineType, defineArrayMember } from 'sanity';

export const postsGrid = defineType({
  name: 'postsGrid',
  title: 'Posts Grid',
  type: 'document',
  fields: [
    defineField({
      name: 'selectedPosts',
      type: 'array',
      title: 'Selected Posts',
      of: [defineArrayMember({
        type: 'reference',
        to: [{ type: 'post' }],
      })],
      validation: (Rule) => Rule.required().min(1).max(3),
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
