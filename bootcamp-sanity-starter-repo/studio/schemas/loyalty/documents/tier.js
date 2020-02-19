import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Tier',
  name: 'tier',
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
      title: 'Points',
      name: 'points',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .max(99999),
    },
  ],
  preview: {
    select: {
      title: 'name',
      id: '_id',
      pts: 'points',
    },
    prepare(selection) {
      return {
        title: `${getDefaultLocalizedValue(selection.title)} - ${selection.id}`,
        subtitle: `${selection.pts} pts`,
      };
    },
  },
};
