export default {
  title: 'Restaurant Kiosk Data',
  name: 'restaurantKioskData',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      title: 'Restaurant Number',
      name: 'restaurantNumber',
      type: 'number',
    },
    {
      title: 'Kiosks',
      name: 'kiosks',
      type: 'array',
      of: [{ type: 'kiosk' }],
    },
  ],
  preview: {
    select: {
      title: 'restaurantNumber',
      id: '_id',
    },
    prepare(selection) {
      return {
        title: `${selection.title} - ${selection.id}`,
        subtitle: 'Restaurant Kiosk Data',
      };
    },
  },
};
