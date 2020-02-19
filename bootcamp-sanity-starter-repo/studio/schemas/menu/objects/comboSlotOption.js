import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Combo Slot Option',
  name: 'comboSlotOption',
  type: 'object',
  liveEdit: true,
  fields: [
    {
      title: 'Minimum Amount',
      name: 'minAmount',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Maximum Amount',
      name: 'maxAmount',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Default Amount',
      name: 'defaultAmount',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Option',
      name: 'option',
      type: 'reference',
      to: [{ type: 'item' }, { type: 'picker' }, { type: 'section' }],
    },
    // TODO: validation rule -> section & picker can only contain items
    // TODO: determine how pricing should be modeled for picker & menu section
    {
      title: 'Prices',
      name: 'prices',
      type: 'array',
      readOnly: true,
      of: [{ type: 'pricingRegionPrice' }],
    },
  ],
  preview: {
    select: {
      name: 'option.name',
      minAmount: 'minAmount',
      maxAmount: 'maxAmount',
      defaultAmount: 'defaultAmount',
    },
    prepare(selection) {
      return {
        title: `${selection.defaultAmount > 0 ? '*' : ''}${getDefaultLocalizedValue(
          selection.name,
        )} (Min:${selection.minAmount} Max:${selection.maxAmount})`,
      };
    },
  },
};
