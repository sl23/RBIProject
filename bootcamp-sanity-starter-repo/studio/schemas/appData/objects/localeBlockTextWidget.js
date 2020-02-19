import { getPlainText } from '../../menu/util/localeBlockContent';

export default {
  title: 'Locale Block Text Widget',
  name: 'localeBlockTextWidget',
  type: 'object',
  fields: [
    {
      title: 'Block Text Inversion',
      name: 'blockTextInversion',
      type: 'boolean',
    },
    {
      title: 'Locale Block Text Content',
      name: 'localeBlockTextContent',
      type: 'localeBlockContent',
    },
  ],
  preview: {
    select: {
      inversion: 'blockTextInversion',
      subtitle: 'localeBlockTextContent',
    },
    prepare(selection) {
      return {
        title: `Block Text Widget ${selection.inversion ? '(Inverted)' : ''}`,
        subtitle: getPlainText(selection.subtitle),
      };
    },
  },
};
