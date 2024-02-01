import { defineField, defineType, defineArrayMember } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page Builder",
      of: [
        defineArrayMember({
          name: "hero",
          title: "Hero",
          type: "reference",
          to: [{ type: "hero" }], // Reference to an existing 'hero'
        }),
        defineArrayMember({
          name: "textWithImage",
          type: "textWithImage",
        }),
        defineArrayMember({
          name: "gallery",
          type: "gallery",
        }),
        defineArrayMember({
          name: "form",
          type: "form",
        }),
        defineArrayMember({
          name: "video",
          type: "video",
        }),
        defineArrayMember({
          name: "gridLayout",
          type: "gridLayout",
        }),
        defineArrayMember({
            name: "salesPeople",
            title: "Sales People Block",
            type: "reference",
            to: [{ type: 'salesTeamBlock' }], // Reference to an existing 'salesTeamBlock'
          }),
        defineArrayMember({
            name: 'imageGallery',
            type: 'imageGallery'
        }),
        defineArrayMember({
            name: 'banner',
            title: 'Banner',
            type: 'reference',
            to: [{ type: 'banner' }], // Reference to an existing 'banner'
        }),
        defineArrayMember({
            name: 'bilXtra',
            type: 'bilXtra'
        }),
        defineArrayMember({
            name: 'profile',
            type: 'profile'
        }),
        defineArrayMember({
            name: 'postsGrid',
            title: 'Posts Grid',
            type: 'postsGrid'
        }),
        defineArrayMember({
            name: 'customerGrid',
            title: 'Customer Grid',
            type: 'customerGrid'
        }),
        defineArrayMember({
            name: "existingPost",
            title: "Existing Post",
            type: "reference",
            to: [{ type: 'post' }], // Reference to an existing 'post'
          }),
        defineArrayMember({
            name: "brands",
            title: "Brands",
            type: "reference",
            to: [{ type: 'supplierBrands' }], // Reference to an existing 'customer'
          }),
      ],
    }),
  ],
});