import {
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { ProductosService } from './productos.service';

import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
@ApiTags('Productos')
@Controller('productos')
export class ProductosController {
  constructor(
    private readonly productosService: ProductosService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Crear producto',
  })
  @ApiResponse({
    status: 201,
    description: 'Producto creado correctamente',
  })
  @ApiResponse({
    status: 400,
    description: 'Datos inválidos',
  })
  create(
    @Body() createProductoDto: CreateProductoDto,
  ) {
    return this.productosService.create(
      createProductoDto,
    );
  }

  @Get()
  @ApiOperation({
    summary: 'Listar productos',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de productos',
  })
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar producto por ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto encontrado',
  })
  @ApiResponse({
    status: 404,
    description: 'Producto no encontrado',
  })
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar producto',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto actualizado',
  })
  @ApiResponse({
    status: 404,
    description: 'Producto no encontrado',
  })
  update(
    @Param('id') id: string,
    @Body() updateProductoDto: UpdateProductoDto,
  ) {
    return this.productosService.update(
      +id,
      updateProductoDto,
    );
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar producto',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto eliminado',
  })
  @ApiResponse({
    status: 404,
    description: 'Producto no encontrado',
  })
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }
}