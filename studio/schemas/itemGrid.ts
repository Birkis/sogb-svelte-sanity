import {defineField, defineType} from 'sanity'


// schemas/gridItem.js
export const gridItem = defineField ({
    name: 'gridItem',
    title: 'Grid Item',
    type: 'document',
    fields: [
      { name: 'title', type: 'string', title: 'Title' },
      { name: 'subheading', type: 'string', title: 'Subheading' },
      { name: 'image', type: 'image', title: 'Image' },
      {
        name: 'link',
        type: 'reference',
        to: [{ type: 'landingPage' }],
        title: 'Link to Landing Page'
      },
    ],
  });
  
  // schemas/gridLayout.js
  export const gridLayout = defineType ( {
    name: 'gridLayout',
    title: 'Grid Layout',
    type: 'document',
    fields: [
      {
        name: 'style',
        title: 'Style',
        type: 'string',
        options: {
          list: [
            { title: 'Mega', value: 'mega' },
            { title: 'Collage', value: 'collage' },
            { title: 'Thumbs', value: 'thumbs' },
            // add more styles as needed
          ],
        },
      },
      {
        name: 'items',
        type: 'array',
        of: [{ type: 'gridItem' }],
      },
    ],
  });
  