import { PartialType } from '@nestjs/mapped-types';
import { CreateUserAcademicDto } from '../../create-user/partials/create-user_academic.dto';


export class UpdateUserAcademicDto extends PartialType(CreateUserAcademicDto) {
    
}