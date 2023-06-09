import { NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CategoriesService } from './categories.service';
import { CategoryRepository } from './repositories/category.repository';

let prisma: PrismaService;
let categoryRepository: CategoryRepository;
let categoriesService: CategoriesService;

describe('CategoriesService', () => {
  beforeAll(() => {
    prisma = new PrismaService();
    categoryRepository = new CategoryRepository(prisma);
    categoriesService = new CategoriesService(categoryRepository);
  });

  it('should be able to find an existing category by id', async () => {
    const category = await categoriesService.findOne(1);
    expect(category.id).toBe(1);
    expect(category.name).toBe('Padaria');
  });

  it('should not be able to find an non existing category by id', async () => {
    await expect(categoriesService.findOne(404)).rejects.toThrow(
      NotFoundException,
    );
  });

  it('should be able to find an existing category by name', async () => {
    const category = await categoriesService.findByNameCategory('Padaria');
    expect(category.id).toBe(1);
    expect(category.name).toBe('Padaria');
  });

  it('should not be able to find an non existing category by name', async () => {
    await expect(
      categoriesService.findByNameCategory('non-existing-category'),
    ).rejects.toThrow(NotFoundException);
  });

  it('should be able to find all existing categories', async () => {
    const category = await categoriesService.findAll();
    expect(category).not.toBeNull();
  });
});
