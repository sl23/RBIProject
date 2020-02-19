export default {
  title: 'Restaurant POS Data',
  name: 'restaurantPosData',
  description: "Maintain operational data on a given restaurant's POS.",
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
      title: 'Restaurant Number',
      name: 'restaurantNumber',
      description:
        'Deprecated since restaurant numbers are strings. Unclear if this field was being used.',
      type: 'number',
      readOnly: true,
      fieldset: 'deprecated',
    },
    {
      title: 'Restaurant',
      name: 'restaurant',
      type: 'reference',
      weak: true,
      to: [{ type: 'restaurant' }],
    },
    {
      title: 'PLUs',
      name: 'plus',
      type: 'string',
      readOnly: true,
    },
    {
      title: 'Heartbeat Status',
      name: 'heartbeatStatus',
      type: 'boolean',
      description: 'Deprecated. Use the Heartbeat Override instead.',
      fieldset: 'deprecated',
      readOnly: true,
    },
    {
      title: 'Heartbeat Override',
      name: 'heartbeatOverride',
      type: 'string',
      description:
        'auto = Use timestamp; online = Override heartbeat as online; bad = Override heartbeat as offline',
      options: {
        list: ['auto', 'online', 'offline'],
      },
    },
    {
      title: 'Last Heartbeat Timestamp',
      name: 'lastHeartbeatTimestamp',
      type: 'datetime',
      readOnly: true,
      description: 'The last known successful heartbeat in UTC.',
    },
    {
      title: 'Disable Chicken Sandwich',
      name: 'disableChickenSandwich',
      type: 'boolean',
      readOnly: false,
    },
  ],
  preview: {
    select: {
      // The field restaurantNumber is deprecated.
      deprecated: 'restaurantNumber',
      id: '_id',
      restaurant: 'restaurant.number',
    },
    prepare(selection) {
      return {
        // The restaurant field has not been populated for all restaurants.
        // Fall back to the deprecated field if not populated.
        title: `${selection.restaurant ? selection.restaurant : selection.deprecated} - ${
          selection.id
        }`,
        subtitle: 'Restaurant POS Data',
      };
    },
  },
};
