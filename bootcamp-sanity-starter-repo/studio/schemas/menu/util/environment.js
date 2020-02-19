import client from 'part:@sanity/base/client';

// Our dataset naming convention is ${ENVIRONMENT}_${BRAND}_${COUNTRY}
// NOTE!!! Country is optional and the default market currently does not include it.
// SO (US for BK & PLK) and (CA for TH) do not have country.
const dataset = client.clientConfig.dataset.split('_');

export const DEFAULT_MARKETS = {
  automation: 'us',
  bk: 'us',
  plk: 'us',
  th: 'ca',
};

export const ENV = dataset[0];
export const BRAND = dataset[1];
export const COUNTRY = dataset.length > 2 ? dataset[2] : DEFAULT_MARKETS[BRAND];

export const isBK = BRAND === 'bk';
export const isPLK = BRAND === 'plk';
export const isTH = BRAND === 'th';

export const isDev = ENV === 'dev';
export const isStaging = ENV === 'staging';
export const isQA = ENV === 'qa';
export const isProd = ENV === 'prod';
export const isTest = ENV === 'test';
