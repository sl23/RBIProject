import { BRAND } from '../util/environment';

const dayPartByBrand = {
  automation: ['lunch', 'allday', 'All', 'Breakfast', 'Main Menu'],
  bk: ['All', 'Breakfast', 'Main Menu'],
  plk: ['breakfast', 'lunch', 'allDay'],
  th: ['th'], // TODO: @JAMIE SET THIS
};

const minuteHourRegex = /^(0?\d|1\d|2[0-3]):[0-5]\d$/;

export default {
  title: 'Day Part',
  name: 'dayPart',
  type: 'object',
  liveEdit: true,
  fields: [
    {
      title: 'Key',
      name: 'key',
      type: 'string',
      options: {
        list: dayPartByBrand[BRAND],
      },
    },
    {
      title: 'Start Time',
      name: 'startTime',
      type: 'string',
      validation: (Rule) => Rule.required().regex(minuteHourRegex, { name: '00:00 to 23:59' }),
    },
    {
      title: 'End Time',
      name: 'endTime',
      type: 'string',
      validation: (Rule) => Rule.required().regex(minuteHourRegex, { name: '00:00 to 23:59' }),
    },
  ],
  preview: {
    select: {
      key: 'key',
      start: 'startTime',
      end: 'endTime',
    },
    prepare(selection) {
      return {
        title: `${selection.key} (${selection.start} - ${selection.end})`,
      };
    },
  },
};
