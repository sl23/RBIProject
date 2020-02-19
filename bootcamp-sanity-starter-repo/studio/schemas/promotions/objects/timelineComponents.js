export default {
  title: 'Timeline Components',
  name: 'timelineComponents',
  type: 'object',
  fields: [
    {
      title: 'Key',
      name: 'key',
      type: 'string',
    },
    {
      title: 'State',
      name: 'state',
      type: 'string',
      options: {
        list: ['claimed', 'unclaimed'],
      },
    },
    {
      title: 'Timeline Event Type',
      name: 'timelineEventType',
      type: 'string',
      options: {
        list: ['roll', 'prize', 'ballot', 'shared', 'claimed'],
      },
    },
    {
      title: 'Timeline Header',
      name: 'timelineHeader',
      type: 'localeString',
    },
    {
      title: 'Header Color',
      name: 'headerColor',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeString',
    },
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'localeString',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'localeImages',
    },
  ],
};
