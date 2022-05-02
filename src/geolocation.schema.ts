import * as mongoose from 'mongoose';
import { geocoder } from './utils/geocoder';

export const geoLocationSchema = new mongoose.Schema({
  address: String,
  streetName: String,
  city: String,
  state: String,
  country: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
    formattedAddress: String,
  },
});

// Geocode & create location
geoLocationSchema.pre('save', async function (next) {
  const loc = await geocoder.geocode(this.address, this.streetName);
  console.log(loc.length);
  if (loc.length > 0) {
    this.location = {
      type: 'Point',
      coordinates: [loc[0].longitude, loc[0].latitude],
      formattedAddress: loc[0].formattedAddress,
    };
    console.log(loc);
    // Do not save address
    //this.address = undefined;
    return;
  } else {
    const loc = await geocoder.geocode(this.streetName, this.city, this.state);
    this.location = {
      type: 'Point',
      coordinates: [loc[0].longitude, loc[0].latitude],
      formattedAddress: loc[0].formattedAddress,
    };
    console.log(loc);
    return;
  }
  next();
});

geoLocationSchema.index({ geometry: '2dsphere' });
