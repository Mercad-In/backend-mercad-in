import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateSupermarketDto } from './dtos/create-supermarket.dto';
import { UpdateSupermarketDto } from './dtos/update-supermarket.dto';
import { PrismaSupermarketRepository } from './repositories/implementations/prisma.supermarket.repository';
import { CreateSupermarketModel } from './models/create-supermarket.model';
import { UpdateSupermarketModel } from './models/update-supermarket.model';

@Injectable()
export class SupermarketService {
  constructor(private readonly repository: PrismaSupermarketRepository) {}

  async create(request: CreateSupermarketDto) {
    const { name, email, cnpj, password } = request;
    const emailAlreadyExists = await this.repository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new BadRequestException('Email already exists');
    }

    const data: CreateSupermarketModel = {
      name: name,
      email: email,
      cnpj: cnpj,
      password: await bcrypt.hash(password, 8),
    };

    return await this.repository.create(data);
  }

  async findOne(id: string) {
    const supermarket = await this.repository.findById(id);

    if (!supermarket) {
      throw new NotFoundException('Not found supermarket.');
    }

    return supermarket;
  }

  async update(id: string, request: UpdateSupermarketDto) {
    const { name, email, cnpj, password } = request;
    const supermarket = await this.repository.findById(id);

    if (!supermarket) {
      throw new NotFoundException('Not found supermarket.');
    }

    const data: UpdateSupermarketModel = {
      name: name,
      email: email,
      cnpj: cnpj,
      password: await bcrypt.hash(password, 8),
    };

    return this.repository.update(id, data);
  }

  async remove(id: string) {
    const supermarket = await this.repository.findById(id);

    if (!supermarket) {
      throw new NotFoundException('Not found supermarket.');
    }

    return await this.repository.delete(id);
  }
}
