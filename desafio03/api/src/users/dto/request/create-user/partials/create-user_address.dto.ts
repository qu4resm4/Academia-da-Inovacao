import { IsString, IsNotEmpty, IsOptional, Matches } from 'class-validator';

export class CreateUserAddressDto {
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsOptional()
  complement?: string;

  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @Matches(/^\d{5}-\d{3}$/)
  postalCode: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}
