export default {
  title: 'Store Locator Content',
  name: 'storeLocatorContent',
  type: 'object',
  fields: [
    {
      title: 'No Stores Card',
      name: 'noStoresCard',
      type: 'textCard',
      description:
        "The content that will be displayed when a user's location search does not return any results.",
    },
    {
      title: 'Find Stores Card',
      name: 'findStoresCard',
      type: 'textCard',
      description:
        "The content that will be displayed in the event the user has declined location services or the app is unable to obtain the user's location.",
    },
    {
      title: 'Search This Area button label',
      name: 'searchThisAreaButtonLabel',
      type: 'localeString',
      description:
        'The label displayed on the button the user can click to search an area after dragging the map.',
    },
    {
      title: 'Store Locator Tabs Content',
      name: 'tabsContent',
      type: 'tabsContent',
      description: 'Setup the default Title and Body text for each tab',
    },
  ],
};
