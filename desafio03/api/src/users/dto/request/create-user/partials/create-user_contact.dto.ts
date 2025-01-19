import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserContactDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  relationship: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

  