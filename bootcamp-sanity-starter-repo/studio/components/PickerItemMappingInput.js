import * as React from 'react';
import { FormBuilderInput } from 'part:@sanity/form-builder';
import Fieldset from 'part:@sanity/components/fieldsets/default';
import { PatchEvent, set, setIfMissing, unset } from 'part:@sanity/form-builder/patch-event';
import { observePaths } from 'part:@sanity/base/preview';
import { concat, of as observableOf, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import Select from 'part:@sanity/components/selects/default';
import Spinner from 'part:@sanity/components/loading/spinner';
import FormField from 'part:@sanity/components/formfields/default';
import { getDefaultLocalizedValue } from '../schemas/menu/util/languages';

const getRefId = (val) => (val || {})._ref;

const PICKER_ASPECT_FIELD_NAME = 'pickerAspectValueIdentifier';

export class PickerItemMappingInput extends React.Component {
  state = { pickerAspectOptions: {} };
  props$ = new Subject();

  componentDidMount() {
    this.subscription = this.props$
      .pipe(
        map((props) => (props.value || {}).pickerAspect),
        filter(Boolean),
        distinctUntilChanged(
          (prevpickerAspect, pickerAspect) => getRefId(prevpickerAspect) === getRefId(pickerAspect),
        ),
        switchMap((pickerAspect) =>
          concat(
            observableOf({ isLoading: true }),
            observePaths(pickerAspect, ['pickerAspectOptions']).pipe(
              map((pickerAspect) => ({
                isLoading: false,
                items: pickerAspect.pickerAspectOptions,
              })),
            ),
          ),
        ),
        tap((pickerAspectOptions) => this.setState({ pickerAspectOptions })),
      )
      .subscribe();

    this.props$.next(this.props);
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  handlepickerAspectChange = (patchEvent) => {
    this.props.onChange(
      patchEvent.prefixAll('pickerAspect').prepend(unset([PICKER_ASPECT_FIELD_NAME])),
    );
  };
  handlepickerAspectValueChange = (selected) => {
    this.props.onChange(PatchEvent.from(set(selected.value, [PICKER_ASPECT_FIELD_NAME])));
  };

  componentWillReceiveProps(nextProps) {
    this.props$.next(nextProps);
  }

  renderSelectpickerAspectValues() {
    const { pickerAspectOptions } = this.state;

    const { value = {}, type, level } = this.props;
    const { pickerAspect } = value;
    const { isLoading, items } = pickerAspectOptions;

    if (isLoading) {
      return <Spinner />;
    }

    const selectedId = value[PICKER_ASPECT_FIELD_NAME];
    const selectItems = (items || []).map((item) => {
      const localizedName = getDefaultLocalizedValue(item.name);
      return {
        title: item.identifier
          ? localizedName
          : `No identifier set on picker aspect value for "${localizedName}".`,
        value: item.identifier,
      };
    });
    const selectedItem =
      selectedId && selectItems.find((selectItem) => selectItem.value === selectedId);
    const selectedpickerAspectField = type.fields.find(
      (field) => field.name === PICKER_ASPECT_FIELD_NAME,
    );
    return (
      <FormField
        level={level + 1}
        label={selectedpickerAspectField.type.title}
        description={selectedpickerAspectField.type.description}
      >
        <Select
          value={selectedItem}
          onChange={this.handlepickerAspectValueChange}
          items={
            selectedItem
              ? selectItems
              : [{ title: pickerAspect ? 'Select…' : 'Select pickerAspect first…' }].concat(
                  selectItems,
                )
          }
        />
      </FormField>
    );
  }

  render() {
    const { type, value, level, focusPath, onFocus, onBlur } = this.props;
    const { pickerAspect } = value || {};
    return (
      <Fieldset level={level} legend={type.title} description={type.description}>
        <FormBuilderInput
          value={pickerAspect}
          onChange={this.handlepickerAspectChange}
          path={['pickerAspect']}
          onFocus={onFocus}
          onBlur={onBlur}
          level={level + 1}
          focusPath={focusPath}
          type={type.fields.find((field) => field.name === 'pickerAspect').type}
        />
        {this.renderSelectpickerAspectValues()}
      </Fieldset>
    );
  }
}
