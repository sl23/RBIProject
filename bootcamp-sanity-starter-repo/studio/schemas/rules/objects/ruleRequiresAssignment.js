export default {
  title: 'Requires Assignment',
  name: 'requires-assignment',
  type: 'object',
  description: 'Coupon is restricted to assigned Braze cohort',
  fields: [
    {
      title: 'Requires Assignment',
      name: 'requiresAssignment',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Must be part of the assigned cohort',
      };
    },
  },
};
