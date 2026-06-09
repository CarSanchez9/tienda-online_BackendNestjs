import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriasModule } from './categorias/categorias.module';
import { ProductosModule } from './productos/productos.module';
import { ClientesModule } from './clientes/clientes.module';
import { OrdenesModule } from './ordenes/ordenes.module';
import { OrdenProductoModule } from './orden_producto/orden_producto.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',

      host: process.env.DB_HOST,

      port: parseInt(
        process.env.DB_PORT || '5432',
      ),

      username: process.env.DB_USERNAME,

      password: process.env.DB_PASSWORD,

      database: process.env.DB_NAME,

      autoLoadEntities: true,

      synchronize: true,
    }),

    CategoriasModule,
    ProductosModule,
    ClientesModule,
    OrdenesModule,
    OrdenProductoModule,
  ],
})
export class AppModule {}