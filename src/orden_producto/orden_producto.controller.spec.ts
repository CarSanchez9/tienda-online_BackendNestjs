import { Test, TestingModule } from '@nestjs/testing';
import { OrdenProductoController } from './orden_producto.controller';
import { OrdenProductoService } from './orden_producto.service';

describe('OrdenProductoController', () => {
  let controller: OrdenProductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdenProductoController],
      providers: [OrdenProductoService],
    }).compile();

    controller = module.get<OrdenProductoController>(OrdenProductoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
