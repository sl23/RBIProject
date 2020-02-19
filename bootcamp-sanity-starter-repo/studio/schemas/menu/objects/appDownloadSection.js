export default {
  title: 'App Download Section',
  name: 'appDownloadSection',
  type: 'object',
  fields: [
    {
      title: 'Primary Image',
      name: 'primaryImage',
      type: 'localeImage',
    },
    {
      title: 'Header Super Text',
      name: 'headerSuperText',
      type: 'localeString',
    },
    {
      title: 'Header',
      name: 'header',
      type: 'localeString',
    },
    {
      title: 'Copy',
      name: 'copy',
      type: 'localeString',
    },
    {
      title: 'Text Decoration Left',
      name: 'textDecorationLeft',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Text Decoration Right',
      name: 'textDecorationRight',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Submit Button Text',
      name: 'submitButtonText',
      type: 'localeString',
    },
    {
      title: 'iOS Download Link',
      name: 'iOSDownloadLink',
      type: 'url',
    },
    {
      title: 'iOS Download Image',
      name: 'iOSDownloadImage',
      type: 'localeImage',
    },
    {
      title: 'Android Download Link',
      name: 'androidDownloadLink',
      type: 'url',
    },
    {
      title: 'Android Download Image',
      name: 'androidDownloadImage',
      type: 'localeImage',
    },
  ],
};
