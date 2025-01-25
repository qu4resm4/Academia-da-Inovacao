import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    @Inject()
    private usersService: UsersService;
    @Inject()
    private jwtService: JwtService;

  async validateUser(email: string, cpf: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && user.cpf === cpf) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}