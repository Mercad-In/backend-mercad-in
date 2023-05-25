import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from './repositories/category.repository';

@Injectable()
export class CategoriesService {
  constructor(private readonly repository: CategoryRepository) {}

  async findOne(id: number) {
    const category = await this.repository.findById(id);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }

  async findByNameCategory(name) {
    const category = await this.repository.findByNameCategory(name);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }

  async findAll() {
    return await this.repository.findAll();
  }
}
