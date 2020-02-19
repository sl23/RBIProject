import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Offer Requirement Purchase',
  name: 'offerRequirementPurchase',
  type: 'object',
  fields: [
    {
      title: 'Option',
      name: 'option',
      description: 'Required purchase in order to redeem',
      type: 'reference',
      to: [{ type: 'item' }, { type: 'combo' }],
      required: true,
    },
  ],
  preview: {
    select: {
      name: 'option.name',
      id: 'option._id',
    },
    prepare(selection) {
      return {
        title: `${getDefaultLocalizedValue(selection.name)} - ${selection.id}`,
      };
    },
  },
};
