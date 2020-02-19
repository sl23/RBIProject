export default {
  type: 'object',
  name: 'link',
  title: 'Link',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      id: '_id',
    },
    prepare(selection) {
      return {
        title: `${selection.title} - ${selection.id}`,
        subtitle: 'Link Item',
      };
    },
  },
};
