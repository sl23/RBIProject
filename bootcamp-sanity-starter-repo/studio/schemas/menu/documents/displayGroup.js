import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Display Group',
  name: 'displayGroup',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
    },
    {
      title: 'Display Rank',
      name: 'displayRank',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      id: '_id',
      rank: 'displayRank',
    },
    prepare(selection) {
      return {
        title: `${getDefaultLocalizedValue(selection.title)} - ${selection.id}`,
        subtitle: `Display Group (Rank: ${selection.rank})`,
      };
    },
  },
};
