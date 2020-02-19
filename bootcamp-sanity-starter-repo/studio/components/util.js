import { concat, of } from 'rxjs'; // eslint-disable-line import/no-extraneous-dependencies

export const safe = (fallback = {}) => (value) => value || fallback;
export const safeObj = safe();
export const safeAry = safe([]);
export const union = (xf = (x) => x) => (set1, set2) =>
  set1.concat(set2.filter((v) => !set1.find((q) => xf(q) === xf(v))));
export const unionOnKey = union(({ _key }) => _key);
export const unionOnValue = union(({ value }) => value);

export const observableState = (obs) => (...args) => concat(of({ loading: true }), obs(...args));

export const itemOptionQuery = (pickerId) => `
  *[_id=='${pickerId}'][0] {
    pickerAspects[]->{
      _id,
      "name": name.en
    },
    "options":
      coalesce(options[].option->[_type=='item'].options, []) +
      coalesce(options[].option->[_type=='combo'].mainItem->options, [])
  }
`;

export const filterItemOptions = (io) =>
  io.options.filter(Boolean).reduce((acc, opt) => unionOnKey(acc, opt.filter(Boolean)), []);
