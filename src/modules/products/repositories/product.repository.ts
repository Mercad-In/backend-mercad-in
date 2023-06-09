import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!product) {
      return null;
    }

    return product;
  }

  async findAll(): Promise<Product[] | null> {
    const products = await this.prisma.product.findMany();

    if (!products) {
      return null;
    }

    return products;
  }

  async findByName(name: string): Promise<Product | null> {
    const product = this.prisma.product.findFirst({
      where: {
        name,
      },
    });

    if (!product) {
      return null;
    }

    return product;
  }

  async create({
    categoryId,
    img,
    description,
    name,
    price,
  }: CreateProductDto): Promise<Product> {
    const product = await this.prisma.product.create({
      data: {
        categoryId,
        img,
        description,
        name,
        price,
      },
    });

    return product;
  }

  async save(
    id: number,
    { categoryId, img, description, name, price }: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        categoryId,
        img,
        description,
        name,
        price,
      },
    });

    return product;
  }

  async delete(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}
