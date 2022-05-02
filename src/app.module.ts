import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { geoLocationProvider } from './geolocation.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, ...geoLocationProvider],
})
export class AppModule {}
