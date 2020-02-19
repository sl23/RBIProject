export default {
  title: 'Kiosk App Data',
  name: 'kioskAppData',
  description: 'App data that is specific to the Kiosk user experience',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      title: 'User Name Blacklist',
      name: 'userNameBlacklist',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) =>
        Rule.custom((terms = []) => {
          const invalidTerm = (term) => term.length === 0 || term.length < 3;
          const firstInvalid = terms.find(invalidTerm);

          return firstInvalid ? 'All terms must have 3 or more characters' : true;
        }),
    },
    {
      title: 'Blacklist Character Replace Rules',
      name: 'blacklistCharacterReplaceRules',
      type: 'array',
      of: [{ type: 'blacklistCharacterReplaceRule' }],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Custom Kiosk Data',
      };
    },
  },
};
