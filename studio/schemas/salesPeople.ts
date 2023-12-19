export default {
    name: 'salesTeamBlock',
    title: 'Sales Team Block',
    type: 'document',
    fields: [
      {
        name: 'mainTitle',
        title: 'Main Title',
        type: 'string'
      },
      {
        name: 'subTitle',
        title: 'Subtitle',
        type: 'string'
      },
      {
        name: 'salesPeople',
        title: 'Sales People',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: { hotspot: true },
                fields: [
                  {
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                    options: {
                      isHighlighted: true
                    }
                  }
                ]
              },
              {
                name: 'description',
                title: 'Description',
                type: 'string'
              }
            ],
            preview: {
              select: {
                title: 'description',
                media: 'image'
              }
            }
          }
        ]
      },
      {
        name: 'bottomText',
        title: 'Bottom Text',
        type: 'string'
      }
    ]
  }
  