



export default {
    name: 'profile',
    title: 'Employee Profile',
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
          source: 'firstName',
          maxLength: 96,
        },
      },
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'phone',
        title: 'Phone number',
        type: 'number'
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
      },
      {
        name: 'profilePicture',
        title: 'Profile Picture',
        type: 'image',
        options: {
          hotspot: true, // Enables the hotspot functionality for selecting the focus area on the image
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'department',
        title: 'Department',
        type: 'string',
        options: {
            list: [
                { title: 'Ledelse', value: 'ledelse' },
                { title: 'Sales', value: 'sales' },
                { title: 'Marketing', value: 'marketing' },
                { title: 'Product', value: 'product' },
                { title: 'Purchasing', value: 'purchasing' },
                { title: 'Technical service', value: 'technicalService' },
                { title: 'Diesel', value: 'diesel' },
   
            ],
        },
      }  
    ],
  };
  