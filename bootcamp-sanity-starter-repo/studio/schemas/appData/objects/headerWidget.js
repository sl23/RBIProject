import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Header Widget',
  name: 'headerWidget',
  type: 'object',
  fields: [
    {
      title: 'Heading Content',
      name: 'headingContent',
      type: 'localeString',
    },
    {
      title: 'Tagline Content',
      name: 'taglineContent',
      type: 'localeString',
    },
    {
      title: 'Header Image',
      name: 'headerImage',
      type: 'localeImage',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      heading: 'headingContent',
      tagline: 'taglineContent',
      image: 'headerImage',
    },
    prepare(selection) {
      return {
        title: 'Header Widget',
        subtitle: `${getDefaultLocalizedValue(selection.tagline)} ${getDefaultLocalizedValue(
          selection.heading,
        )}`,
        media: getDefaultLocalizedValue(selection.image),
      };
    },
  },
};
