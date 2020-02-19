export default {
  title: 'Call To Action',
  name: 'callToAction',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'localeString',
    },
    {
      title: 'Subheading',
      name: 'subheading',
      type: 'localeString',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'localeString',
    },
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'localeString',
    },
    {
      title: 'Button Link',
      name: 'buttonLink',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
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
  ],
  preview: {
    select: {
      heading: 'heading',
      body: 'body',
      image: 'image',
    },
    prepare(selection) {
      return {
        title: 'Call To Action',
        subtitle: `${selection.body.en}`,
        media: selection.image ? selection.image.en : '<div></div>',
      };
    },
  },
};
