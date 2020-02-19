import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Modifier',
  name: 'modifier',
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
      title: 'Specification Number',
      name: 'specificationNumber',
      type: 'string',
      readOnly: true,
    },
    {
      title: 'Specification Name',
      name: 'specificationName',
      type: 'string',
      readOnly: true,
    },
  ],
  preview: {
    select: {
      name: 'name',
      specificationName: 'specificationName',
      id: '_id',
      media: 'image',
    },
    prepare(selection) {
      return {
        title: `${getDefaultLocalizedValue(selection.name)} - ${selection.id}`,
        subtitle: selection.specificationName,
        media: selection.media,
      };
    },
  },
};
