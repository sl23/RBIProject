import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Item Option',
  name: 'itemOption',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
    },
    {
      title: 'Display Group',
      name: 'displayGroup',
      type: 'reference',
      to: [{ type: 'displayGroup' }],
    },
    {
      title: 'Component Style',
      name: 'componentStyle',
      type: 'string',
      options: {
        list: ['selector', 'stepper', 'boolean'],
      },
    },
    {
      title: 'Display Modifier Multiplier Name',
      name: 'displayModifierMultiplierName',
      type: 'boolean',
    },
    {
      title: 'Allow Multiple Selections',
      name: 'allowMultipleSelections',
      type: 'boolean',
    },
    {
      title: 'Inject Default Selection',
      name: 'injectDefaultSelection',
      type: 'boolean',
      description:
        'This field indicates that the PLU of the default option should be included when communicating to the POS.',
    },
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
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [{ type: 'itemOptionModifier' }],
      validation: (Rule) =>
        Rule.required().custom((options, schema) => {
          if (schema.parent.componentStyle === 'boolean') {
            return options.length !== 2
              ? 'itemOptions of componentStyle boolean must have exactly 2 options'
              : true;
          }
          return true;
        }),
    },
    {
      title: 'Is Upsell Modifier',
      name: 'upsellModifier',
      type: 'boolean',
    },
    {
      title: 'Activation Date',
      name: 'activationDate',
      type: 'datetime',
    },
    {
      title: 'Deactivation Date',
      name: 'deactivationDate',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      return {
        title: getDefaultLocalizedValue(selection.title),
        media: '<div> </div>',
      };
    },
  },
};
