export default {
  title: 'Size Based Plu',
  name: 'sizeBasedPlu',
  description: `Only used for BK, to distinguish between different combo sizes.`,
  type: 'object',
  fields: [
    {
      title: 'Combo PLU',
      name: 'comboPlu',
      type: 'string',
      validation: (Rule) =>
        Rule.custom(
          (plu) =>
            // if a string is provided it must be only numbers
            !plu || /^\d*$/.test(plu) || 'Combo PLUs can only be a number.',
        ),
    },
    {
      title: 'Combo Size',
      name: 'comboSize',
      type: 'string',
      options: {
        list: ['small', 'medium', 'large', 'value', 'kids'],
      },
      description: `Only used for BK, to distinguish between different combo sizes.`,
    },
  ],
};
