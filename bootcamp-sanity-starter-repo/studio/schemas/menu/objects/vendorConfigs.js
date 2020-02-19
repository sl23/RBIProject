import { BRAND } from '../util/environment';

const SICOM = { title: 'Sicom', name: 'sicom' };
const SICOM_DELIVERY = { title: 'Sicom Delivery', name: 'sicomDelivery' };
const NCR = { title: 'NCR', name: 'ncr' };
const NCR_DELIVERY = { title: 'NCR Delivery', name: 'ncrDelivery' };
const CARROLS = { title: 'Carrols', name: 'carrols' };
const CARROLS_DELIVERY = { title: 'Carrols Delivery', name: 'carrolsDelivery' };
const QST = { title: 'QST', name: 'qst' };
const PRODUCT_NUMBER = { title: 'Product Number', name: 'productNumber' };

const posByBrand = {
  automation: [SICOM, SICOM_DELIVERY, NCR, NCR_DELIVERY, PRODUCT_NUMBER, CARROLS, CARROLS_DELIVERY],
  bk: [SICOM, SICOM_DELIVERY, NCR, NCR_DELIVERY, CARROLS, CARROLS_DELIVERY],
  plk: [SICOM, SICOM_DELIVERY, NCR, NCR_DELIVERY],
  th: [SICOM, QST, PRODUCT_NUMBER],
};

export default {
  title: 'Vendor Configs',
  name: 'vendorConfigs',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: posByBrand[BRAND].map((pos) => ({
    title: pos.title,
    name: pos.name,
    type: 'vendorConfig',
  })),
};
