import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { CreateProductModel } from './models/create-product.model';
import { UpdateProductModel } from './models/update-product.model';
import { CategoryRepository } from '../categories/repositories/category.repository';
import { ProductRepository } from './repositories/product.repository';

@Injectable()
export class ProductsService {
  constructor(
    private readonly repository: ProductRepository,
    private readonly externalRepository: CategoryRepository,
  ) {}

  async create(request: CreateProductDto) {
    const { categoryId, img, description, name, price } = request;

    const categoryExists = await this.externalRepository.findById(categoryId);

    if (!categoryExists) {
      throw new NotFoundException('Not found category');
    }

    const data: CreateProductModel = {
      categoryId: categoryId,
      img: img,
      description: description,
      name: name,
      price: price,
    };

    return await this.repository.create(data);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: number) {
    const productExists = await this.repository.findById(id);

    if (!productExists) {
      throw new NotFoundException('Not found product');
    }

    return productExists;
  }

  async findByName(name: string) {
    const productExists = await this.repository.findByName(name);

    if (!productExists) {
      throw new NotFoundException('Not found product');
    }

    return productExists;
  }

  async update(id: number, request: UpdateProductDto) {
    const { categoryId, img, description, name, price } = request;

    const productExists = await this.repository.findById(id);

    if (!productExists) {
      throw new NotFoundException('Not found product');
    }

    const data: UpdateProductModel = {
      categoryId: categoryId,
      img: img,
      description: description,
      name: name,
      price: price,
    };

    return await this.repository.save(id, data);
  }

  async remove(id: number) {
    const productExists = await this.repository.findById(id);

    if (!productExists) {
      throw new NotFoundException('Not found category');
    }

    return await this.repository.delete(id);
  }
}
