export default {
  title: 'Allow Redemption Without Login',
  name: 'allow-redemption-without-login',
  type: 'object',
  description: 'Allow redemption to unauthenticated users',
  fields: [
    {
      title: 'Allow Redemption Without Login',
      name: 'allowRedemptionWithoutLogin',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: "User doesn't have to be logged in",
      };
    },
  },
};
