import { UpdateUserIdentificationDto } from './partials/update-user_identification.dto';
import { UpdateUserAddressDto } from './partials/update-user_address.dto';
import { UpdateUserAcademicDto } from './partials/update-user_academic.dto';
import { UpdateUserContactDto } from './partials/update-user_contact.dto';

export class UpdateUserDto {
    
    userIdentification?: UpdateUserIdentificationDto;

    userAddress?: UpdateUserAddressDto;

    userAcademic?: UpdateUserAcademicDto;

    userContact?: UpdateUserContactDto;
}
