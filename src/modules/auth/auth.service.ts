import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';
import { AuthDto } from './dto/auth.dto';
import { UserPayload } from './models/UserPayload.model';
import { SupermarketRepository } from '../supermarket/repositories/supermarket.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly repository: SupermarketRepository,
  ) {}

  async signin(dto: AuthDto): Promise<UserToken> {
    const { email, password } = dto;
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new BadRequestException('Wrong credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new BadRequestException('Wrong credentials');
    }

    const payload: UserPayload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      cnpj: user.cnpj,
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...data } = user;

    const jwtToken = await this.jwtService.signAsync(payload);

    return { token: jwtToken, user: data };
  }
}
