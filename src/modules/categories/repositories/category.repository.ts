import { CategoryEntity } from '../entities/category.entity';

export abstract class CategoryRepository {
  abstract findById(id: number): Promise<CategoryEntity | null>;
  abstract findByNameCategory(name: string): Promise<CategoryEntity | null>;
  abstract findAll(): Promise<CategoryEntity[] | null>;
}
