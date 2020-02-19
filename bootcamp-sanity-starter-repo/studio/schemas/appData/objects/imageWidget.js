import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Image Widget',
  name: 'imageWidget',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'localeImage',
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
      image: 'image',
    },
    prepare(selection) {
      return {
        title: 'Image Widget',
        subtitle: getDefaultLocalizedValue(selection.caption),
        media: getDefaultLocalizedValue(selection.image),
      };
    },
  },
};
