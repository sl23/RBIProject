export default {
  title: 'Parent Child Plu',
  name: 'parentChildPlu',
  type: 'object',
  fields: [
    {
      title: 'PLU',
      name: 'plu',
      type: 'string',
      validation: (Rule) =>
        Rule.custom(
          (plu) =>
            // if a string is provided it must be only numbers
            !plu || /^\d*$/.test(plu) || 'PLUs can only be a number.',
        ),
    },
    {
      title: 'Child PLU',
      name: 'childPlu',
      type: 'string',
      validation: (Rule) =>
        Rule.custom(
          (plu) =>
            // if a string is provided it must be only numbers
            !plu || /^\d*$/.test(plu) || 'PLUs can only be a number.',
        ),
    },
  ],
};
