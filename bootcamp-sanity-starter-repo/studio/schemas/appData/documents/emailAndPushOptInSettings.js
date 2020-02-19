export default {
  title: 'Email And Push Opt In Settings',
  name: 'emailAndPushOptInSettings',
  description:
    'This document is used to define all of the communication preferences we will allow the user to set.',
  type: 'document',
  liveEdit: true,
  // readOnly: true, // TODO: set this to readOnly once these are defined
  fields: [
    {
      title: 'Options',
      name: 'options',
      description: 'This is a sorted list of all of the preferences we will display to the user.',
      type: 'array',
      of: [{ type: 'optInSetting' }],
    },
  ],
  preview: {
    select: {
      options: 'options',
    },
    prepare(selection) {
      return {
        title: `${selection.options.length} preferences`,
      };
    },
  },
};
