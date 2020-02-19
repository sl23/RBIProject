import { supportedLanguages } from './languages';

export default {
  title: 'Locale Image',
  name: 'localeImage',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {
        collapsible: true,
      },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    fieldset: lang.isDefault ? null : 'translations',
    type: 'image',
    options: {
      hotspot: true,
    },
  })),
};
