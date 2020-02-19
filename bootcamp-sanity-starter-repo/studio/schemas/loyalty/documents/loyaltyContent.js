export default {
  title: 'Loyalty Content',
  name: 'loyaltyContent',
  type: 'document',
  liveEdit: false,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Main Hero Loyalty Image',
      description: 'Is visible to users logged in their loyalty profile',
      name: 'mainHeroLoyaltyImage',
      type: 'localeImage',
    },
    {
      title: 'Main Hero Loyalty Text',
      description: 'Is visible to users logged in their loyalty profile',
      name: 'mainHeroLoyaltyText',
      type: 'localeString',
    },
    {
      title: 'Main Hero Loyalty Subtext',
      description: 'Is visible to users logged in their loyalty profile',
      name: 'mainHeroLoyaltySubtext',
      type: 'localeString',
    },
    {
      title: 'Tims Rewards Image',
      name: 'timsRewardsImage',
      type: 'localeImage',
    },
    {
      title: 'Details Tab Name',
      name: 'detailsTabName',
      type: 'localeString',
    },
    {
      title: 'Details Page Hero Image',
      name: 'detailsPageHeroImage',
      type: 'localeImage',
    },
    {
      title: 'Details Setup Page Text',
      name: 'detailsSetupPageText',
      type: 'localeString',
    },
    {
      title: 'Details Setup Page Subtext',
      name: 'detailsSetupPageSubtext',
      type: 'localeString',
    },
    {
      title: 'Loyalty Program Instructions Block Text',
      name: 'loyaltyProgramInstructionsBlockText',
      type: 'localeBlockContent',
    },
    {
      title: 'Loyalty Card Section Title',
      name: 'loyaltyCardSectionTitle',
      type: 'localeString',
    },
    {
      title: 'Loyalty Card Section Text',
      name: 'loyaltyCardSectionText',
      type: 'localeString',
    },
    {
      title: 'Register Card Section Title',
      name: 'registerCardSectionTitle',
      type: 'localeString',
    },
    {
      title: 'Register Card Section Block Text',
      name: 'registerCardSectionBlockText',
      type: 'localeBlockContent',
    },
    {
      title: 'Register Card Image',
      name: 'registerCardImage',
      type: 'localeImage',
    },
    {
      title: 'Lost Card Section Title',
      name: 'lostCardSectionTitle',
      type: 'localeString',
    },
    {
      title: 'Lost Card Section Block Text',
      name: 'lostCardSectionBlockText',
      type: 'localeBlockContent',
    },
    {
      title: 'Reward Setup Tab Name',
      name: 'rewardSetupTabName',
      type: 'localeString',
    },
    {
      title: 'Reward Setup Page Text',
      name: 'rewardSetupPageText',
      type: 'localeString',
    },
    {
      title: 'Reward Setup Page Subtext',
      name: 'rewardSetupPageSubtext',
      type: 'localeString',
    },
    {
      title: 'History Tab Name',
      name: 'historyTabName',
      type: 'localeString',
    },
    {
      title: 'History Page Text',
      name: 'historyPageText',
      type: 'localeString',
    },
    {
      title: 'History Page Subtext',
      name: 'historyPageSubtext',
      type: 'localeString',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
