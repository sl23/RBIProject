export default {
  type: 'object',
  name: 'pricingRegionPrice',
  title: 'Pricing Region price',
  fields: [
    {
      title: 'Pricing Region',
      name: 'opPricingRegion',
      type: 'reference',
      to: [{ type: 'opPricingRegion' }],
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
    },
  ],
};
