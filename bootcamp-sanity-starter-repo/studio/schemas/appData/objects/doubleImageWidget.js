import { getDefaultLocalizedValue } from '../../menu/util/languages';

export default {
  title: 'Double Image Widget',
  name: 'doubleImageWidget',
  type: 'object',
  fields: [
    {
      title: 'Image 1',
      name: 'image1',
      type: 'imageWidget',
    },
    {
      title: 'Image 2',
      name: 'image2',
      type: 'imageWidget',
    },
  ],
  preview: {
    select: {
      image1: 'image1',
      image2: 'image2',
    },
    prepare(selection) {
      return {
        title: 'Double Image Widget',
        subtitle: `${getDefaultLocalizedValue(
          selection.image1.caption,
        )} / ${getDefaultLocalizedValue(selection.image2.caption)}`,
        media: getDefaultLocalizedValue(selection.image1.image),
      };
    },
  },
};
