import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Menu',
  name: 'menu',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
    },
    {
      title: 'Header Super Text',
      name: 'headerSuperText',
      type: 'localeString',
    },
    {
      title: 'Header Text',
      name: 'headerText',
      type: 'localeString',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Picker Background Image',
      name: 'pickerBackgroundImage',
      type: 'image',
    },
    {
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [
        {
          title: 'Section',
          name: 'section',
          type: 'reference',
          to: [{ type: 'section' }],
        },
        {
          title: 'Picker',
          name: 'picker',
          type: 'reference',
          to: [{ type: 'picker' }],
        },
        {
          title: 'Item',
          name: 'item',
          type: 'reference',
          to: [{ type: 'item' }],
        },
        {
          title: 'Combo',
          name: 'combo',
          type: 'reference',
          to: [{ type: 'combo' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      id: '_id',
      media: 'image',
    },
    prepare(selection) {
      return {
        title: `${getDefaultLocalizedValue(selection.title)} - ${selection.id}`,
        media: selection.media,
      };
    },
  },
};
