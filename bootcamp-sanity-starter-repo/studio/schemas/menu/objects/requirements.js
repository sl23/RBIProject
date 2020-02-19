export default {
  title: 'Requirements',
  name: 'requirements',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    { title: 'Short Code', name: 'shortCode', type: 'string' },
    {
      title: 'Purchase',
      name: 'purchase',
      type: 'reference',
      to: [{ type: 'item' }, { type: 'combo' }, { type: 'picker' }, { type: 'section' }],
    },
    {
      title: 'Platform',
      name: 'platform',
      type: 'string',
      options: {
        list: ['Mobile', 'Web', 'Kiosk'],
      },
    },
    {
      title: 'Status',
      name: 'status',
      type: 'string',
      options: {
        list: ['Log In'],
      },
    },
  ],
};
