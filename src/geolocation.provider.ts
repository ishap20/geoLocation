import { Connection } from 'mongoose';
import { geoLocationSchema } from './geolocation.schema';

export const geoLocationProvider = [
  {
    provide: 'GEOLOCATION_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('geoLocation', geoLocationSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
