export default {
  title: 'Purchase',
  name: 'purchase',
  type: 'object',
  description: 'Offer only valid if this item is in the cart...',
  fields: [
    {
      title: 'Quantity',
      name: 'quantity',
      type: 'number',
      description: 'Quantity that must be in the cart',
    },
    {
      title: 'Sanity ID',
      name: 'sanityId',
      type: 'string',
    },
  ],
  preview: {
    select: {
      quantity: 'quantity',
      item: 'sanityId',
    },
    prepare(selection) {
      return {
        title: `Cart must include ${selection.quantity} ${selection.item}`,
      };
    },
  },
};
