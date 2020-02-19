export default {
  title: 'Cart-Property',
  name: 'cart-property',
  type: 'object',
  description: 'Offer only valid based on the specified cart total',
  fields: [
    {
      title: 'Key',
      name: 'key',
      type: 'string',
      description: 'the cart property for comparison',
      options: {
        list: ['subTotalCents', 'platform', 'serviceMode', 'loyaltyBarcode'],
      },
    },
    {
      title: 'Negated',
      name: 'negated',
      type: 'boolean',
      description: 'This value must be set - use false if you are unsure.',
    },
    {
      title: 'Operator',
      name: 'operator',
      type: 'string',
      description: 'Subtotal must be...',
      options: {
        list: ['=', '<', '<=', '>', '>=', 'is-nil'],
      },
    },
    {
      title: 'Value',
      name: 'value',
      type: 'string',
    },
  ],
  preview: {
    select: {
      operator: 'operator',
      key: 'key',
      value: 'value',
    },
    prepare(selection) {
      return {
        title: `Cart property ${selection.key} ${selection.operator} ${selection.value}`,
      };
    },
  },
};
