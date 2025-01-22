import { CreateUserAcademicDto } from './partials/create-user_academic.dto';
import { CreateUserAddressDto } from './partials/create-user_address.dto';
import { CreateUserContactDto } from './partials/create-user_contact.dto';
import { CreateUserIdentificationDto } from './partials/create-user_identification.dto';
export class CreateUserDto {

  userIdentification: CreateUserIdentificationDto;

  userAddress: CreateUserAddressDto;

  userAcademic: CreateUserAcademicDto;

  userContact: CreateUserContactDto;
}