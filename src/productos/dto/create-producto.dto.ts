import {
  IsString,
  IsNumber,
  IsPositive,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateProductoDto {
  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Camiseta',
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    description: 'Precio del producto',
    example: 19.99,
  })
  @IsNumber()
  @IsPositive()
  precio: number;

  @ApiProperty({
    description: 'Stock del producto',
    example: 100,
  })
  @IsNumber()
  stock: number;

  @ApiProperty({
    description: 'ID de la categoría',
    example: 1,
  })
  @IsNumber()
  categoriaId: number;
}