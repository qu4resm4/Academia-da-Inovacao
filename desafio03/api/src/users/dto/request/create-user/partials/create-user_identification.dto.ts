import { IsString, IsEmail, IsEnum, IsNotEmpty, IsDate, IsOptional, Matches } from 'class-validator';
import { Gender } from '../../../../types/gender';
import { MaritalStatus } from '../../../../types/maritalstatus';
import { Type } from 'class-transformer';

export class CreateUserIdentificationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  dateOfBirth: Date;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{11}$/)
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\+?[1-9]\d{1,14}$/)
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  nationality: string;

  @IsEnum(MaritalStatus)
  @IsNotEmpty()
  maritalStatus: MaritalStatus;
}
