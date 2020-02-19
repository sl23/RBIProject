import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Nutritional Section',
  name: 'nutritionalSection',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Products',
      name: 'products',
      type: 'array',
      of: [
        {
          title: 'Referenced Product',
          name: 'item',
          type: 'reference',
          to: [{ type: 'item' }],
        },
        {
          title: 'Referenced Section',
          name: 'nutritionalSection',
          type: 'reference',
          to: [{ type: 'nutritionalSection' }],
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
        title: `${getDefaultLocalizedValue(selection.title)}`,
        media: '<div> </div>',
      };
    },
  },
};
