export default {
  title: 'Rewards',
  name: 'rewards',
  type: 'object',
  fields: [
    {
      title: 'Key',
      name: 'key',
      type: 'string',
    },
    {
      title: 'Reward Name',
      name: 'rewardName',
      type: 'localeString',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'localeImages',
    },
    {
      title: 'Require Skills Question',
      name: 'requireSkillsQuestion',
      type: 'boolean',
    },
  ],
};
