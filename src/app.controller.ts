import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { locationDto } from './dto/location.dto';

@Controller('GeoLocations')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createLocation(@Body() createLoation: locationDto) {
    return this.appService.createLocation(createLoation);
  }

  @Get('findLocation')
  getLocation() {
    return this.appService.getLocation();
  }
}
