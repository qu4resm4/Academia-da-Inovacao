import { UserEntity } from 'src/users/entities/user.entity';
import { UserPublicAcademicDto } from './partials/user-public-academic.dto';
import { UserPublicIdentificationDto } from './partials/user-public-identification.dto';

export class UserPublicDto {
  userIdentification: UserPublicIdentificationDto;
  userAcademic: UserPublicAcademicDto;

  constructor(user){
    this.userIdentification = {
      name: user.name,
    };
    this.userAcademic = {
      course: user.course,
      yearOfEntry: user.yearOfEntry,
      currentSemester: user.currentSemester,
      academicStatus: user.academicStatus,
      educationMode: user.educationMode
    }
  }

}