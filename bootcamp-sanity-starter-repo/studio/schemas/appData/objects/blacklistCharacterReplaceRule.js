export default {
  title: 'Blacklist Character Replace Rule',
  name: 'blacklistCharacterReplaceRule',
  type: 'object',
  fields: [
    {
      title: 'filter',
      name: 'filter',
      type: 'string',
      validation: (Rule) => Rule.required().length(1),
    },
    {
      title: 'Replace',
      name: 'replace',
      type: 'string',
      validation: (Rule) => Rule.required().length(1),
    },
  ],
  preview: {
    select: {
      filter: 'filter',
      replace: 'replace',
    },
    prepare({ filter, replace }) {
      return {
        title: `Replace "${filter}" with "${replace}"`,
      };
    },
  },
};
