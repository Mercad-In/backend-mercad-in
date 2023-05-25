import { CreateSupermarketDto } from '../dtos/create-supermarket.dto';
import { UpdateSupermarketDto } from '../dtos/update-supermarket.dto';
import { SupermarketEntity } from '../entities/supermarket.entity';

export abstract class SupermarketRepository {
  abstract findById(id: string): Promise<SupermarketEntity | null>;
  abstract findByEmail(email: string): Promise<SupermarketEntity | null>;
  abstract create(data: CreateSupermarketDto): Promise<void>;
  abstract update(id: string, data: UpdateSupermarketDto): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
