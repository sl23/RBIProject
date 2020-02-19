import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Item Option Modifier',
  name: 'itemOptionModifier',
  type: 'object',
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
      title: 'Prices',
      name: 'prices',
      type: 'array',
      of: [
        {
          type: 'pricingRegionPrice',
        },
      ],
    },
    {
      title: 'Default',
      name: 'default',
      type: 'boolean',
      readOnly: true,
    },
    {
      title: 'Modifier Multiplier',
      name: 'modifierMultiplier',
      type: 'reference',
      to: [{ type: 'modifierMultiplier' }],
    },
    {
      title: 'Nutrition',
      name: 'nutrition',
      type: 'nutrition',
      readOnly: true,
      options: {
        collapsible: true,
      },
    },
    {
      title: 'Allergen',
      name: 'allergen',
      type: 'opAllergen',
      readOnly: true,
      options: {
        collapsible: true,
      },
    },
    {
      title: 'Activation Date',
      name: 'activationDate',
      type: 'datetime',
    },
    {
      title: 'Deactivation Date',
      name: 'deactivationDate',
      type: 'datetime',
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
  ],
  preview: {
    select: {
      modifierName: 'modifierMultiplier.modifier.name',
      prefix: 'modifierMultiplier.prefix',
      name: 'name',
      default: 'default',
    },
    prepare(selection) {
      return {
        title: `${selection.default ? '*' : ''}
          ${
            // eslint-disable-next-line no-nested-ternary
            getDefaultLocalizedValue(selection.name)
              ? getDefaultLocalizedValue(selection.name)
              : getDefaultLocalizedValue(selection.prefix)
              ? `${getDefaultLocalizedValue(selection.prefix)} ${getDefaultLocalizedValue(
                  selection.modifierName,
                )}`
              : getDefaultLocalizedValue(selection.modifierName)
          }`,
      };
    },
  },
};
