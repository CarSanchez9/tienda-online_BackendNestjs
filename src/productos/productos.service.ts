import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Producto } from './entities/producto.entity';
import { Categoria } from '../categorias/entities/categoria.entity';

import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepo: Repository<Producto>,

    @InjectRepository(Categoria)
    private categoriaRepo: Repository<Categoria>,
  ) {}

  async create(
    createProductoDto: CreateProductoDto,
  ) {
    const categoria =
      await this.categoriaRepo.findOne({
        where: {
          id: createProductoDto.categoriaId,
        },
      });

    if (!categoria) {
      throw new NotFoundException(
        'Categoría no encontrada',
      );
    }

    const producto = this.productoRepo.create({
      nombre: createProductoDto.nombre,
      precio: createProductoDto.precio,
      stock: createProductoDto.stock,
      categoria,
    });

    return this.productoRepo.save(producto);
  }

  findAll() {
    return this.productoRepo.find({
      relations: ['categoria'],
    });
  }

  async findOne(id: number) {
    const producto =
      await this.productoRepo.findOne({
        where: { id },
        relations: ['categoria'],
      });

    if (!producto) {
      throw new NotFoundException(
        `Producto ${id} no encontrado`,
      );
    }

    return producto;
  }

  async update(
    id: number,
    updateProductoDto: UpdateProductoDto,
  ) {
    const producto = await this.findOne(id);

    if (updateProductoDto.categoriaId) {
      const categoria =
        await this.categoriaRepo.findOne({
          where: {
            id: updateProductoDto.categoriaId,
          },
        });

      if (!categoria) {
        throw new NotFoundException(
          'Categoría no encontrada',
        );
      }

      producto.categoria = categoria;
    }

    Object.assign(producto, {
      nombre: updateProductoDto.nombre,
      precio: updateProductoDto.precio,
      stock: updateProductoDto.stock,
    });

    return this.productoRepo.save(producto);
  }

  async remove(id: number) {
    const producto = await this.findOne(id);

    return this.productoRepo.remove(producto);
  }
}