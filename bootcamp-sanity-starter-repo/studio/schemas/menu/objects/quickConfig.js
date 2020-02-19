import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Quick Config',
  name: 'quickConfig',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
    },
    {
      title: 'Rules',
      name: 'rules',
      type: 'array',
      of: [{ type: 'quickConfigRule' }],
    },
  ],

  preview: {
    select: {
      name: 'name',
    },
    prepare: (selection) => ({
      title: getDefaultLocalizedValue(selection.name),
    }),
  },
};
