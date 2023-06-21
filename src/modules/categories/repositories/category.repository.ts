import { Injectable } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number): Promise<Category | null> {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: {
        product: {
          select: {
            id: true,
            categoryId: true,
            name: true,
            description: true,
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

  async findByNameCategory(name: string): Promise<Category | null> {
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

  async findAll(): Promise<Category[] | null> {
    const categories = await this.prisma.category.findMany({
      include: {
        product: {
          select: {
            id: true,
            img: true,
            categoryId: true,
            name: true,
            description: true,
            price: true,
          },
        },
      },
    });

    if (!categories) {
      return null;
    }

    return categories;
  }
}
