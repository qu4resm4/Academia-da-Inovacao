import { Body, Controller, HttpCode, HttpStatus, Inject, Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  @Inject()
  private readonly authService: AuthService;

  @Post()
  @HttpCode(HttpStatus.OK)
  signin(@Body() body) {
    return this.authService.signin(body);
  }
}
