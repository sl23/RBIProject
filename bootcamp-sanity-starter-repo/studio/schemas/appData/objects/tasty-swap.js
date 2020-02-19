import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Tasty Swap',
  name: 'tastySwap',
  description: 'Tasty swap product pair',
  type: 'object',
  fields: [
    {
      title: 'Swap Title',
      name: 'swapTitle',
      type: 'localeString',
    },
    {
      title: 'Selected Product',
      name: 'selectedProduct',
      description: 'The product the user is looking at',
      type: 'reference',
      to: [{ type: 'item' }, { type: 'combo' }],
    },
    {
      title: 'Suggested Product',
      name: 'suggestedProduct',
      description: 'The product we propose instead',
      type: 'reference',
      to: [{ type: 'item' }, { type: 'combo' }],
    },
  ],
  preview: {
    select: {
      selectedProductName: 'selectedProduct.name',
      suggestedProductName: 'suggestedProduct.name',
    },
    prepare(selection) {
      const { selectedProductName, suggestedProductName } = selection;
      return {
        title: `${
          selectedProductName ? getDefaultLocalizedValue(selectedProductName) : 'unknown'
        } -> ${suggestedProductName ? getDefaultLocalizedValue(suggestedProductName) : 'unknown'}`,
      };
    },
  },
};
