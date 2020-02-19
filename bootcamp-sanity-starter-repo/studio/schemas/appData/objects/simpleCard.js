export default {
  title: 'Simple Card',
  name: 'simpleCard',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeString',
    },
  ],
};
