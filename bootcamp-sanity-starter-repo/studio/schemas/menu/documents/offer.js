import { getPlainText } from '../util/localeBlockContent';
import { isBK } from '../util/environment';

export default {
  title: 'Offer',
  name: 'offer',
  type: 'document',
  liveEdit: true,
  fieldsets: [
    {
      title: 'Deprecated',
      name: 'deprecated',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeBlockContent',
    },
    {
      title: 'DMB Name',
      name: 'dmbName',
      type: 'localeString',
    },
    {
      title: 'Header Super Text',
      name: 'headerSuperText',
      type: 'localeString',
    },
    {
      title: 'Localized Image',
      name: 'localizedImage',
      type: 'localeImages',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeBlockContent',
    },
    {
      title: 'More Info',
      name: 'moreInfo',
      type: 'localeBlockContent',
    },
    {
      title: 'How To Redeem',
      name: 'howToRedeem',
      type: 'localeBlockContent',
    },
    {
      title: 'Option',
      name: 'option',
      description: 'This is the benefit of the offer',
      type: 'reference',
      to: [{ type: 'item' }, { type: 'combo' }, { type: 'picker' }, { type: 'offerActivation' }],
    },
    {
      title: 'Percentage Discount?',
      name: 'percentageDiscount',
      type: 'boolean',
    },
    {
      title: 'Short Code',
      name: 'shortCode',
      type: 'string',
    },
    {
      title: 'Daypart',
      name: 'daypart',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'RuleSet',
      name: 'ruleSet',
      description: 'These conditions must be satisfied in order to use the offer',
      type: 'array',
      of: [
        { type: 'and' },
        { type: 'or' },
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
    {
      title: 'Offer Price',
      name: 'offerPrice',
      type: 'number',
    },
    {
      title: 'Market Price',
      name: 'marketPrice',
      type: 'reference',
      to: [{ type: 'item' }, { type: 'combo' }],
      description:
        'If offer should display the market price of an item (ie: BOGO) link the menu item here',
      validation: (Rule) =>
        Rule.custom((marketPrice) => {
          if (marketPrice === 'undefined') {
            return true;
          }
          return marketPrice
            ? 'Field should only be filled out if the Offer Price field above is blank'
            : true;
        }),
    },
    {
      title: 'Vendor Configs',
      name: 'vendorConfigs',
      type: 'vendorConfigs',
    },
    {
      title: 'Prices',
      name: 'prices',
      type: 'array',
      of: [
        {
          type: 'pricingRegionPrice',
        },
      ],
    },
    {
      title: 'Images',
      name: 'images',
      type: 'images',
      fieldset: 'deprecated',
    },
    {
      title: 'Image Description',
      name: 'imageDescription',
      type: 'localeString',
      fieldset: 'deprecated',
    },
    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'image',
    },
    {
      title: 'Activation Date',
      name: 'activationDate',
      type: 'date',
      fieldset: 'deprecated',
    },
    {
      title: 'Deactivation Date',
      name: 'deactivationDate',
      type: 'date',
      fieldset: 'deprecated',
    },
    {
      title: 'Offer CTA',
      description: 'Is visible to Unauthenticated users',
      name: 'offerCTA',
      type: 'linkAction',
      fieldset: 'deprecated',
    },
    {
      title: 'Requirements',
      name: 'requirements',
      description: 'Additional requirements',
      type: 'requirements',
      fieldset: 'deprecated',
    },
    {
      title: 'Must be Assigned',
      name: 'mustBeAssigned',
      description: 'This offer must be assigned to individual users',
      type: 'boolean',
      fieldset: 'deprecated',
    },
    {
      title: 'Vendor Plus',
      name: 'vendorPlus',
      type: 'vendorPlus',
      fieldset: 'deprecated',
    },
    {
      title: 'Channel Exclusions',
      name: 'channelExclusions',
      type: 'channelExclusions',
      fieldset: 'deprecated',
    },
  ],
  preview: {
    select: {
      title: 'name',
      id: '_id',
      media: 'images.app',
    },
    prepare(selection) {
      return {
        title: `${getPlainText(selection.title)} - ${selection.id}`,
        subtitle: 'Offer',
        media: selection.media,
      };
    },
  },
  // For now, BK is the only brand that has an offer background image.
  // Defaults to the orange gradient.
  initialValue: () => ({
    backgroundImage: {
      _type: 'image',
      asset: isBK
        ? {
            _type: 'reference',
            _ref: 'image-c8f5ba38b1e4d620eb9bfd6cfaeed4078633bf99-1800x400-jpg',
          }
        : null,
    },
  }),
};
