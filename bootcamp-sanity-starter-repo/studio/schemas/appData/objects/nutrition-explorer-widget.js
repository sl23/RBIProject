export default {
  title: 'Nutrition Explorer Widget',
  name: 'nutritionExplorerWidget',
  type: 'object',
  fields: [
    {
      title: 'Menu',
      name: 'menu',
      type: 'reference',
      to: [{ type: 'menu' }],
    },
    {
      title: 'Tasty Swaps',
      name: 'tastySwaps',
      type: 'tastySwaps',
    },
    {
      title: 'Category Whitelist',
      name: 'categoryWhitelist',
      description:
        'List of top-level categories (pickers, sections) in the menu that should be allowed in the nutrition explorer. An empty list will be interpreted as showing all categories.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'section' }, { type: 'picker' }],
        },
      ],
    },
  ],
};
