export default {
  title: 'Static Strings Dictionary',
  name: 'staticStringsDictionary',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      title: 'Card Information Translations',
      name: 'cardInformationTranslations',
      type: 'cardInformationTranslations',
    },
    {
      title: 'Errors Translations',
      name: 'errorsTranslations',
      type: 'errorsTranslations',
    },
    {
      title: 'Home Screen Translations',
      name: 'homeScreenTranslations',
      type: 'homeScreenTranslations',
    },
    {
      title: 'Links Translations',
      name: 'linksTranslations',
      type: 'linksTranslations',
    },
    {
      title: 'Loyalty Translations',
      name: 'loyaltyTranslations',
      type: 'loyaltyTranslations',
    },
    {
      title: 'Multiple Screens Translations',
      name: 'multipleScreensTranslations',
      type: 'multipleScreensTranslations',
    },
    {
      title: 'Order Preparation Translations',
      name: 'orderPreparationTranslations',
      type: 'orderPreparationTranslations',
    },
    {
      title: 'Payment Screen Translations',
      name: 'paymentScreenTranslations',
      type: 'paymentScreenTranslations',
    },
    {
      title: 'User Account Translations',
      name: 'userAccountTranslations',
      type: 'userAccountTranslations',
    },
  ],
  preview: {
    select: {
      title: 'name',
      id: '_id',
    },
    prepare(selection) {
      return {
        title: `${selection.title} - ${selection.id}`,
        subtitle: 'Static Strings Dictionary',
      };
    },
  },
};
