import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriaDto {
  @ApiProperty({
    description: 'Nombre de la categoría',
    example: 'Electrónica',
  })
  @IsString()
  nombre: string;
}