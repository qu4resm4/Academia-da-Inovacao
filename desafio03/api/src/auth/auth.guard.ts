import { CanActivate, ExecutionContext, Inject,Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  @Inject()
  private readonly jwtService: JwtService;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.cookies?.token;
    if (!token) throw new UnauthorizedException('Esta rota exige um token');

    try {
      const payload = this.jwtService.verify(token, {
        secret: process.env.SECRET_KEY,
      });
      request['id'] = payload;
    } catch (error) {
      throw new UnauthorizedException('Token inváildo');
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') || [];
    return type === 'Bearer' ? token : undefined;
  }
}
