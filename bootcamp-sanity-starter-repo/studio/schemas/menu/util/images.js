export default {
  title: 'Images',
  name: 'images',
  type: 'object',
  options: {
    collapsable: true,
    collapsed: true,
  },
  fields: [
    {
      title: 'App',
      name: 'app',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Kiosk',
      name: 'kiosk',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Image Description',
      name: 'imageDescription',
      type: 'string',
    },
  ],
};
