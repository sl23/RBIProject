import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'External Link',
  name: 'externalLink',
  type: 'object',
  liveEdit: true,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeString',
    },
    {
      title: 'More Info',
      name: 'moreInfo',
      type: 'localeBlockContent',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'localeImage',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'name',
      description: 'description',
    },
    prepare(selection) {
      return {
        title: `${getDefaultLocalizedValue(selection.title)} - ${getDefaultLocalizedValue(
          selection.description,
        )}`,
        subtitle: 'External Link',
      };
    },
  },
};
