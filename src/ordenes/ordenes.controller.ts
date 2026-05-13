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

import { OrdenesService } from './ordenes.service';
import { CreateOrdeneDto } from './dto/create-ordene.dto';
import { UpdateOrdeneDto } from './dto/update-ordene.dto';

@ApiTags('Ordenes')
@Controller('ordenes')
export class OrdenesController {
  constructor(
    private readonly ordenesService: OrdenesService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Crear orden',
  })
  @ApiResponse({
    status: 201,
    description: 'Orden creada correctamente',
  })
  create(
    @Body() createOrdeneDto: CreateOrdeneDto,
  ) {
    return this.ordenesService.create(
      createOrdeneDto,
    );
  }

  @Get()
  @ApiOperation({
    summary: 'Listar órdenes',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de órdenes',
  })
  findAll() {
    return this.ordenesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar orden por ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Orden encontrada',
  })
  findOne(@Param('id') id: string) {
    return this.ordenesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar orden',
  })
  update(
    @Param('id') id: string,
    @Body() updateOrdeneDto: UpdateOrdeneDto,
  ) {
    return this.ordenesService.update(
      +id,
      updateOrdeneDto,
    );
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar orden',
  })
  remove(@Param('id') id: string) {
    return this.ordenesService.remove(+id);
  }
}