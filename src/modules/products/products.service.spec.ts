import { ProductsService } from './products.service';
import { ProductRepository } from './repositories/product.repository';
import { CategoryRepository } from '../categories/repositories/category.repository';
import { PrismaService } from '../../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

let prisma: PrismaService;
let categoryRepository: CategoryRepository;
let productRepository: ProductRepository;
let productsService: ProductsService;

describe('ProductsService', () => {
  beforeEach(() => {
    prisma = new PrismaService();
    categoryRepository = new CategoryRepository(prisma);
    productRepository = new ProductRepository(prisma);
    productsService = new ProductsService(
      productRepository,
      categoryRepository,
    );
  });

  it('should not be able to create a product with a non existing category', async () => {
    await expect(
      productsService.create({
        categoryId: 404,
        description: 'teste',
        name: 'teste',
        price: 'teste',
      }),
    ).rejects.toThrow(NotFoundException);
  });

  it('should not be able to update a non existing product', async () => {
    await expect(
      productsService.update(404, {
        categoryId: 4,
        description: 'teste',
        name: 'teste',
        price: 'teste',
      }),
    ).rejects.toThrow(NotFoundException);
  });

  it('should be able to find all existing products', async () => {
    const productsList = await productsService.findAll();
    expect(productsList).not.toBeNull();
  });

  it('should be able to find an existing product by id', async () => {
    const product = await productsService.findById(1);
    expect(product.id).toBe(1);
    expect(product.categoryId).toBe(1);
    expect(product.description).toBe('Pão Francês');
    expect(product.name).toBe('Pão');
    expect(product.price).toBe('7,96');
  });

  it('should not be able to find an non existing product by id', async () => {
    await expect(productsService.findById(404)).rejects.toThrow(
      NotFoundException,
    );
  });

  it('should be able to find an existing product by name', async () => {
    const product = await productsService.findByName('Pão');
    expect(product.id).toBe(1);
    expect(product.categoryId).toBe(1);
    expect(product.description).toBe('Pão Francês');
    expect(product.name).toBe('Pão');
    expect(product.price).toBe('7,96');
  });

  it('should not be able to find an non existing product by name', async () => {
    await expect(
      productsService.findByName('non-existing-product'),
    ).rejects.toThrow(NotFoundException);
  });

  it('should not be able to delete a product that does not exist', async () => {
    await expect(productsService.remove(404)).rejects.toThrow(
      NotFoundException,
    );
  });
});
