import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Categoria } from './categorias/entities/categoria.entity';
import { Producto } from './productos/entities/producto.entity';
import { Cliente } from './clientes/entities/cliente.entity';
import { Ordene } from './ordenes/entities/ordene.entity';
import { OrdenProducto } from './orden_producto/entities/orden_producto.entity';


import { CategoriasModule } from './categorias/categorias.module';
import { ProductosModule } from './productos/productos.module';
import { ClientesModule } from './clientes/clientes.module';
import { OrdenesModule } from './ordenes/ordenes.module';
import { OrdenProductoModule } from './orden_producto/orden_producto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'tienda_db', 
      synchronize: true,
      autoLoadEntities: true,
      entities: [
        Categoria,
        Producto,
        Cliente,
        Ordene,
        OrdenProducto,
      ],
    }),

    CategoriasModule,
    ProductosModule,
    ClientesModule,
    OrdenesModule,
    OrdenProductoModule,
  ],
})
export class AppModule {}