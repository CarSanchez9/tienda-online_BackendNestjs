import {
  IsString,
  IsNumber,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateOrdeneDto {
  @ApiProperty({
    description: 'Estado de la orden',
    example: 'pendiente',
  })
  @IsString()
  estado: string;

  @ApiProperty({
    description: 'ID del cliente',
    example: 1,
  })
  @IsNumber()
  clienteId: number;
}