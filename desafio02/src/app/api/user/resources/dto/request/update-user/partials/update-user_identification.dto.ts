import { PartialType } from '@nestjs/mapped-types';
import { CreateUserIdentificationDto } from "../../create-user/partials/create-user_identification.dto";

export class UpdateUserIdentificationDto extends PartialType(CreateUserIdentificationDto) {
    
}