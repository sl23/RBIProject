export default {
  title: 'Or',
  name: 'or',
  type: 'object',
  description: 'One of the following rules must be true',
  fields: [
    {
      title: 'RuleSet',
      name: 'ruleSet',
      type: 'array',
      of: [
        { type: 'between-dates' },
        { type: 'limit' },
        { type: 'day-of-week-band' },
        { type: 'between-times' },
        { type: 'cool-down' },
        { type: 'cart-property' },
        { type: 'purchase' },
        { type: 'first-order-only' },
        { type: 'allow-redemption-without-login' },
        { type: 'requires-assignment' },
      ],
    },
  ],
};
