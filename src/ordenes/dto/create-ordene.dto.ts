import { IsString, IsNumber } from 'class-validator';

export class CreateOrdeneDto {
  @IsString()
  estado: string;

  @IsNumber()
  clienteId: number;
}