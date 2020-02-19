/* eslint-disable no-underscore-dangle, no-unused-vars, react/prop-types, react/jsx-filename-extension, import/no-extraneous-dependencies, import/no-unresolved */
import client from 'part:@sanity/base/client';
import Fieldset from 'part:@sanity/components/fieldsets/default';
import Spinner from 'part:@sanity/components/loading/spinner';
import Switch from 'part:@sanity/components/toggles/switch';
import SearchableSelect from 'part:@sanity/components/selects/searchable';
import { withDocument } from 'part:@sanity/form-builder';
import { PatchEvent, set } from 'part:@sanity/form-builder/patch-event';
import { observePaths } from 'part:@sanity/base/preview';
import React, { useEffect, useRef, useState } from 'react';
import { Subject, from } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { getDefaultLocalizedValue } from '../schemas/menu/util/languages';
import { itemOptionQuery, observableState, safeAry, filterItemOptions, unionOnValue } from './util';

const ITEM_OPTION_FIELD_NAME = 'itemOptions';
const MODIFIER_FIELD_NAME = 'modifier';

const observableItemOptionsForPicker = (documentId) =>
  observableState(() =>
    from(client.fetch(itemOptionQuery(documentId))).pipe(
      map((data) => ({
        items: filterItemOptions(data),
        loading: false,
      })),
    ),
  );

function QuickConfigRuleInput(props) {
  const { document, forwardedRef, level, onChange, type, value = {} } = props;
  const [pickerItemOptions, setPickerItemOptions] = useState({});
  const [itemOptionModifiers, setItemOptionModifiers] = useState([]);
  const [modifierSuggestions, setSuggestions] = useState([]);
  const itemOptsSubject = useRef(new Subject());
  const modifiersSubject = useRef(new Subject());
  const modifierSearchSubject = useRef(new Subject());

  useEffect(() => {
    const itemOptionSubscription = itemOptsSubject.current
      .pipe(
        switchMap(observableItemOptionsForPicker(document._id)),
        tap(setPickerItemOptions),
      )
      .subscribe();

    const modifierSubscription = modifiersSubject.current
      .pipe(
        map(([pickerItemOpts, current]) =>
          safeAry(pickerItemOpts).reduce((acc, { name, options, _key }) => {
            if (!safeAry(current).find(({ value: v }) => v === _key)) return acc;
            const localized = getDefaultLocalizedValue(name).replace(/(.*) for .*/, '$1');

            return unionOnValue(
              acc,
              options.map(({ _key: modifierKey }) => ({
                title: `${localized} x${modifierKey
                  .replace(/modifierMultiplier_(\d*-?\d*).*/, '$1')
                  .replace(/(\d*)-?(\d*)/, '$1.$2')}`,
                value: modifierKey,
              })),
            );
          }, []),
        ),
        tap(setItemOptionModifiers),
      )
      .subscribe();

    const searchTermSubscription = modifierSearchSubject.current
      .pipe(
        map(({ term, modifiers }) =>
          modifiers.filter(({ title }) =>
            term.split(' ').every((t) => title.toLowerCase().includes(t.toLowerCase())),
          ),
        ),
        tap(setSuggestions),
      )
      .subscribe();

    return () => {
      itemOptionSubscription.unsubscribe();
      modifierSubscription.unsubscribe();
      searchTermSubscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    itemOptsSubject.current.next(props);
  }, [document]);

  useEffect(() => {
    modifiersSubject.current.next([
      safeAry(pickerItemOptions.items),
      value[ITEM_OPTION_FIELD_NAME],
    ]);
  }, [pickerItemOptions.items, value[ITEM_OPTION_FIELD_NAME]]);

  const onSearchModifier = (term) => {
    modifierSearchSubject.current.next({ term, modifiers: itemOptionModifiers });
  };

  const onToggleItemOption = (item, included) => () => {
    const current = safeAry(value[ITEM_OPTION_FIELD_NAME]);
    const newItemOptions = included
      ? current.filter((io) => io.value !== item.value)
      : current.concat(item);
    onChange(PatchEvent.from(set(newItemOptions, [ITEM_OPTION_FIELD_NAME])));
  };

  const renderPickerItemOptions = () => {
    if (pickerItemOptions.loading) return <Spinner />;

    const { items = [] } = pickerItemOptions;

    const itemOptions = items.map((item) => ({
      title: getDefaultLocalizedValue(item.name),
      value: item._key,
    }));

    return itemOptions
      .sort((left, right) => (left.title > right.title ? 1 : -1))
      .map((item) => {
        const included = !!safeAry(value[ITEM_OPTION_FIELD_NAME]).find(
          (io) => io.value === item.value,
        );
        return (
          <Switch
            checked={included}
            value={included}
            description="Include this item option on this quick config rule."
            key={item.value}
            label={item.title}
            onChange={onToggleItemOption(item, included)}
          />
        );
      });
  };

  const onSelectModifier = (modifier) => {
    onChange(PatchEvent.from(set(modifier, [MODIFIER_FIELD_NAME])));
  };

  const optField = type.fields.find((f) => f.name === ITEM_OPTION_FIELD_NAME);

  const modifierField = type.fields.find((f) => f.name === MODIFIER_FIELD_NAME);

  return (
    <Fieldset description={type.description} legend={type.title} level={level} ref={forwardedRef}>
      <Fieldset
        description={optField.type.description}
        legend={optField.type.title}
        level={level + 1}
      >
        {renderPickerItemOptions()}
      </Fieldset>
      <Fieldset
        description={modifierField.type.description}
        legend={modifierField.type.title}
        level={level + 1}
      >
        <SearchableSelect
          inputValue={value[MODIFIER_FIELD_NAME] ? value[MODIFIER_FIELD_NAME].title : ''}
          items={modifierSuggestions}
          label="Select the modifier that applies for this rule"
          onChange={onSelectModifier}
          onSearch={onSearchModifier}
          value={value[MODIFIER_FIELD_NAME]}
          renderItem={({ title, value: v }) => <span key={v}>{title}</span>}
        />
      </Fieldset>
    </Fieldset>
  );
}

export default withDocument(
  React.forwardRef((props, ref) => <QuickConfigRuleInput forwardedRef={ref} {...props} />),
);
