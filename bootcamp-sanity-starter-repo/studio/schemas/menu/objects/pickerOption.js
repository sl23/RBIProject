import { getDefaultLocalizedValue } from '../util/languages';
import { createPickerOptionsPreviewMapping } from '../util/pickerOptionsPreview';

const pickerItemMappings = createPickerOptionsPreviewMapping(3);

export default {
  title: 'Picker Option',
  name: 'pickerOption',
  type: 'object',
  fields: [
    {
      title: 'Picker Item Mappings',
      name: 'pickerItemMappings',
      type: 'array',
      of: [
        {
          type: 'pickerItemMapping',
        },
      ],
    },
    {
      title: 'Option',
      name: 'option',
      type: 'reference',
      to: [{ type: 'combo' }, { type: 'item' }],
    },
    {
      title: 'Default',
      name: 'default',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      item: 'option.name',
      type: 'option._type',
      default: 'default',
      ...pickerItemMappings.selection,
    },
    prepare(values) {
      const items = pickerItemMappings.extract(values);
      return {
        title: `${values.default ? '*' : ''} ${getDefaultLocalizedValue(values.item)} + (${
          values.type
        })`,
        subtitle: items
          .filter(Boolean)
          .map(
            (item) =>
              `${getDefaultLocalizedValue(item.name)}: ${
                item.value ? getDefaultLocalizedValue(item.value.name) : 'n/a'
              }`,
          )
          .join(', '),
      };
    },
  },
};
