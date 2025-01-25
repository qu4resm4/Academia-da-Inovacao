import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
console.log(jwtConstants.secret)

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
        secret: process.env.SECRET_KEY || '',
        signOptions: { expiresIn: '1h' },
      })
],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService],

})
export class AuthModule {}