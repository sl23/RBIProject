import { getDefaultLocalizedValue } from '../util/languages';
// eslint-disable-next-line import/named
import { PickerItemMappingInput } from '../../../components/PickerItemMappingInput';

export default {
  title: 'Picker Item Mapping',
  name: 'pickerItemMapping',
  type: 'object',
  fields: [
    {
      title: 'Picker Aspect',
      name: 'pickerAspect',
      type: 'reference',
      to: [{ type: 'pickerAspect' }],
    },
    {
      title: 'Picker Aspect Value',
      name: 'pickerAspectValueIdentifier',
      type: 'string',
    },
  ],
  preview: {
    select: {
      pickerAspect: 'pickerAspect.name',
      pickerAspectValueIdentifier: 'pickerAspectValueIdentifier',
    },
    prepare(selection) {
      return {
        title: getDefaultLocalizedValue(selection.pickerAspect),
        subtitle: selection.pickerAspectValueIdentifier,
      };
    },
  },

  inputComponent: PickerItemMappingInput,
};
