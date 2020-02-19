export default {
  title: 'Between-Dates',
  name: 'between-dates',
  type: 'object',
  description: 'Offer only valid between the specified dates',
  fields: [
    {
      title: 'Start Date',
      name: 'startDate',
      type: 'date',
      description: 'Starts on...',
    },
    {
      title: 'End Date',
      name: 'endDate',
      type: 'date',
      description: 'Ends on...',
    },
  ],
  preview: {
    select: {
      start: 'startDate',
      end: 'endDate',
    },
    prepare(selection) {
      return {
        title: `Offer valid from ${selection.start} to ${selection.end}`,
      };
    },
  },
};
