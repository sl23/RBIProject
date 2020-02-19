export default {
  title: 'Preview Entry',
  name: 'previewEntry',
  type: 'object',
  fields: [
    {
      title: 'Preview Image',
      name: 'previewImage',
      type: 'localeImage',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Image Description',
      name: 'imageDescription',
      type: 'localeString',
    },
    {
      title: 'Title Text',
      name: 'titleText',
      type: 'localeString',
    },
    {
      title: 'Body Text',
      name: 'bodyText',
      type: 'localeString',
    },
    {
      title: 'Link Text',
      name: 'linkText',
      type: 'localeString',
    },
    {
      title: 'Link URL',
      name: 'linkURL',
      type: 'string',
    },
  ],
};
