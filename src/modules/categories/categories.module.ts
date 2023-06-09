import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { CategoryRepository } from './repositories/category.repository';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaService, CategoryRepository],
  exports: [CategoriesService, CategoryRepository],
})
export class CategoriesModule {}
