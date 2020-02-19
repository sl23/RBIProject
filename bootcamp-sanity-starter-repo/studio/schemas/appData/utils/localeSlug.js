import { supportedLanguages } from '../../menu/util/languages';
import slugify from './slugify';

export default {
  title: 'Locale Slug',
  name: 'localeSlug',
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
    type: 'slug',
    options: {
      source: `localeTitle.${lang.id}`,
      slugify,
    },
    fieldset: lang.isDefault ? null : 'translations',
  })),
};
