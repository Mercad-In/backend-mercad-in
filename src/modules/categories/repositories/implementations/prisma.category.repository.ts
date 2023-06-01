import { Injectable } from '@nestjs/common';
import { CategoryEntity } from '../../entities/category.entity';
import { CategoryRepository } from '../category.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number): Promise<CategoryEntity | null> {
    const category = await this.prisma.category.findUnique({ where: { id } });

    if (!category) {
      return null;
    }

    return category;
  }

  async findByNameCategory(name: string): Promise<CategoryEntity | null> {
    const category = await this.prisma.category.findUnique({
      where: { name },
      include: {
        product: {
          select: {
            id: true,
            description: true,
            name: true,
            price: true,
          },
        },
      },
    });

    if (!category) {
      return null;
    }

    return category;
  }

  async findAll(): Promise<CategoryEntity[] | null> {
    const categories = await this.prisma.category.findMany();

    if (!categories) {
      return null;
    }

    return categories;
  }
}
