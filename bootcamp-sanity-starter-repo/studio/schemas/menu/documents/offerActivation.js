export default {
  title: 'Offer Activation',
  name: 'offerActivation',
  type: 'document',
  fieldsets: [
    {
      title: 'Hidden',
      name: 'hidden',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      title: 'Fake Field',
      name: 'fakeField',
      type: 'boolean',
      fieldset: 'hidden',
    },
  ],
  initialValue: {
    fakeField: false,
  },
  preview: {
    prepare() {
      return {
        title: 'Activation Offer',
      };
    },
  },
};
