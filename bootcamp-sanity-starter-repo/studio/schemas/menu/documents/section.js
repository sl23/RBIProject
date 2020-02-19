import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Section',
  name: 'section',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
    },
    {
      title: 'DMB Name',
      name: 'dmbName',
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
      title: 'Carousel Image',
      name: 'carouselImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
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
      title: 'Images',
      name: 'images',
      type: 'images',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeBlockContent',
    },
    {
      title: 'UI Pattern',
      name: 'uiPattern',
      type: 'string',
      options: {
        list: ['standard', 'stacked', 'inlineTile'],
      },
    },
    {
      title: 'Daypart',
      name: 'daypart',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [
        {
          title: 'Combo',
          name: 'combo',
          type: 'reference',
          to: [{ type: 'combo' }],
        },
        {
          title: 'Item',
          name: 'item',
          type: 'reference',
          to: [{ type: 'item' }],
        },
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
          title: 'Offer',
          name: 'offer',
          type: 'reference',
          to: [{ type: 'offer' }],
        },
      ],
      validation: (Rule) =>
        Rule.custom((items) => {
          if (typeof items === 'undefined') {
            return true; // Allow undefined values
          }
          const found = {};
          for (let i = 0; i < items.length; i += 1) {
            // eslint-disable-next-line no-underscore-dangle
            const target = items[i]._ref;
            if (found[target]) {
              return 'Contains duplicate items';
            }
            found[target] = true;
          }
          return true;
        }),
    },
    {
      title: 'Channel Exclusions',
      name: 'channelExclusions',
      type: 'channelExclusions',
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
        subtitle: 'Section',
        media: selection.media,
      };
    },
  },
};
