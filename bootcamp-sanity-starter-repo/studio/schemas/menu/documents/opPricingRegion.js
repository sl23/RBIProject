export default {
  title: 'Operational Pricing Region',
  name: 'opPricingRegion',
  type: 'document',
  description: 'Pricing regions for a given brand',
  liveEdit: true,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Restaurants',
      name: 'restaurants',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'restaurant' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      id: '_id',
    },
    prepare(selection) {
      return {
        title: `${selection.title} - ${selection.id}`,
        subtitle: 'Operational Pricing Region',
      };
    },
  },
};
