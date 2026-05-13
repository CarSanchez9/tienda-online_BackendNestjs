import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrdenProductoService } from './orden_producto.service';
import { OrdenProductoController } from './orden_producto.controller';

import { OrdenProducto } from './entities/orden_producto.entity';
import { Ordene } from '../ordenes/entities/ordene.entity';
import { Producto } from '../productos/entities/producto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrdenProducto,
      Ordene,
      Producto,
    ]),
  ],
  controllers: [OrdenProductoController],
  providers: [OrdenProductoService],
})
export class OrdenProductoModule {}