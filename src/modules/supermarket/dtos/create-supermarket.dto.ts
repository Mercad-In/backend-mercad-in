import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateSupermarketDto {
  @ApiProperty({
    type: String,
    default: 'Finn',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    default: 'finnmakmissil@outlook.com',
  })
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({
    type: String,
    default: '61.391.107/0001-00',
  })
  @IsString()
  cnpj: string;

  @ApiProperty({
    type: String,
    default: '84tw9jg0dju8regrd@%',
  })
  @IsString()
  password: string;
}
