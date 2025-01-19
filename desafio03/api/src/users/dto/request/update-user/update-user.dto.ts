import { UpdateUserIdentificationDto } from './partials/update-user_identification.dto';
import { UpdateUserAddressDto } from './partials/update-user_address.dto';
import { UpdateUserAcademicDto } from './partials/update-user_academic.dto';
import { UpdateUserContactDto } from './partials/update-user_contact.dto';
import { ValidateNested } from 'class-validator';

export class UpdateUserDto {
    @ValidateNested()
    userIdentification?: UpdateUserIdentificationDto;

    @ValidateNested()
    userAddress?: UpdateUserAddressDto;

    @ValidateNested()
    userAcademic?: UpdateUserAcademicDto;

    @ValidateNested()
    userContact?: UpdateUserContactDto;
}
