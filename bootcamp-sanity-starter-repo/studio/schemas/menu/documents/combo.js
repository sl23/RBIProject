import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Combo',
  name: 'combo',
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
      title: 'DMB Name',
      name: 'dmbName',
      type: 'localeString',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeBlockContent',
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
      title: 'Activation Date',
      name: 'activationDate',
      type: 'date',
    },
    {
      title: 'Deactivation Date',
      name: 'deactivationDate',
      type: 'date',
    },
    {
      title: 'UI Pattern',
      name: 'uiPattern',
      type: 'string',
      options: {
        list: ['parallel', 'series'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Main Item',
      name: 'mainItem',
      type: 'reference',
      to: [
        {
          type: 'item',
        },
      ],
    },
    {
      title: 'Hide Main Item Description',
      name: 'hideMainItemDescription',
      type: 'boolean',
    },
    {
      title: 'Label As Per Person',
      description: 'Show the the amount being ordered as per person.',
      name: 'labelAsPerPerson',
      type: 'boolean',
    },
    {
      title: 'Force Modifiers to Bottom',
      description:
        'Indicate if the modifiers for the mainItem and any comboSlots should be dropped down and displayed after all comboSlots instead of directly under the item/comboSlot they pertain to',
      name: 'forceModifiersToBottom',
      type: 'boolean',
    },
    {
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'comboSlot' }],
        },
      ],
    },
    {
      title: 'Channel Exclusions',
      name: 'channelExclusions',
      type: 'channelExclusions',
    },
    {
      title: 'Vendor PLUs',
      name: 'vendorPlus',
      type: 'vendorPlus',
      fieldset: 'deprecated',
    },
    {
      title: 'Vendor Configs',
      name: 'vendorConfigs',
      type: 'vendorConfigs',
    },
    {
      title: 'Prices',
      name: 'prices',
      type: 'array',
      of: [{ type: 'pricingRegionPrice' }],
    },
  ],
  initialValue: {
    uiPattern: 'parallel',
  },
  preview: {
    select: {
      title: 'name',
      id: '_id',
      media: 'image',
    },
    prepare(selection) {
      return {
        title: `${getDefaultLocalizedValue(selection.title)} - ${selection.id}`,
        subtitle: 'Combo',
        media: selection.media,
      };
    },
  },
};
