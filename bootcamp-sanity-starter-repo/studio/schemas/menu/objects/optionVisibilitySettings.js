export default {
  title: 'Option visibility settings',
  name: 'optionVisibilitySettings',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    {
      title: 'Visible options',
      name: 'visibleOptions',
      type: 'number',
      description:
        'The number of options to show by default. Remaining options will only show after a button click. Leave empty to show all options.',
    },
    {
      title: 'Toggle button text [Closed]',
      name: 'toggleButtonTextClosed',
      type: 'localeString',
    },
    {
      title: 'Toggle button text [Open]',
      name: 'toggleButtonTextOpen',
      type: 'localeString',
    },
  ],
};
