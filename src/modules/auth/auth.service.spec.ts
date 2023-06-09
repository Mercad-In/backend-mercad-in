import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { SupermarketRepository } from '../supermarket/repositories/supermarket.repository';
import { PrismaService } from '../../prisma/prisma.service';
import { BadRequestException } from '@nestjs/common';
import { SupermarketService } from '../supermarket/supermarket.service';

let prisma: PrismaService;
let supermarketRepository: SupermarketRepository;
let supermarketService: SupermarketService;
let authService: AuthService;
let jwtService: JwtService;

describe('AuthService', () => {
  beforeEach(async () => {
    prisma = new PrismaService();
    supermarketRepository = new SupermarketRepository(prisma);
    supermarketService = new SupermarketService(supermarketRepository);
    jwtService = new JwtService({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1d' },
    });
    authService = new AuthService(jwtService, supermarketRepository);
  });

  it('should be able to authenticate', async () => {
    await supermarketService.create({
      name: 'Conta teste',
      email: 'conta2teste@outlook.com',
      cnpj: '61.456.107/0001-00',
      password: '84tw9jg0dju8regrd@%',
    });

    const response = await authService.signin({
      email: 'conta2teste@outlook.com',
      password: '84tw9jg0dju8regrd@%',
    });

    expect(response).toHaveProperty('token');
  });

  it('should not be able to authenticate a non existent account', async () => {
    await expect(
      authService.signin({
        email: 'johndoe@example.com',
        password: '12343trhg',
      }),
    ).rejects.toThrow(BadRequestException);
  });

  it('should not be able to authenticate a wrong password', async () => {
    await expect(
      authService.signin({
        email: 'conta2teste@outlook.com',
        password: 'wrong-password',
      }),
    ).rejects.toThrow(BadRequestException);
  });

  afterAll(async () => {
    await supermarketRepository.deleteByEmail('conta2teste@outlook.com');
  });
});
