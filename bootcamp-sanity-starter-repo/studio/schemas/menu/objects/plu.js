export default {
  title: 'PLU',
  name: 'plu',
  type: 'object',
  fields: [
    {
      title: 'Quantity',
      name: 'quantity',
      type: 'number',
    },
    {
      title: 'PLU',
      name: 'plu',
      type: 'string',
      validation: (Rule) =>
        Rule.custom(
          (plu) =>
            // if a string is provided it must only contain numbers
            !plu || /^\d*$/.test(plu) || 'PLUs can only be a number.',
        ),
    },
    {
      title: 'Qualifier',
      name: 'qualifier',
      type: 'string',
      description: `This field is only used in Tim Horton's because their PLUs need to have two separate values.`,
    },
  ],
  preview: {
    select: {
      quantity: 'quantity',
      plu: 'plu',
      qualifier: 'qualifier',
    },
    prepare(quantityPlu) {
      return {
        title: `${quantityPlu.quantity}(x) - ${quantityPlu.plu} - ${quantityPlu.qualifier}`,
      };
    },
  },
};
