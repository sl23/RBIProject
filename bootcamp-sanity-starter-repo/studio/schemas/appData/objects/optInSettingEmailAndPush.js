import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Opt In Setting Email And Push',
  name: 'optInSettingEmailAndPush',
  type: 'object',
  liveEdit: true,
  // readOnly: true, // TODO: set this to readOnly once these are defined
  fields: [
    {
      title: 'Push Key',
      name: 'pushKey',
      description: 'This is the id the backend will use to save the users value as',
      type: 'string',
    },
    {
      title: 'Email Key',
      name: 'emailKey',
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
