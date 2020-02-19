import { isTest } from '../../menu/util/environment';

// Ideally we could set the document to read only and override just the image field
// but unfortunately this doesn't work.
const DEFAULT_READ_ONLY = !isTest;

export default {
  title: 'Restaurant',
  name: 'restaurant',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      title: 'Number',
      name: 'number',
      type: 'string',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Restaurant Image',
      name: 'restaurantImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      readOnly: false,
    },
    {
      title: 'Physical Address',
      name: 'physicalAddress',
      type: 'address',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Restaurant Phone Number',
      name: 'phoneNumber',
      type: 'string',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Latitude',
      name: 'latitude',
      type: 'number',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Longitude',
      name: 'longitude',
      type: 'number',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'ADI',
      name: 'adi',
      type: 'string',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Status',
      name: 'status',
      type: 'string',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Drive Thru Lane Type',
      name: 'driveThruLaneType',
      type: 'string',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Has Playground?',
      name: 'hasPlayground',
      type: 'boolean',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Playground Type',
      name: 'playgroundType',
      type: 'string',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Drink Station Type',
      name: 'drinkStationType',
      type: 'string',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Has Parking?',
      name: 'hasParking',
      type: 'boolean',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Parking Type',
      name: 'parkingType',
      type: 'string',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Has Wifi?',
      name: 'hasWifi',
      type: 'boolean',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Has Breakfast?',
      name: 'hasBreakfast',
      type: 'boolean',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Has Catering?',
      name: 'hasCatering',
      type: 'boolean',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Has Delivery?',
      name: 'hasDelivery',
      type: 'boolean',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Has Mobile Ordering?',
      name: 'hasMobileOrdering',
      type: 'boolean',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Has Burgers for Breakfast?',
      name: 'hasBurgersForBreakfast',
      type: 'boolean',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Has Drive Thru?',
      name: 'hasDriveThru',
      type: 'boolean',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Number of Drive Thru Windows',
      name: 'nbrDriveThruWindows',
      type: 'number',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'POS',
      name: 'pos',
      type: 'pos',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Ownership',
      name: 'ownership',
      type: 'string',
      options: {
        list: ['Franchise', 'Company'],
      },
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Franchise Group Name',
      name: 'franchiseGroupName',
      type: 'string',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Franchise Group ID',
      name: 'franchiseGroupId',
      type: 'number',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Email',
      name: 'email',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Dining Room Hours',
      name: 'diningRoomHours',
      type: 'hoursOfOperation',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Drive Thru Hours',
      name: 'driveThruHours',
      type: 'hoursOfOperation',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Delivery Hours',
      name: 'deliveryHours',
      type: 'hoursOfOperation',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      name: 'lastModifiedTime',
      title: 'Last Modified Time',
      type: 'datetime',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'POS Restaurant ID',
      name: 'posRestaurantId',
      type: 'string',
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Environment',
      name: 'environment',
      type: 'string',
      options: {
        list: ['dev', 'prod'],
      },
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Mobile Ordering Status',
      name: 'mobileOrderingStatus',
      type: 'string',
      options: {
        list: ['dev', 'alpha', 'beta', 'live', 'tempUnavailable'],
      },
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Restaurant POS Data',
      name: 'restaurantPosData',
      type: 'reference',
      to: [{ type: 'restaurantPosData' }],
      readOnly: DEFAULT_READ_ONLY,
    },
    {
      title: 'Restaurant Kiosk Data',
      name: 'restaurantKioskData',
      type: 'reference',
      to: [{ type: 'restaurantKioskData' }],
      readOnly: DEFAULT_READ_ONLY,
    },
  ],
  preview: {
    select: {
      title: 'name',
      id: '_id',
      media: 'restaurantImage',
    },
    prepare(selection) {
      return {
        title: `${selection.title} - ${selection.id}`,
        subtitle: 'Restaurant',
        media: selection.media,
      };
    },
  },
};
