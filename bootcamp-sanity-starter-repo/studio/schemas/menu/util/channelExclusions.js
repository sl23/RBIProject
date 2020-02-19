const channels = [
  { id: 'web', title: 'Web' },
  { id: 'kiosk', title: 'Kiosk' },
  { id: 'mobile', title: 'Mobile' },
  { id: 'delivery', title: 'Delivery' },
];

export default {
  title: 'Channel Exclusions',
  name: 'channelExclusions',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: channels.map((exclusions) => ({
    title: exclusions.title,
    name: exclusions.id,
    type: 'boolean',
  })),
};
