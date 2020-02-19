export default {
  title: 'Payment Screen Translations',
  name: 'paymentScreenTranslations',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: 'Scan to pay',
      name: 'scanToPay',
      type: 'localeString',
      description: '(TH Only)',
    },
    {
      title: 'Available Scan to pay',
      name: 'availableScanToPay',
      type: 'localeString',
      description:
        '(TH Only) Scan to Pay will become available after your first in-app purchase, or by transferring in a TimCard™ balance.',
    },
    {
      title: 'Scan QR Code',
      name: 'scanQRCode',
      type: 'localeString',
      description: '(TH Only) Scan your QR code if you are paying in-store',
    },
  ],
};
