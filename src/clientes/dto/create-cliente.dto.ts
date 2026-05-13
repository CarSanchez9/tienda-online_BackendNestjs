import {
  IsEmail,
  IsString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({
    description: 'Nombres del cliente',
    example: 'Carlos',
  })
  @IsString()
  nombres: string;

  @ApiProperty({
    description: 'Apellido paterno',
    example: 'Escobar',
  })
  @IsString()
  paterno: string;

  @ApiProperty({
    description: 'Apellido materno',
    example: 'Lopez',
  })
  @IsString()
  materno: string;

  @ApiProperty({
    description: 'Correo electrónico',
    example: 'carlos@gmail.com',
  })
  @IsEmail()
  email: string;
}