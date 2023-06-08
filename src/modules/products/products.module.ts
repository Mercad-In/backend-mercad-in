import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CategoriesModule } from '../categories/categories.module';
import { PrismaService } from '../../prisma/prisma.service';
import { ProductRepository } from './repositories/product.repository';

@Module({
  imports: [CategoriesModule],
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService, ProductRepository],
})
export class ProductsModule {}
