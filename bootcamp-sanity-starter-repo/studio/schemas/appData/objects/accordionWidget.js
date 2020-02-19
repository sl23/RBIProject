export default {
  title: 'Accordion Widget',
  name: 'accordionWidget',
  type: 'object',
  fields: [
    {
      title: 'Accordion Title',
      name: 'accordionTitle',
      type: 'localeString',
    },
    {
      title: 'Accordion Content',
      name: 'accordionContent',
      type: 'array',
      of: [{ type: 'accordionEntry' }],
    },
  ],
  preview: {
    select: {
      content: 'accordionContent',
    },
    prepare(selection) {
      return {
        title: 'Accordion Widget',
        subtitle: `${selection.content.length} Entries`,
      };
    },
  },
};
