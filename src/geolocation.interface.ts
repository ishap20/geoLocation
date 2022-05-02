export interface geolocation {
  address: string;
  location: {
    type: {
      type: string,
      enum: ['Point'],
    },
    coordinates: {
      type: [number],
    },
    formattedAddress: string,
  },
}
