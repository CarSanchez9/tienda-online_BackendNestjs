import { IsNumber } from 'class-validator';

export class CreateOrdenProductoDto {
  @IsNumber()
  cantidad: number;

  @IsNumber()
  precio_unitario: number;

  @IsNumber()
  ordenId: number;

  @IsNumber()
  productoId: number;
}