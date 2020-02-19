import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeBlockContent',
    },
    {
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tier' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      name1: 'options.0.name',
      pts1: 'options.0.points',
      name2: 'options.1.name',
      pts2: 'options.1.points',
      name3: 'options.2.name',
    },
    prepare(selection) {
      const { name1, name2, pts1, pts2, name3 } = selection;
      const subtitle =
        (name1 ? `${getDefaultLocalizedValue(name1)} (${pts1}pts)` : '') +
        (name2 ? ` - ${getDefaultLocalizedValue(name2)} (${pts2}pts)` : '') +
        (name3 ? ' - ...' : '');

      return {
        title: getDefaultLocalizedValue(selection.title),
        subtitle,
      };
    },
  },
};
