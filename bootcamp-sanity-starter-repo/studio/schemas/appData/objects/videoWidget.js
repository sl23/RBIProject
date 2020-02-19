import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Video Widget',
  name: 'videoWidget',
  type: 'object',
  fields: [
    {
      title: 'Video',
      name: 'video',
      type: 'localeFile',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'localeString',
    },
    {
      title: 'Attribution Link',
      name: 'attributionLink',
      type: 'string',
    },
  ],
  preview: {
    select: {
      caption: 'caption',
    },
    prepare(selection) {
      return {
        title: 'Video Widget',
        subtitle: getDefaultLocalizedValue(selection.caption),
      };
    },
  },
};
