import { supportedLanguages } from './languages';

export default {
  title: 'Locale Images',
  name: 'localeImages',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {
        collapsible: false,
      },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    fieldset: lang.isDefault ? null : 'translations',
    type: 'images',
    options: {
      hotspot: true,
    },
  })),
};
