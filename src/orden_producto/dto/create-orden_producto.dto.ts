import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrdenProductoDto {
  @ApiProperty({
    description: 'Cantidad',
    example: 2,
  })
  @IsNumber()
  cantidad: number;

  @ApiProperty({
    description: 'Precio unitario',
    example: 3500,
  })
  @IsNumber()
  precio_unitario: number;

  @ApiProperty({
    description: 'ID de la orden',
    example: 1,
  })
  @IsNumber()
  ordenId: number;

  @ApiProperty({
    description: 'ID del producto',
    example: 1,
  })
  @IsNumber()
  productoId: number;
}