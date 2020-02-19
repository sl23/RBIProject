export default {
  title: 'Call To Action Widget',
  name: 'callToActionWidget',
  type: 'object',
  fields: [
    {
      title: 'Call To Action Content',
      name: 'callToActionContent',
      type: 'array',
      of: [{ type: 'callToAction' }],
    },
  ],
  preview: {
    select: {
      content: 'callToActionContent',
    },
    prepare(selection) {
      return {
        title: 'Call To Action Widget',
        subtitle: `${selection.content.length} Rows`,
      };
    },
  },
};
