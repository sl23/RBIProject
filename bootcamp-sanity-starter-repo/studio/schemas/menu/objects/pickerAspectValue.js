import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Picker Aspect Value',
  name: 'pickerAspectValue',
  type: 'object',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .lowercase()
          .regex(/^[a-z0-9-]+$/)
          .error('Must be lowercase and can only contain characters or numbers'),
      description: 'A stable identifier used to refer to this value in the backend.',
    },
    {
      title: 'Name',
      name: 'name',
      description: 'Name of the picker aspect that will show as an option on the UI',
      type: 'localeString',
    },
    {
      title: 'Hide Name in Item Preview',
      name: 'hideNameInItemPreview',
      description: 'If true, do not add the picker aspect name above to the item preview',
      type: 'boolean',
    },
    {
      title: 'Description',
      name: 'description',
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
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      return {
        title: getDefaultLocalizedValue(selection.title),
      };
    },
  },
};
