import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserContactDto {
  name: string;
  relationship: string;
  phone: string;
  email: string;
}

  