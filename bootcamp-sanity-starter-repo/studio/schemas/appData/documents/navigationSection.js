import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Navigation Section',
  name: 'navigationSection',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Pages',
      name: 'pages',
      type: 'array',
      of: [
        {
          title: 'Referenced Page',
          name: 'staticPage',
          type: 'reference',
          to: [{ type: 'staticPage' }],
        },
        {
          title: 'Referenced Section',
          name: 'navigationSection',
          type: 'reference',
          to: [{ type: 'navigationSection' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      id: '_id',
    },
    prepare(selection) {
      return {
        title: `${getDefaultLocalizedValue(selection.title)} - ${selection.id}`,
        media: '<div> </div>',
      };
    },
  },
};
