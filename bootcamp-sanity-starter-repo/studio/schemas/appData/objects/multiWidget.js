import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Multi Widget',
  name: 'multiWidget',
  type: 'object',
  fields: [
    {
      title: 'Widget',
      name: 'widget',
      type: 'string',
      description: `Select which widget you would like to render at this position.`,
      options: {
        list: ['donationWidget'],
      },
    },
  ],
  preview: {
    select: {
      content: 'widget',
    },
    prepare(selection) {
      return {
        title: 'Multi Widget',
        subtitle: `Widget type: ${selection.content}`,
      };
    },
  },
};
