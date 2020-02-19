import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Anchor Widget',
  name: 'anchorWidget',
  type: 'object',
  fields: [
    {
      title: 'Anchor Name',
      name: 'anchorName',
      type: 'localeString',
    },
  ],
  preview: {
    select: {
      content: 'anchorName',
    },
    prepare(selection) {
      return {
        title: 'Anchor Widget',
        subtitle: getDefaultLocalizedValue(selection.content),
      };
    },
  },
};
