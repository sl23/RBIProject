export default {
  title: 'App Data',
  name: 'appData',
  type: 'document',
  liveEdit: true,
  fieldsets: [
    {
      title: 'Disclaimers',
      name: 'disclaimers',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Menu Configurations',
      name: 'menuConfigurations',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'MetaData Configurations',
      name: 'metaDataConfigurations',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Kiosk App Data',
      name: 'kioskAppDataConfigurations',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Deprecated',
      name: 'deprecated',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    /**
     * Menu Configurations
     */
    {
      title: 'Default Menu',
      name: 'defaultMenu',
      fieldset: 'menuConfigurations',
      type: 'reference',
      to: [{ type: 'menu' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Catering Menu',
      name: 'cateringMenu',
      fieldset: 'menuConfigurations',
      type: 'reference',
      to: [{ type: 'menu' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Upsell Item at Checkout',
      name: 'upsellItemAtCheckout',
      fieldset: 'deprecated',
      type: 'reference',
      to: [{ type: 'item' }],
    },
    {
      title: 'Upsell Items at Checkout',
      name: 'upsellItemsAtCheckout',
      description: 'List of items that should show up as a upsell on the checkout page.',
      fieldset: 'menuConfigurations',
      type: 'array',
      of: [
        {
          title: 'Upsell Item',
          name: 'item',
          type: 'reference',
          to: [{ type: 'item' }],
        },
      ],
    },
    {
      title: 'Section for Catering Home Screen Link',
      name: 'cateringSection',
      fieldset: 'menuConfigurations',
      type: 'reference',
      to: [{ type: 'section' }],
    },
    {
      title: 'Promotions',
      name: 'promotions',
      fieldset: 'menuConfigurations',
      type: 'array',
      of: [
        {
          title: 'Combo',
          name: 'combo',
          type: 'reference',
          to: [{ type: 'combo' }],
        },
        {
          title: 'Item',
          name: 'item',
          type: 'reference',
          to: [{ type: 'item' }],
        },
        {
          title: 'Section',
          name: 'section',
          type: 'reference',
          to: [{ type: 'section' }],
        },
        {
          title: 'Picker',
          name: 'picker',
          type: 'reference',
          to: [{ type: 'picker' }],
        },
        {
          title: 'Offer',
          name: 'offer',
          type: 'reference',
          to: [{ type: 'offer' }],
        },
        {
          title: 'External Link',
          name: 'externalLink',
          type: 'externalLink',
        },
      ],
    },
    {
      title: 'Fan Favorite Items',
      name: 'fanFavoriteItems',
      fieldset: 'deprecated',
      type: 'array',
      of: [
        {
          title: 'Combo',
          name: 'combo',
          type: 'reference',
          to: [{ type: 'combo' }],
        },
        {
          title: 'Item',
          name: 'item',
          type: 'reference',
          to: [{ type: 'item' }],
        },
        {
          title: 'Section',
          name: 'section',
          type: 'reference',
          to: [{ type: 'section' }],
        },
        {
          title: 'Picker',
          name: 'picker',
          type: 'reference',
          to: [{ type: 'picker' }],
        },
        {
          title: 'Offer',
          name: 'offer',
          type: 'reference',
          to: [{ type: 'offer' }],
        },
      ],
    },
    {
      title: 'Sorted Offers',
      name: 'sortedOffers',
      description: 'The sorted list of offers that should show up on the Offers page.',
      fieldset: 'menuConfigurations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'offer' }] }],
    },
    {
      title: 'Day Parts',
      name: 'dayParts',
      description: 'This is a list of all the dayparts and the local times they are avaialble.',
      fieldset: 'menuConfigurations',
      type: 'array',
      of: [{ type: 'dayPart' }],
    },
    /**
     * MetaData Configurations
     */
    {
      title: 'App Version',
      name: 'appVersion',
      fieldset: 'metaDataConfigurations',
      type: 'reference',
      to: [{ type: 'appVersion' }],
    },
    {
      title: 'Email And Push Opt In Settings',
      name: 'emailAndPushOptInSettings',
      description: 'This is a sorted list of all of the preferences we will display to the user.',
      fieldset: 'metaDataConfigurations',
      // readOnly: true, // TODO: set this to readOnly once these are defined
      type: 'array',
      of: [
        { type: 'optInSettingBoolean' },
        { type: 'optInSettingEnum' },
        { type: 'optInSettingEmailAndPush' },
      ],
    },
    /**
     * Kiosk App Data
     */
    {
      title: 'Kiosk App Data',
      name: 'kioskAppData',
      fieldset: 'kioskAppDataConfigurations',
      type: 'reference',
      to: [{ type: 'kioskAppData' }],
    },
    /**
     * TODO: organize appropriately (determine if objects should be used)
     */
    {
      title: 'Main Hero Image',
      description: 'Is visible to Unauthenticated users',
      name: 'mainHeroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Main Hero Image Locale',
      description: 'Is visible to Unauthenticated users',
      name: 'mainHeroImageLocale',
      type: 'localeImage',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Main Hero Mobile Image',
      description: 'Is visible to Unauthenticated users',
      name: 'mainHeroMobileImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Main Hero Image Authenticated',
      description: 'Is visible to Authenticated users',
      name: 'mainHeroImageAuthenticated',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Main Hero Image Authenticated Locale',
      description: 'Is visible to Authenticated users',
      name: 'mainHeroImageAuthenticatedLocale',
      type: 'localeImage',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Our Services Hero Image',
      name: 'ourServicesHeroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Our Services Hero Image Locale',
      name: 'ourServicesHeroImageLocale',
      type: 'localeImage',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Our App Hero Image',
      name: 'ourAppHeroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Our App Hero Image Locale',
      name: 'ourAppHeroImageLocale',
      type: 'localeImage',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'App Image',
      name: 'appImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'App Image Locale',
      name: 'appImageLocale',
      type: 'localeImage',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Menu Hero Image',
      name: 'menuHeroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Menu Hero Image Locale',
      name: 'menuHeroImageLocale',
      type: 'localeImage',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Default Hero Image',
      name: 'defaultHeroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Default Hero Image Locale',
      name: 'defaultHeroImageLocale',
      type: 'localeImage',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Kiosk Attract Loop Image',
      name: 'kioskAttractLoopImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Kiosk Attract Loop Image Locale',
      name: 'kioskAttractLoopImageLocale',
      type: 'localeImage',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Header Text',
      name: 'headerText',
      type: 'string',
    },
    {
      title: 'Hero Super Text',
      name: 'heroSuperText',
      type: 'localeString',
    },
    {
      title: 'Hero Text',
      description: 'Is visible to Unauthenticated users',
      name: 'heroText',
      type: 'string',
    },
    {
      title: 'Hero Text Locale',
      description: 'Is visible to Unauthenticated users',
      name: 'heroTextLocale',
      type: 'localeString',
    },
    {
      title: 'Hero Action',
      description: 'Is visible to Unauthenticated users',
      name: 'heroAction',
      type: 'linkAction',
    },
    {
      title: 'Hero Sub Text',
      description: 'Is visible to Unauthenticated users',
      name: 'heroSubText',
      type: 'localeString',
    },
    {
      title: 'Hero Super Text Authenticated',
      description: 'Is visible to Authenticated users',
      name: 'heroSuperTextAuthenticated',
      type: 'localeString',
    },
    {
      title: 'Hero Text Authenticated',
      description: 'Is visible to Authenticated users',
      name: 'heroTextAuthenticated',
      type: 'string',
    },
    {
      title: 'Hero Text Authenticated Locale',
      description: 'Is visible to Authenticated users',
      name: 'heroTextAuthenticatedLocale',
      type: 'localeString',
    },
    {
      title: 'Hero Action Authenticated',
      description: 'Is visible to Authenticated users',
      name: 'heroActionAuthenticated',
      type: 'linkAction',
    },
    {
      title: 'Hero Sub Text Authenticated',
      description: 'Is visible to Authenticated users',
      name: 'heroSubTextAuthenticated',
      type: 'localeString',
    },
    {
      title: 'Hero Mask Cards',
      description: 'Is visible to both Authenticated and Unauthenticated users',
      name: 'heroMaskCards',
      type: 'array',
      of: [{ type: 'simpleCard' }],
    },
    {
      title: 'Loyalty Header Background Image',
      description: 'Background Image for Loyalty Header on Mobile',
      name: 'loyaltyHeaderBackgroundImage',
      type: 'image',
    },
    {
      title: 'Loyalty Hero Super Text',
      description: 'Is used in the Loyalty Hero on Mobile',
      name: 'loyaltyHeroSuperText',
      type: 'localeString',
    },
    {
      title: 'Loyalty Hero Sub Text',
      description: 'Is used in the Loyalty Hero on Mobile',
      name: 'loyaltyHeroSubText',
      type: 'localeString',
    },
    {
      title: 'Loyalty Hero Action',
      description: 'Is used in the Loyalty Hero on Mobile',
      name: 'loyaltyHeroAction',
      type: 'linkAction',
    },
    {
      title: 'Favorite Section',
      name: 'favoriteSection',
      type: 'favoriteSection',
    },
    {
      title: 'Services Header Text',
      name: 'servicesHeaderText',
      type: 'string',
    },
    {
      title: 'Services Hero Text',
      name: 'servicesHeroText',
      type: 'string',
    },
    {
      title: 'App Header Text',
      name: 'appHeaderText',
      type: 'string',
    },
    {
      title: 'Menu Hero Text',
      name: 'menuHeroText',
      type: 'string',
    },
    {
      title: 'Recent Order Hero Text',
      name: 'recentOrderHeroText',
      type: 'string',
      fieldset: 'deprecated',
    },
    {
      title: 'Recent Order Hero Text Locale',
      name: 'recentOrderHeroTextLocale',
      type: 'localeString',
    },
    {
      title: 'Super Upsell Disclaimer',
      name: 'superUpsellDisclaimer',
      type: 'localeBlockContent',
      fieldset: 'disclaimers',
    },
    {
      title: 'Calorie Disclaimer',
      name: 'calorieDisclaimer',
      type: 'localeBlockContent',
      fieldset: 'disclaimers',
    },
    {
      title: 'Sodium Disclaimer',
      name: 'sodiumDisclaimer',
      type: 'localeBlockContent',
      fieldset: 'disclaimers',
    },
    {
      title: 'Price Disclaimer',
      name: 'priceDisclaimer',
      type: 'localeString',
      fieldset: 'disclaimers',
    },
    {
      title: 'Images Disclaimer',
      name: 'imagesDisclaimer',
      type: 'localeString',
      fieldset: 'disclaimers',
    },
    {
      title: 'Phone Number Disclaimer',
      name: 'phoneNumberDisclaimer',
      type: 'localeString',
      fieldset: 'disclaimers',
    },
    {
      title: 'Country Disclaimer',
      name: 'countryDisclaimer',
      type: 'localeString',
      fieldset: 'disclaimers',
    },
    {
      title: 'Offers Disclaimer',
      name: 'offersDisclaimer',
      type: 'localeString',
      fieldset: 'disclaimers',
    },
    {
      title: 'Communication Preferences Disclaimer',
      name: 'communicationPreferencesDisclaimer',
      type: 'localeString',
      fieldset: 'deprecated',
    },
    {
      title: 'Communication Preferences Disclaimer Block',
      name: 'communicationPreferencesDisclaimerBlock',
      type: 'localeBlockContent',
      fieldset: 'disclaimers',
    },
    {
      title: 'Home Graphic',
      name: 'homeGraphic',
      type: 'homeGraphic',
    },
    {
      title: 'Loading Graphics',
      name: 'loadingGraphics',
      type: 'loadingGraphics',
    },
    {
      title: 'Geolocation Modal Image',
      name: 'geolocationModalImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Geolocation Modal Image Locale',
      name: 'geolocationModalImageUseLocale',
      type: 'localeImage',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Store Locator Content',
      name: 'storeLocatorContent',
      type: 'storeLocatorContent',
    },
    {
      title: 'App Download Section',
      name: 'appDownloadSection',
      type: 'appDownloadSection',
    },
    {
      title: 'Apple Wallet Image',
      name: 'appleWalletImage',
      type: 'localeImage',
    },
    {
      title: 'Google Pay Image',
      name: 'googlePayImage',
      type: 'localeImage',
    },
    {
      title: 'Gift Card Image',
      name: 'giftCardImage',
      type: 'localeImage',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Gift Card Text Image',
      name: 'giftCardTextImage',
      type: 'localeImage',
    },
    {
      title: 'Loyalty Card Image',
      name: 'loyaltyCardImage',
      type: 'localeImage',
      fieldset: 'deprecated',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Loyalty Info Image',
      description: 'Image explaining redeemable items',
      name: 'loyaltyInfoImage',
      type: 'localeImage',
      fieldset: 'deprecated',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Rewards Main Image',
      name: 'rewardsMainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Rewards Main Image Locale',
      name: 'rewardsMainImageLocale',
      type: 'localeImage',
    },
    {
      title: 'About Menu Entries',
      name: 'aboutMenuEntries',
      type: 'navigationSection',
    },
    {
      title: 'Content Cards Header',
      name: 'contentCardsHeader',
      type: 'localeString',
    },
    {
      title: 'Content Cards Subheader',
      name: 'contentCardsSubheader',
      type: 'localeString',
    },
  ],
};
