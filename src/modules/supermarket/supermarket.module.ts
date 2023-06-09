import { Module } from '@nestjs/common';
import { SupermarketService } from './supermarket.service';
import { SupermarketController } from './supermarket.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { SupermarketRepository } from './repositories/supermarket.repository';

@Module({
  controllers: [SupermarketController],
  providers: [SupermarketService, PrismaService, SupermarketRepository],
  exports: [PrismaService, SupermarketService, SupermarketRepository],
})
export class SupermarketModule {}
