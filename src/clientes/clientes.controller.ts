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

import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@ApiTags('Clientes')
@Controller('clientes')
export class ClientesController {
  constructor(
    private readonly clientesService: ClientesService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Crear cliente',
  })
  @ApiResponse({
    status: 201,
    description: 'Cliente creado correctamente',
  })
  create(
    @Body() createClienteDto: CreateClienteDto,
  ) {
    return this.clientesService.create(
      createClienteDto,
    );
  }

  @Get()
  @ApiOperation({
    summary: 'Listar clientes',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de clientes',
  })
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar cliente por ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Cliente encontrado',
  })
  @ApiResponse({
    status: 404,
    description: 'Cliente no encontrado',
  })
  findOne(@Param('id') id: string) {
    return this.clientesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar cliente',
  })
  @ApiResponse({
    status: 200,
    description: 'Cliente actualizado',
  })
  update(
    @Param('id') id: string,
    @Body() updateClienteDto: UpdateClienteDto,
  ) {
    return this.clientesService.update(
      +id,
      updateClienteDto,
    );
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar cliente',
  })
  @ApiResponse({
    status: 200,
    description: 'Cliente eliminado',
  })
  remove(@Param('id') id: string) {
    return this.clientesService.remove(+id);
  }
}