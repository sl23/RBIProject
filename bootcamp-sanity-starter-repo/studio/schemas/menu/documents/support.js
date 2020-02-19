export default {
  title: 'Support Data',
  name: 'supportData',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      title: 'Categories',
      description: 'Categories to populate dropdown in the support form',
      name: 'categories',
      type: 'array',
      of: [{ type: 'supportCategory' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare() {
      return {
        title: 'Categories',
        subtitle: 'Categories to populate dropdown in the support form',
      };
    },
  },
};
