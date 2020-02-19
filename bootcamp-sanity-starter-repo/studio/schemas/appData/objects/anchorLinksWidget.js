import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Anchor Links Widget',
  name: 'anchorLinksWidget',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
  ],
  preview: {
    select: {
      content: 'title',
    },
    prepare(selection) {
      return {
        title: 'Anchor Links Widget',
        subtitle: getDefaultLocalizedValue(selection.content),
      };
    },
  },
};
