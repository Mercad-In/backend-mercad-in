import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CategoriesModule } from '../categories/categories.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaProductRepository } from './repositories/implementations/prisma.product.repository';

@Module({
  imports: [CategoriesModule],
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService, PrismaProductRepository],
})
export class ProductsModule {}
