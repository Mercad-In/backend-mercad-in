import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { CategoriesModule } from '../categories/categories.module';
import { SupermarketRepository } from './repositories/supermarket.repository';
import { SupermarketController } from './supermarket.controller';
import { SupermarketService } from './supermarket.service';

describe('SupermarketController', () => {
  let controller: SupermarketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CategoriesModule],
      controllers: [SupermarketController],
      providers: [SupermarketService, PrismaService, SupermarketRepository],
    }).compile();

    controller = module.get<SupermarketController>(SupermarketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
