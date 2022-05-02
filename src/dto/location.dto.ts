import { ApiProperty } from '@nestjs/swagger';

export class locationDto {
  @ApiProperty({
    description: 'enter a address',
    default: '',
  })
  address: string;

  @ApiProperty({
    description: 'enter a address',
    default: 'Varachha',
  })
  streetName: string;

  @ApiProperty({
    description: 'enter a address',
    default: 'Surat',
  })
  city: string;

  @ApiProperty({
    description: 'enter a address',
    default: 'Gujarat',
  })
  state: string;

  @ApiProperty({
    description: 'enter a country',
    default: 'India',
  })
  country: string;
}
