import {
  Inject,
  Injectable,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  @Inject()
  private readonly jwtService: JwtService;
  private readonly usersService: UsersService;

  async signin(params: any) {
    const user = await this.usersService.findByEmail(params.email)
    if (user && user.cpf === params.cpf) {
      const payload = { username: user.name, sub: user.id };

      return { access_token: await this.jwtService.signAsync(payload) };
    } else {
      return { error: 'DEU RUIM MEU CHAPA'}
    }
  }
}
