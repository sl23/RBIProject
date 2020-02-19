import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Support Category',
  name: 'supportCategory',
  type: 'object',
  liveEdit: true,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
    },
    {
      title: 'Knowledge Force Issue ID',
      name: 'knowledgeForceIssueId',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'knowledgeForceIssueId',
    },
    prepare(selection) {
      return {
        title: getDefaultLocalizedValue(selection.title),
        subtitle: `Knowledge Force Issue ID: ${selection.subtitle}`,
      };
    },
  },
};
