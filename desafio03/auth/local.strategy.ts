import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email', passwordField: 'cpf' })
  }

  async validate(email: string, cpf: string): Promise<any> {
    const user = await this.authService.validateUser(email, cpf);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}