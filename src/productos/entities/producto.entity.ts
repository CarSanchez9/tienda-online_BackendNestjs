import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import { Categoria } from '../../categorias/entities/categoria.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('decimal')
  precio: number;

  @Column({ default: 0 })
  stock: number;

  @ManyToOne(
    () => Categoria,
    (categoria) => categoria.productos,
  )
  categoria: Categoria;
}