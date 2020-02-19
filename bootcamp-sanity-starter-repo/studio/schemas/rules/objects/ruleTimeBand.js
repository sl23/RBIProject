export default {
  title: 'Between-Times',
  name: 'between-times',
  type: 'object',
  description: 'Offer only valid during the specified hours',
  fields: [
    {
      title: 'Start Time',
      name: 'startTime',
      type: 'string',
      description: 'Starts at...(24:00:00, UTC)',
    },
    {
      title: 'End Time',
      name: 'endTime',
      type: 'string',
      description: 'Ends at...(24:00:00, UTC)',
    },
  ],
  preview: {
    select: {
      start: 'startTime',
      end: 'endTime',
    },
    prepare(selection) {
      return {
        title: `Offer valid from ${selection.start} to ${selection.end}`,
      };
    },
  },
};
