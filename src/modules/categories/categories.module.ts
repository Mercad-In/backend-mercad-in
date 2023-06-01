import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryRepository } from './repositories/category.repository';
import { PrismaCategoryRepository } from './repositories/implementations/prisma.category.repository';

@Module({
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    PrismaService,
    {
      provide: CategoryRepository,
      useClass: PrismaCategoryRepository,
    },
  ],
  exports: [CategoriesService, CategoryRepository],
})
export class CategoriesModule {}
