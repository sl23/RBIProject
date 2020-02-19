export default {
  title: 'Link Action',
  name: 'linkAction',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      title: 'Action Text',
      name: 'actionText',
      type: 'localeString',
    },
    {
      title: 'Action route',
      name: 'route',
      type: 'url',
      validation: (Rule) => Rule.uri({ relativeOnly: true }).required(),
    },
  ],
};
