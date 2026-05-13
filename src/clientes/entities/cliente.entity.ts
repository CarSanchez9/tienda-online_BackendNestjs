import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ordene } from '../../ordenes/entities/ordene.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombres: string;

  @Column()
  paterno: string;

  @Column()
  materno: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Ordene, (orden) => orden.cliente)
  ordenes: Ordene[];
}