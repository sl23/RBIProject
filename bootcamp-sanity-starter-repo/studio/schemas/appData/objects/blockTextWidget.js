export default {
  title: 'Block Text Widget',
  name: 'blockTextWidget',
  type: 'object',
  fields: [
    {
      title: 'Block Text Inversion',
      name: 'blockTextInversion',
      type: 'boolean',
    },
    {
      title: 'Block Text Content',
      name: 'blockTextContent',
      type: 'array',
      of: [{ type: 'block', name: 'block' }],
    },
  ],
};
