import { CreateUserAcademicDto } from './partials/create-user_academic.dto';
import { CreateUserAddressDto } from './partials/create-user_address.dto';
import { CreateUserContactDto } from './partials/create-user_contact.dto';
import { CreateUserIdentificationDto } from './partials/create-user_identification.dto';
import { IsNotEmpty, ValidateNested } from 'class-validator';

export class CreateUserDto {
  @ValidateNested()
  @IsNotEmpty()
  userIdentification: CreateUserIdentificationDto;

  @ValidateNested()
  @IsNotEmpty()
  userAddress: CreateUserAddressDto;

  @ValidateNested()
  @IsNotEmpty()
  userAcademic: CreateUserAcademicDto;

  @ValidateNested()
  @IsNotEmpty()
  userContact: CreateUserContactDto;
}