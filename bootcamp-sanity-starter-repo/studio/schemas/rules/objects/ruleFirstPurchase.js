export default {
  title: 'First-Order-Only',
  name: 'first-order-only',
  type: 'object',
  description: 'Coupon restricted to first user order',
  fields: [
    {
      title: 'First User Order',
      name: 'firstUserOrder',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      purchases: 'firstUserOrder',
    },
    prepare(selection) {
      return {
        title: `Must be user's first purchase to use this offer: ${selection.purchases}`,
      };
    },
  },
};
