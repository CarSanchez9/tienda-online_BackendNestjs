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

import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@ApiTags('Categorias')
@Controller('categorias')
export class CategoriasController {
  constructor(
    private readonly categoriasService: CategoriasService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Crear categoría',
  })
  @ApiResponse({
    status: 201,
    description: 'Categoría creada correctamente',
  })
  @ApiResponse({
    status: 400,
    description: 'Datos inválidos',
  })
  create(
    @Body() createCategoriaDto: CreateCategoriaDto,
  ) {
    return this.categoriasService.create(
      createCategoriaDto,
    );
  }

  @Get()
  @ApiOperation({
    summary: 'Listar categorías',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de categorías',
  })
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar categoría por ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Categoría encontrada',
  })
  @ApiResponse({
    status: 404,
    description: 'Categoría no encontrada',
  })
  findOne(@Param('id') id: string) {
    return this.categoriasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar categoría',
  })
  @ApiResponse({
    status: 200,
    description: 'Categoría actualizada',
  })
  update(
    @Param('id') id: string,
    @Body() updateCategoriaDto: UpdateCategoriaDto,
  ) {
    return this.categoriasService.update(
      +id,
      updateCategoriaDto,
    );
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar categoría',
  })
  @ApiResponse({
    status: 200,
    description: 'Categoría eliminada',
  })
  remove(@Param('id') id: string) {
    return this.categoriasService.remove(+id);
  }
}