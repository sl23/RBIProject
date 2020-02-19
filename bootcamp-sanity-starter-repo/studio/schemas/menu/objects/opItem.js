import { getDefaultLocalizedValue } from '../util/languages';

export default {
  title: 'Operational Item',
  name: 'opItem',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Product',
      name: 'product',
      type: 'string',
    },
    {
      title: 'Product Number',
      name: 'productNumber',
      type: 'number',
    },
    {
      title: 'Launch Date',
      name: 'launchDate',
      type: 'string',
    },
    {
      title: 'Daypart',
      name: 'daypart',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
  prepare(selection) {
    return {
      title: getDefaultLocalizedValue(selection.title),
    };
  },
};
