import QuickConfigRuleInput from '../../../components/QuickConfigRuleInput';

export default {
  title: 'Quick Config Rule',
  name: 'quickConfigRule',
  type: 'object',
  fields: [
    {
      title: 'Item Options',
      name: 'itemOptions',
      type: 'array',
      of: [{ type: 'listItem' }],
    },
    {
      title: 'Modifier',
      name: 'modifier',
      type: 'listItem',
    },
  ],

  preview: {
    select: {
      modifier: 'modifier.title',
      itemOptions: 'itemOptions',
    },
    prepare({ itemOptions, modifier }) {
      return {
        title: modifier || 'No modifier selected',
        subtitle:
          itemOptions && itemOptions.length
            ? itemOptions.map(({ title }) => title).join(', ')
            : 'No options selected',
      };
    },
  },

  inputComponent: QuickConfigRuleInput,
};
