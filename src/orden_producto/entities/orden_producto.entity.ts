import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import { Ordene } from '../../ordenes/entities/ordene.entity';
import { Producto } from '../../productos/entities/producto.entity';

@Entity('orden_producto')
export class OrdenProducto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cantidad: number;

  @Column('decimal')
  precio_unitario: number;

  @ManyToOne(() => Ordene)
  orden: Ordene;

  @ManyToOne(() => Producto)
  producto: Producto;
}