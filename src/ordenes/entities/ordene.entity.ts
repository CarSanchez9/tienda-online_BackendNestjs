import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from '../../clientes/entities/cliente.entity';

@Entity()
export class Ordene {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  estado: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.ordenes)
  cliente: Cliente;
}