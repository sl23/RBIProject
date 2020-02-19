import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Modifier Multiplier',
  name: 'modifierMultiplier',
  type: 'document',
  liveEdit: true,
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fieldsets: [
    {
      title: 'Deprecated',
      name: 'deprecated',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      title: 'Modifier',
      name: 'modifier',
      type: 'reference',
      to: [{ type: 'modifier' }],
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
      title: 'Prefix',
      name: 'prefix',
      type: 'localeString',
    },
    {
      title: 'Multiplier',
      name: 'multiplier',
      type: 'number',
    },
    {
      title: 'Channel Exclusions',
      name: 'channelExclusions',
      type: 'channelExclusions',
    },
  ],
  preview: {
    select: {
      modifier: 'modifier.name',
      prefix: 'prefix',
      specificationName: 'specificationName',
      multiplier: 'multiplier',
      modifierPlu: 'modifier.vendorPlus',
      modifierMultiplierPlu: 'vendorPlus',
      id: '_id',
    },
    prepare(selection) {
      // Only display a prefix if provided
      const prefix = selection.prefix ? `${getDefaultLocalizedValue(selection.prefix)} ` : '';
      return {
        title: `${prefix}${getDefaultLocalizedValue(selection.modifier)} - ${selection.id}`,
        subtitle: `Multiplier: ${selection.multiplier}`,
      };
    },
  },
};
