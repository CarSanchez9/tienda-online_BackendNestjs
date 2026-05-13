import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { OrdenProducto } from './entities/orden_producto.entity';
import { Ordene } from '../ordenes/entities/ordene.entity';
import { Producto } from '../productos/entities/producto.entity';

import { CreateOrdenProductoDto } from './dto/create-orden_producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden_producto.dto';

@Injectable()
export class OrdenProductoService {
  constructor(
    @InjectRepository(OrdenProducto)
    private ordenProductoRepo: Repository<OrdenProducto>,

    @InjectRepository(Ordene)
    private ordenRepo: Repository<Ordene>,

    @InjectRepository(Producto)
    private productoRepo: Repository<Producto>,
  ) {}

  async create(
    createOrdenProductoDto: CreateOrdenProductoDto,
  ) {
    const orden = await this.ordenRepo.findOne({
      where: {
        id: createOrdenProductoDto.ordenId,
      },
    });

    const producto =
      await this.productoRepo.findOne({
        where: {
          id: createOrdenProductoDto.productoId,
        },
      });

    if (!orden) {
      throw new NotFoundException(
        'Orden no encontrada',
      );
    }

    if (!producto) {
      throw new NotFoundException(
        'Producto no encontrado',
      );
    }

    const ordenProducto =
      this.ordenProductoRepo.create({
        cantidad:
          createOrdenProductoDto.cantidad,
        precio_unitario:
          createOrdenProductoDto.precio_unitario,
        orden,
        producto,
      });

    return this.ordenProductoRepo.save(
      ordenProducto,
    );
  }

  findAll() {
    return this.ordenProductoRepo.find({
      relations: ['orden', 'producto'],
    });
  }

  async findOne(id: number) {
    const item =
      await this.ordenProductoRepo.findOne({
        where: { id },
        relations: ['orden', 'producto'],
      });

    if (!item) {
      throw new NotFoundException(
        'No encontrado',
      );
    }

    return item;
  }

  async update(
    id: number,
    updateOrdenProductoDto: UpdateOrdenProductoDto,
  ) {
    const item = await this.findOne(id);

    Object.assign(
      item,
      updateOrdenProductoDto,
    );

    return this.ordenProductoRepo.save(
      item,
    );
  }

  async remove(id: number) {
    const item = await this.findOne(id);

    return this.ordenProductoRepo.remove(
      item,
    );
  }
}