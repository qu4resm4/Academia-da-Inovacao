import { Body, Controller, HttpCode, HttpStatus, Inject, Post, Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('login')
export class AuthController {
  @Inject()
  private readonly authService: AuthService;

  @Post()
  @HttpCode(HttpStatus.OK)
  async signin(@Body() body, @Res() res: Response) {
    const token = await this.authService.signin(body);
    res.cookie('token', token, {
      httpOnly: true, // Impede que o cookie seja acessado por JavaScript
      sameSite: 'strict', // Evita CSRF
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dias
    });
    return res.status(200).send({ message: 'Login bem-sucedido' });
  }
}
