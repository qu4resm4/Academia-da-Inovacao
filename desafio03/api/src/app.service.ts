import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Esta API foi feita por qu4resm4.';
  }
}
