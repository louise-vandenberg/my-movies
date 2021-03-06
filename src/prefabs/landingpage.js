(() => ({
  name: 'Landing Page',
  icon: 'HeadingIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Landingpage',
      options: [
        {
          value: '',
          label: 'Content',
          key: 'content',
          type: 'TEXT_FIELD',
        },
        {
          value: 'title2',
          label: 'Heading type',
          key: 'headingType',
          type: 'HEADING_TYPOGRAPHY',
        },
        {
          value: '/movies',
          label: 'Link to Page',
          key: 'endpointId',
          type: 'ENDPOINT'
        }
      ],
      descendants: [],
    },
  ],
}))();
