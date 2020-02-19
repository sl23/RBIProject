import { supportedLanguages } from './languages';

export default {
  title: 'Locale Block Content',
  name: 'localeBlockContent',
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
    type: 'blockContent',
    fieldset: lang.isDefault ? null : 'translations',
  })),
};

export function getPlainText(localizedObject) {
  if (!localizedObject || !localizedObject.en) return 'NO NAME';
  let text = '';
  localizedObject.en.map((val) => {
    if (!val.children) return ' ';
    text = text.concat(val.children.reduce((acc, obj) => `${acc} ${obj.text}`, ''));
    return null;
  });
  return text;
}
