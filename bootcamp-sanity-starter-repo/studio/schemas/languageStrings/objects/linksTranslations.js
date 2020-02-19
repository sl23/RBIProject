export default {
  title: 'Links Translations',
  name: 'linksTranslations',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: 'Legal Link',
      name: 'legalLink',
      type: 'localeString',
      description: '(TH Only) http://www.timhortons.com/us/en/legal.php',
    },
    {
      title: 'Privacy Link',
      name: 'privacyLink',
      type: 'localeString',
      description: '(TH Only) http://www.timhortons.com/us/en/privacy.php',
    },
    {
      title: 'Rewards Link',
      name: 'rewardsLink',
      type: 'localeString',
      description: '(TH Only) https://www.timhortons.ca/rewards',
    },
  ],
};
