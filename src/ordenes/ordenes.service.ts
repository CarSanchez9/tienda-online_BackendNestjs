import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Ordene } from './entities/ordene.entity';
import { Cliente } from '../clientes/entities/cliente.entity';
import { CreateOrdeneDto } from './dto/create-ordene.dto';
import { UpdateOrdeneDto } from './dto/update-ordene.dto';

@Injectable()
export class OrdenesService {
  constructor(
    @InjectRepository(Ordene)
    private ordenRepo: Repository<Ordene>,

    @InjectRepository(Cliente)
    private clienteRepo: Repository<Cliente>,
  ) {}

  async create(createOrdeneDto: CreateOrdeneDto) {
    const cliente = await this.clienteRepo.findOne({
      where: { id: createOrdeneDto.clienteId },
    });

    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado');
    }

    const orden = this.ordenRepo.create({
      estado: createOrdeneDto.estado,
      cliente,
    });

    return this.ordenRepo.save(orden);
  }

  findAll() {
    return this.ordenRepo.find({
      relations: ['cliente'],
    });
  }

  findOne(id: number) {
    return this.ordenRepo.findOne({
      where: { id },
      relations: ['cliente'],
    });
  }

  update(id: number, updateOrdeneDto: UpdateOrdeneDto) {
    return `Actualizar orden ${id}`;
  }

  remove(id: number) {
    return `Eliminar orden ${id}`;
  }
}