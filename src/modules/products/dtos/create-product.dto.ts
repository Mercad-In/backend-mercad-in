import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    type: Number,
    default: 1,
  })
  @IsString()
  categoryId: number;

  @ApiProperty({
    type: String,
    default: 'Pastel',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    default: '0,25',
  })
  @IsString()
  price: string;

  @ApiProperty({
    type: String,
    default: 'Pastel português',
  })
  @IsString()
  description: string;
}
