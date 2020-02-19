import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Combo Slot',
  name: 'comboSlot',
  type: 'document',
  liveEdit: true,
  fieldsets: [
    {
      title: 'Deprecated',
      name: 'deprecated',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
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
        list: ['collapsed', 'hidden', 'locked', 'show'],
      },
    },
    {
      title: 'Minimum Amount',
      name: 'minAmount',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Maximum Amount',
      name: 'maxAmount',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Respect Maximum',
      name: 'respectMaximum',
      type: 'boolean',
    },
    {
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [
        {
          type: 'comboSlotOption',
        },
      ],
    },
    {
      title: 'Option visibility settings',
      name: 'optionVisibilitySettings',
      type: 'optionVisibilitySettings',
    },
    {
      title: 'Vendor PLUs',
      name: 'vendorPlus',
      type: 'vendorPlus',
      description:
        'If this value is provided it will serve as a parent to all the children PLUs in the combo slot.',
      fieldset: 'deprecated',
    },
    {
      title: 'Vendor Configs',
      name: 'vendorConfigs',
      type: 'vendorConfigs',
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
        subtitle: 'Combo Slot',
        media: selection.media,
      };
    },
  },
};
