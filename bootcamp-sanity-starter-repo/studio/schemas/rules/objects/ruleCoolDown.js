export default {
  title: 'Cool-Down',
  name: 'cool-down',
  type: 'object',
  description: 'Seconds until user can redeem again',
  fields: [
    {
      title: 'Minimum Elapsed Time Seconds',
      name: 'minimumElapsedTimeSeconds',
      type: 'number',
      description: 'Cool down period in seconds',
    },
  ],
  preview: {
    select: {
      seconds: 'minimumElapsedTimeSeconds',
    },
    prepare(selection) {
      const days = Math.floor(selection.seconds / 86400);
      const hours = Math.floor((selection.seconds % 86400) / 3600);
      const minutes = Math.floor(((selection.seconds % 86400) % 3600) / 60);
      const seconds = ((selection.seconds % 86400) % 3600) % 60;

      return {
        title: `Cooldown period: ${days ? `${days.toString()} days ` : ''}
        ${hours ? `${hours.toString()} hours ` : ''}
        ${minutes ? `${minutes.toString()} mintues ` : ''}
        ${seconds ? `${seconds.toString()} seconds ` : ''}`,
      };
    },
  },
};
