/* eslint-disable no-underscore-dangle, no-unused-vars, react/prop-types, react/jsx-filename-extension, import/no-extraneous-dependencies, import/no-unresolved */
import client from 'part:@sanity/base/client';
import Fieldset from 'part:@sanity/components/fieldsets/default';
import Spinner from 'part:@sanity/components/loading/spinner';
import Switch from 'part:@sanity/components/toggles/switch';
import { FormBuilderInput, withDocument } from 'part:@sanity/form-builder';
import { PatchEvent, set } from 'part:@sanity/form-builder/patch-event';
import React, { useEffect, useRef, useState } from 'react';
import { Subject, from } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { getDefaultLocalizedValue } from '../schemas/menu/util/languages';
import { itemOptionQuery, observableState, safeAry, safeObj, filterItemOptions } from './util';

const getRefId = (val) => safeObj(val)._ref;
const refIdsEqual = (aspect1, aspect2) => getRefId(aspect1) === getRefId(aspect2);
const getPickerAspect = (props) => safeObj(props.value).pickerAspect;

const PICKER_OPTIONS_FIELD_NAME = 'options';

const observableItemOptionsForPicker = (documentId) =>
  observableState(() =>
    from(client.fetch(itemOptionQuery(documentId))).pipe(
      map((data) => ({
        items: filterItemOptions(data),
        loading: false,
      })),
    ),
  );

function PickerItemOptionSelectInput(props) {
  const { forwardedRef, level, onBlur, onChange, onFocus, type, value = {} } = props;
  const [pickerAspectOptions, setPickerAspectOptions] = useState({});
  const subject = useRef(new Subject());

  useEffect(() => {
    const subscription = subject.current
      .pipe(
        map(getPickerAspect),
        filter(Boolean),
        distinctUntilChanged(refIdsEqual),
        switchMap(observableItemOptionsForPicker(props.document._id)),
        tap((pao) => setPickerAspectOptions(pao)),
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    subject.current.next(props);
  }, [props]);

  const onPickerAspectChange = (patchEvent) => {
    onChange(patchEvent.prefixAll('pickerAspect').prepend(set([], [PICKER_OPTIONS_FIELD_NAME])));
  };

  const onToggleItemOption = (item, included) => () => {
    const current = safeAry(value[PICKER_OPTIONS_FIELD_NAME]);
    const newItemOptions = included
      ? current.filter((io) => io.value !== item.value)
      : current.concat(item);
    onChange(PatchEvent.from(set(newItemOptions, [PICKER_OPTIONS_FIELD_NAME])));
  };

  const renderPickerAspectValues = () => {
    const { items = [], loading } = pickerAspectOptions;

    if (loading) return <Spinner />;

    const itemOptions = items.map((item) => {
      const localized = getDefaultLocalizedValue(item.name);
      const displayGroupName = getDefaultLocalizedValue(safeObj(item.displayGroup).name);
      return {
        title: `${localized}${displayGroupName ? ` - ${displayGroupName}` : ''}`,
        value: item._key,
      };
    });

    return itemOptions.map((item) => {
      // the array includes _disabled_ options, so we turn the switch on if
      // the item is not found
      const included = !!safeAry(value[PICKER_OPTIONS_FIELD_NAME]).find(
        (io) => io.value === item.value,
      );
      return (
        <Switch
          checked={!included}
          value={!included}
          description="Enable/disable the display of this item option."
          key={item.value}
          label={item.title}
          onChange={onToggleItemOption(item, included)}
        />
      );
    });
  };

  const { pickerAspect } = value;
  const optField = type.fields.find((f) => f.name === PICKER_OPTIONS_FIELD_NAME);

  return (
    <Fieldset description={type.description} legend={type.title} level={level} ref={forwardedRef}>
      <FormBuilderInput
        level={level + 1}
        onBlur={onBlur}
        onChange={onPickerAspectChange}
        onFocus={onFocus}
        path={['pickerAspect']}
        type={type.fields.find((field) => field.name === 'pickerAspect').type}
        value={pickerAspect}
      />
      <Fieldset
        description={optField.type.description}
        legend={optField.type.title}
        level={level + 1}
      >
        {renderPickerAspectValues()}
      </Fieldset>
    </Fieldset>
  );
}

export default withDocument(
  React.forwardRef((props, ref) => <PickerItemOptionSelectInput forwardedRef={ref} {...props} />),
);
