import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { Product } from '../entities/product.entity';

export abstract class ProductRepository {
  abstract findById(id: number): Promise<Product | null>;
  abstract findAll(): Promise<Product[] | null>;
  abstract findByName(name: string): Promise<Product | null>;
  abstract create(data: CreateProductDto): Promise<Product>;
  abstract save(id: number, data: UpdateProductDto): Promise<Product>;
  abstract delete(id: number): Promise<void>;
}
