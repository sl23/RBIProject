export default {
  title: 'Vendor Config',
  name: 'vendorConfig',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: 'PLU Type',
      name: 'pluType',
      type: 'string',
      options: {
        list: [
          'constantPlu',
          'ignore',
          'multiConstantPlus',
          'parentChildPlu',
          'quantityBasedPlu',
          'sizeBasedPlu',
        ],
      },
      description: `This indicates the type of PLU the Vendor needs. Ignore means that this is just for UI and not used by POS. See below for other types.`,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Parent Sanity ID',
      name: 'parentSanityId',
      type: 'string',
      description:
        'If provided this vendorConfig will be moved under the cartEntry with Sanity ID equal to parentSanityId for injection.',
    },
    {
      title: 'Pull Up Levels',
      name: 'pullUpLevels',
      type: 'number',
      description: 'This field indicates how many levels up the PLU belongs.',
    },
    {
      title: 'Constant PLU',
      name: 'constantPlu',
      type: 'string',
      description: 'Constant is for a single value PLU',
      validation: (Rule) =>
        Rule.custom(
          (plu) =>
            // if a string is provided it must be only numbers
            !plu || /^\d*$/.test(plu) || 'Constant PLUs can only be a number.',
        ),
    },
    {
      title: 'Multi Constant Plus',
      name: 'multiConstantPlus',
      type: 'array',
      of: [
        {
          type: 'plu',
        },
      ],
      description: 'Multi means there are many PLUs required for the injection to work properly',
    },
    {
      title: '',
      name: 'parentChildPlu',
      type: 'parentChildPlu',
      description: 'Parent Child is for when the item is represented by an item and modifier plu',
    },
    {
      title: 'Quantity Based PLU',
      name: 'quantityBasedPlu',
      type: 'array',
      of: [
        {
          type: 'plu',
        },
      ],
      description: 'Quantity is for a PLU that changes based on quantity',
    },
    {
      title: 'Size Based Plu',
      name: 'sizeBasedPlu',
      type: 'sizeBasedPlu',
      description: `Only used for BK, to distinguish between different combo sizes.`,
    },
  ],
  validation: (Rule) =>
    Rule.custom((vendorConfig) => {
      if (!vendorConfig) return 'PLU Type is required!';
      switch (vendorConfig.pluType) {
        case 'ignore':
          return true;
        case 'constantPlu':
          return vendorConfig.constantPlu ? true : 'Please set the Single Constant Plu Value.';
        case 'multiConstantPlus':
          return vendorConfig.multiConstantPlus && vendorConfig.multiConstantPlus.length > 0
            ? true
            : 'Please add at least one entry to Multi Constant Plus';
        case 'parentChildPlu':
          return vendorConfig.parentChildPlu &&
            vendorConfig.parentChildPlu.plu &&
            vendorConfig.parentChildPlu.childPlu
            ? true
            : 'Please set the parent & child plu values.';
        case 'quantityBasedPlu':
          return vendorConfig.quantityBasedPlu && vendorConfig.quantityBasedPlu.length > 0
            ? true
            : 'Please add at least one entry to Quantity Based Plu';
        case 'sizeBasedPlu':
          return vendorConfig.sizeBasedPlu ? true : 'Please add the size based PLU';
        default:
          return 'PLU Type is required!';
      }
    }),
};
