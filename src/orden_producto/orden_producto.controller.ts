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

import { OrdenProductoService } from './orden_producto.service';
import { CreateOrdenProductoDto } from './dto/create-orden_producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden_producto.dto';

@ApiTags('OrdenProducto')
@Controller('orden-producto')
export class OrdenProductoController {
  constructor(
    private readonly ordenProductoService: OrdenProductoService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Agregar producto a una orden',
  })
  @ApiResponse({
    status: 201,
    description: 'Registro creado correctamente',
  })
  create(
    @Body()
    createOrdenProductoDto: CreateOrdenProductoDto,
  ) {
    return this.ordenProductoService.create(
      createOrdenProductoDto,
    );
  }

  @Get()
  @ApiOperation({
    summary: 'Listar orden-producto',
  })
  findAll() {
    return this.ordenProductoService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar registro por ID',
  })
  findOne(@Param('id') id: string) {
    return this.ordenProductoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar registro',
  })
  update(
    @Param('id') id: string,
    @Body()
    updateOrdenProductoDto: UpdateOrdenProductoDto,
  ) {
    return this.ordenProductoService.update(
      +id,
      updateOrdenProductoDto,
    );
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar registro',
  })
  remove(@Param('id') id: string) {
    return this.ordenProductoService.remove(+id);
  }
}