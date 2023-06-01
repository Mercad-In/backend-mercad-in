import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSupermarketDto } from '../../dtos/create-supermarket.dto';
import { UpdateSupermarketDto } from '../../dtos/update-supermarket.dto';
import { SupermarketEntity } from '../../entities/supermarket.entity';
import { SupermarketRepository } from '../supermarket.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaSupermarketRepository implements SupermarketRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<SupermarketEntity[] | null> {
    const allregisters = await this.prisma.supermarket.findMany();

    if (!allregisters) {
      return null;
    }

    return allregisters;
  }

  async findById(id: string): Promise<SupermarketEntity | null> {
    const supermarket = await this.prisma.supermarket.findUnique({
      where: { id },
    });
    if (!supermarket) {
      return null;
    }
    return supermarket;
  }

  async findByEmail(email: string): Promise<SupermarketEntity | null> {
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
}
