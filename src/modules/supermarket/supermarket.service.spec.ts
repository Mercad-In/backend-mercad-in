import { BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SupermarketRepository } from './repositories/supermarket.repository';
import { SupermarketService } from './supermarket.service';

let prisma: PrismaService;
let supermarketService: SupermarketService;
let supermarketRepository: SupermarketRepository;

describe('SupermarketService', () => {
  beforeAll(() => {
    prisma = new PrismaService();
    supermarketRepository = new SupermarketRepository(prisma);
    supermarketService = new SupermarketService(supermarketRepository);
  });

  it('should be able to create a new account', async () => {
    await supermarketService.create({
      name: 'Conta teste',
      email: 'contateste@outlook.com',
      cnpj: '61.456.107/0001-00',
      password: '84tw9jg0dju8regrd@%',
    });

    const account = await supermarketRepository.findByEmail(
      'contateste@outlook.com',
    );

    expect(account.email).toBe('contateste@outlook.com');
  });

  it('should not be able to create two accounts with the same email', async () => {
    await expect(
      supermarketService.create({
        name: 'Conta teste',
        email: 'contateste@outlook.com',
        cnpj: '61.456.107/0001-00',
        password: '84tw9jg0dju8regrd@%',
      }),
    ).rejects.toThrow(BadRequestException);
  });

  afterAll(async () => {
    await supermarketRepository.deleteByEmail('contateste@outlook.com');
  });
});
