export default {
  title: 'Day-Of-Week-Band',
  name: 'day-of-week-band',
  type: 'object',
  description: 'Offer only valid on these days...',
  fields: [
    {
      title: 'Monday',
      name: 'monday',
      type: 'boolean',
    },
    {
      title: 'Tuesday',
      name: 'tuesday',
      type: 'boolean',
    },
    {
      title: 'Wednesday',
      name: 'wednesday',
      type: 'boolean',
    },
    {
      title: 'Thursday',
      name: 'thursday',
      type: 'boolean',
    },
    {
      title: 'Friday',
      name: 'friday',
      type: 'boolean',
    },
    {
      title: 'Saturday',
      name: 'saturday',
      type: 'boolean',
    },
    {
      title: 'Sunday',
      name: 'sunday',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      m: 'monday',
      tu: 'tuesday',
      w: 'wednesday',
      th: 'thursday',
      f: 'friday',
      sa: 'saturday',
      su: 'sunday',
    },
    prepare(selection) {
      return {
        title: `Days Eligible: ${selection.m ? 'M ' : ''}${selection.tu ? 'Tu ' : ''}
          ${selection.w ? 'W ' : ''}${selection.th ? 'Th ' : ''}${selection.f ? 'F ' : ''}
          ${selection.sa ? 'Sa ' : ''}${selection.su ? 'Su ' : ''}`,
      };
    },
  },
};
