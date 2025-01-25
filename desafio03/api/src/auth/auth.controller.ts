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

    if (token == 'invalid') {
      res.cookie('token', null);
      // Credenciais inválidas
      return res.status(HttpStatus.UNAUTHORIZED).send({ message: 'Credenciais inválidas' });
    }

    res.cookie('token', token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dias
    });
    
    return res.status(200).send({ message: 'Login bem-sucedido' });
  }
}
