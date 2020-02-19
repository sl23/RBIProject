import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Opt In Setting Enum',
  name: 'optInSettingEnum',
  type: 'object',
  liveEdit: true,
  // readOnly: true, // TODO: set this to readOnly once these are defined
  fields: [
    {
      title: 'key',
      name: 'key',
      description: 'This is the id the backend will use to save the users value as',
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeString',
    },
    {
      title: 'Enum Strings',
      name: 'enumStrings',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
      key: 'key',
      type: 'preferenceType',
      subTitle: 'description',
    },
    prepare(selection) {
      return {
        title: `${selection.key} - ${getDefaultLocalizedValue(selection.name)} (${selection.type})`,
        subtitle: getDefaultLocalizedValue(selection.subTitle),
      };
    },
  },
};
