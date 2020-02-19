export default {
  title: 'Point of Sale',
  name: 'pos',
  type: 'object',
  collapsible: 'true',
  fields: [
    {
      title: 'Vendor',
      name: 'vendor',
      type: 'string',
      options: {
        list: ['CARROLS', 'NCR', 'PRODUCT_NUMBER', 'QST', 'SICOM'],
      },
    },
    {
      title: 'Version',
      name: 'version',
      type: 'string',
    },
  ],
};
