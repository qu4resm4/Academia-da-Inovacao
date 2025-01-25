import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  @Inject()
  private readonly jwtService: JwtService;

  @Inject()
  private readonly usersService: UsersService;

  async signin(params: any) {
    const user = await this.usersService.findByEmail(params.email)
    if (user && user.cpf === params.cpf) {
      const payload = { username: user.name, sub: user.id };

      return await this.jwtService.signAsync(payload);
    } else {
      return 'invalid'
    }
  }
}
