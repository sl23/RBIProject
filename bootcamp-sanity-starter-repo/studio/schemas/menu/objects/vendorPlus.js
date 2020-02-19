export default {
  title: 'Vendor PLU',
  name: 'vendorPlus',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: 'Sicom',
      name: 'sicom',
      type: 'string',
    },
    {
      title: 'Sicom Delivery',
      name: 'sicomDelivery',
      type: 'string',
    },
    {
      title: 'NCR',
      name: 'ncr',
      type: 'string',
    },
    {
      title: 'NCR Delivery',
      name: 'ncrDelivery',
      type: 'string',
    },
    {
      title: 'QST',
      name: 'qst',
      type: 'string',
    },
    {
      title: 'Carrols',
      name: 'carrols',
      type: 'string',
    },
    {
      title: 'Carrols Delivery',
      name: 'carrolsDelivery',
      type: 'string',
    },
    {
      title: 'Product Number',
      name: 'productNumber',
      type: 'string',
      description: 'TH Product Number used for Connector',
    },
  ],
};
