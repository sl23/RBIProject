export default {
  title: 'Prizes',
  name: 'prizes',
  type: 'object',
  fields: [
    {
      title: 'Number Awarded',
      name: 'numberAwarded',
      type: 'localeBlockContent',
    },
    {
      title: 'Header',
      name: 'header',
      type: 'localeBlockContent',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'localeBlockContent',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'localeImages',
    },
    {
      title: 'Exclude in Alberta',
      name: 'excludeInAlberta',
      type: 'boolean',
    },
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'localeBlockContent',
    },
  ],
};
