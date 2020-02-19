import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Picker Aspect',
  name: 'pickerAspect',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
    },
    {
      title: 'UI Pattern',
      name: 'uiPattern',
      type: 'string',
      options: {
        list: ['select', 'radio', 'upsell', 'size'],
        layout: 'radio',
      },
    },
    {
      title: 'Picker Aspect Options',
      name: 'pickerAspectOptions',
      type: 'array',
      of: [{ type: 'pickerAspectValue' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      id: '_id',
    },
    prepare(selection) {
      return {
        title: `${getDefaultLocalizedValue(selection.title)} - ${selection.id}`,
      };
    },
  },
};
