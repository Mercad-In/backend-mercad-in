import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class AuthDto {
  @ApiProperty({
    type: String,
    default: 'finnmakmissil@outlook.com',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @ApiProperty({
    type: String,
    default: '84tw9jg0dju8regrd@%',
  })
  @IsNotEmpty()
  @IsString()
  public password: string;
}
