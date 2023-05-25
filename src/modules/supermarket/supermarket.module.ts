import { Module } from '@nestjs/common';
import { SupermarketService } from './supermarket.service';
import { SupermarketController } from './supermarket.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SupermarketRepository } from './repositories/supermarket.repository';
import { PrismaSupermarketRepository } from './repositories/implementations/prisma.supermarket.repository';

@Module({
  controllers: [SupermarketController],
  providers: [
    SupermarketService,
    PrismaService,
    PrismaSupermarketRepository,
    {
      provide: SupermarketRepository,
      useClass: PrismaSupermarketRepository,
    },
  ],
  exports: [PrismaService, SupermarketService, SupermarketRepository],
})
export class SupermarketModule {}
