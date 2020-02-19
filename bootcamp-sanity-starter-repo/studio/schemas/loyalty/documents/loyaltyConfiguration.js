import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Loyalty Configuration',
  name: 'loyaltyConfiguration',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
      description: 'This field is not used on the frontend but makes Sanity look better.',
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
    {
      title: 'Default Tier',
      name: 'defaultTier',
      type: 'reference',
      to: [{ type: 'tier' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Bank My Reward Tier',
      name: 'bankMyRewardTier',
      type: 'reference',
      to: [{ type: 'tier' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Onboarding Quick Select Tiers',
      name: 'onboardingQuickSelectTiers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tier' }],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      return {
        title: getDefaultLocalizedValue(selection.title),
      };
    },
  },
};
