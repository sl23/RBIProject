import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Quote Widget',
  name: 'quoteWidget',
  type: 'object',
  fields: [
    {
      title: 'Quote Text',
      name: 'quoteText',
      type: 'localeString',
    },
    {
      title: 'Attribution Image',
      name: 'attributionImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Image Description',
      name: 'imageDescription',
      type: 'localeString',
    },
    {
      title: 'Attribution Name',
      name: 'attributionName',
      type: 'string',
    },
    {
      title: 'Attribution Title',
      name: 'attributionTitle',
      type: 'localeString',
    },
  ],
  preview: {
    select: {
      content: 'quoteText',
      media: 'attributionImage',
    },
    prepare(selection) {
      return {
        title: 'Quote Widget',
        subtitle: `${getDefaultLocalizedValue(selection.content)}`,
        media: selection.media,
      };
    },
  },
};
