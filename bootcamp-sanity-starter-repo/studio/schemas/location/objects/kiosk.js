export default {
  title: 'Kiosk Data',
  name: 'kiosk',
  type: 'object',
  fields: [
    {
      title: 'Serial Number',
      name: 'serialNumber',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
