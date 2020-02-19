const range = (n) => new Array(n).fill(0).map((_, i) => i);

const getOptionsKey = (n) => `itemOption${n}`;
const getNameKey = (n) => `itemName${n}`;
const getSelectedIdentifierKey = (n) => `identifier${n}`;

export const createPickerOptionsPreviewMapping = (count) => {
  const selection = range(count).reduce((res, n) => ({ ...res, ...createItemSelection(n) }), {});
  const extract = (selection) =>
    range(count)
      .map((n) => extractItemMapping(selection, n))
      .filter(Boolean);
  return { selection, extract };
};

const extractItemMapping = (values, n) => {
  const nameKey = getNameKey(n);
  const optionsKey = getOptionsKey(n);
  const selectedIdentifierKey = getSelectedIdentifierKey(n);

  const name = values[nameKey];
  const options = values[optionsKey] || [];
  const selectedIdentifier = values[selectedIdentifierKey];
  const value = options.find((option) => option.identifier === selectedIdentifier);

  return (
    name && {
      name,
      value,
    }
  );
};

const createItemSelection = (n) => {
  return {
    [getOptionsKey(n)]: `pickerItemMappings.${n}.pickerAspect.pickerAspectOptions`,
    [getNameKey(n)]: `pickerItemMappings.${n}.pickerAspect.name`,
    [getSelectedIdentifierKey(n)]: `pickerItemMappings.${n}.pickerAspectValueIdentifier`,
  };
};
