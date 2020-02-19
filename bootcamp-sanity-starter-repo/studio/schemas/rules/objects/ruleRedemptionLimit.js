export default {
  title: 'Limit',
  name: 'limit',
  type: 'object',
  description: `This indicates how many times this coupon can be redeemed. If 0, no redemption limit.`,
  fieldsets: [
    {
      title: 'Deprecated',
      name: 'deprecated',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      title: 'Maximum Redemptions',
      name: 'maximumRedemptions',
      type: 'number',
    },
    {
      title: 'Interval',
      name: 'interval',
      description: 'Maximum redemptions refresh every...',
      type: 'string',
      options: {
        list: ['day', 'week', 'month', 'year'],
      },
    },
    {
      title: 'Limit Interval',
      name: 'limitInterval',
      description: 'Maximum redemptions refresh every...',
      type: 'string',
      options: {
        list: ['day', 'week', 'month', 'year'],
      },
      fieldset: 'deprecated',
    },
    {
      title: 'Multiplier',
      name: 'multiplier',
      type: 'number',
      fieldset: 'deprecated',
    },
    {
      title: 'Reset At',
      name: 'resetAt',
      description: 'time format: 24:00:00 UTC',
      type: 'string',
      fieldset: 'deprecated',
    },
  ],
  preview: {
    select: {
      limit: 'maximumRedemptions',
      interval: 'interval',
    },
    prepare(selection) {
      return {
        title: `Number of uses until the next ${selection.interval} : ${
          selection.limit ? selection.limit : 'unlimited'
        }`,
      };
    },
  },
};
