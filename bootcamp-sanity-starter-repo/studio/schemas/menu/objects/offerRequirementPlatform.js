export default {
  title: 'Offer Requirement Platform',
  name: 'offerRequirementPlatform',
  type: 'object',
  fields: [
    {
      title: 'Platform',
      name: 'platform',
      type: 'string',
      options: {
        list: ['Mobile', 'Web', 'Kiosk'],
      },
    },
  ],
};
