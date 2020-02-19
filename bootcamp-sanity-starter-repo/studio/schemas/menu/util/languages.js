import { BRAND } from './environment';

const defaultLanguage = 'en';

const English = {
  id: 'en',
  title: 'English',
};

const Spanish = {
  id: 'es',
  title: 'Spanish',
};

const French = {
  id: 'fr',
  title: 'French',
};

const BKSupportedLanguages = [English, Spanish];
const THSupportedLanguages = [English, French];
const PLKSupportedLanguages = [English, Spanish];

const supportedLanguagesForBrand = {
  automation: [English, Spanish, French],
  bk: BKSupportedLanguages,
  th: THSupportedLanguages,
  plk: PLKSupportedLanguages,
};

const supportedLanguages = supportedLanguagesForBrand[BRAND].map((language) => {
  if (language.id === defaultLanguage) {
    return Object.assign({}, language, { isDefault: true });
  }
  return language;
});

// Gets a localized value from a localized object, preferrably from the default
// language. If that is missing: picks a fallback language by the order the
// languages are listed.
function getDefaultLocalizedValue(localizedObject) {
  if (typeof localizedObject !== 'object') {
    return localizedObject;
  }

  if (localizedObject[defaultLanguage]) {
    return localizedObject[defaultLanguage];
  }
  const fallbackLanguage = supportedLanguages.find((lang) => localizedObject[lang.id]);

  if (fallbackLanguage) {
    return localizedObject[fallbackLanguage.id];
  }
  return null;
}

export {
  BKSupportedLanguages,
  English,
  French,
  PLKSupportedLanguages,
  Spanish,
  THSupportedLanguages,
  defaultLanguage,
  getDefaultLocalizedValue,
  supportedLanguages,
};
