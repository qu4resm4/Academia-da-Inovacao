import { PartialType } from '@nestjs/mapped-types';
import { CreateUserContactDto } from '../../create-user/partials/create-user_contact.dto';

export class UpdateUserContactDto extends PartialType(CreateUserContactDto) {
    
}