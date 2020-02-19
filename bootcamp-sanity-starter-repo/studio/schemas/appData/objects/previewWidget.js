export default {
  title: 'Preview Widget',
  name: 'previewWidget',
  type: 'object',
  fields: [
    {
      title: 'Previews',
      name: 'previewContent',
      type: 'array',
      of: [{ type: 'previewEntry' }],
    },
  ],
  preview: {
    select: {
      previews: 'previewContent',
    },
    prepare(selection) {
      return {
        title: 'Preview Widget',
        subtitle: `${selection.previews.length} Previews`,
      };
    },
  },
};
