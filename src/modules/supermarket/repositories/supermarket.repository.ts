import { PrismaService } from '../../../prisma/prisma.service';
import { CreateSupermarketDto } from '../dtos/create-supermarket.dto';
import { UpdateSupermarketDto } from '../dtos/update-supermarket.dto';
import { Supermarket } from '../entities/supermarket.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupermarketRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Supermarket[] | null> {
    const allregisters = await this.prisma.supermarket.findMany();

    if (!allregisters) {
      return null;
    }

    return allregisters;
  }

  async findById(id: string): Promise<Supermarket | null> {
    const supermarket = await this.prisma.supermarket.findUnique({
      where: { id },
    });
    if (!supermarket) {
      return null;
    }
    return supermarket;
  }

  async findByEmail(email: string): Promise<Supermarket | null> {
    const supermarket = await this.prisma.supermarket.findFirst({
      where: { email },
    });
    if (!supermarket) {
      return null;
    }
    return supermarket;
  }

  async create(data: CreateSupermarketDto): Promise<void> {
    await this.prisma.supermarket.create({ data });
  }

  async update(id: string, data: UpdateSupermarketDto): Promise<void> {
    await this.prisma.supermarket.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        cnpj: data.cnpj,
        password: data.password,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.supermarket.delete({ where: { id } });
  }

  async deleteByEmail(email: string): Promise<void> {
    await this.prisma.supermarket.deleteMany({
      where: {
        email,
      },
    });
  }
}
