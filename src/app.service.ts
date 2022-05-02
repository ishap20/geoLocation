import { Inject, Injectable } from '@nestjs/common';
import { geolocation } from './geolocation.interface';
import { Model } from 'mongoose';
import { locationDto } from './dto/location.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('GEOLOCATION_MODEL') private geolocationModel: Model<geolocation>,
  ) {}
  async createLocation(location: locationDto): Promise<any> {
    const loc = new this.geolocationModel(location);
    await this.geolocationModel.createIndexes({ location: '2dsphere' });
    // await this.geolocationModel.createIndexes({
    //   'geometry.coordinates': '2dsphere',
    // });
    return loc.save();
  }

  async getLocation(): Promise<any> {
    const METERS_PER_MILE = 1609.34;
    // const loc = await this.geolocationModel.find({
    //   location: {
    //     $near: {
    //       $geometry: { type: 'Point', coordinates: [72.9213479, 20.3817272] },
    //       $minDistance: 1000,
    //       $maxDistance: 200000,
    //     },
    //   },
    // });
    const loc = await this.geolocationModel.find({
      location: {
        $geoWithin: {
          $centerSphere: [[72.9213479, 20.3817272], 5 / 3963.2],
        },
      },
    });
    return loc;
  }
}
