/* eslint-disable no-unused-vars, no-underscore-dangle */
// eslint-disable-next-line import/no-unresolved
import { getDefaultLocalizedValue } from '../util/languages';
import PickerItemOptionSelectInput from '../../../components/PickerItemOptionSelectInput';

export default {
  title: 'Picker Aspect Item Options',
  name: 'pickerAspectItemOptions',
  type: 'object',
  fields: [
    {
      title: 'Picker Aspect',
      name: 'pickerAspect',
      type: 'reference',
      to: [{ type: 'pickerAspect' }],
    },
    {
      title: 'Options',
      name: 'options',
      description:
        "This contains the list of ItemOptions (or Modifier) '_keys' that should not be displayed from the Picker when the PickerAspect above is selected",
      type: 'array',
      of: [{ type: 'listItem' }],
    },
  ],
  preview: {
    select: {
      pickerAspect: 'pickerAspect.name',
      options: 'options',
    },
    prepare: (selection) => ({
      title: getDefaultLocalizedValue(selection.pickerAspect),
      subtitle: (selection.options || []).map((io) => `${io.title}`).join(', '),
    }),
  },
  inputComponent: PickerItemOptionSelectInput,
};
