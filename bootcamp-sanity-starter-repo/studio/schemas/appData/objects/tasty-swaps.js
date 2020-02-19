export default {
  title: 'Tasty Swaps',
  name: 'tastySwaps',
  description: 'Data necessary to render the Tasty Swaps section of the nutrition explorer',
  type: 'object',
  fields: [
    {
      title: 'Main Title',
      name: 'mainTitle',
      type: 'localeString',
    },
    {
      title: 'Main Subtitle',
      name: 'mainSubtitle',
      type: 'localeString',
    },
    {
      title: 'Modal Title',
      name: 'modalTitle',
      type: 'localeString',
    },
    {
      title: 'Modal Subtitle',
      name: 'modalSubtitle',
      type: 'localeString',
    },
    {
      title: 'Swaps',
      name: 'swaps',
      description: 'The list of tasty swap product pairs',
      type: 'array',
      of: [{ type: 'tastySwap' }],
    },
  ],
};
