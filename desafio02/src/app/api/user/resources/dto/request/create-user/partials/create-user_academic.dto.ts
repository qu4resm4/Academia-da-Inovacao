import { AcademicStatus } from '../../../../../../../_types/academicstatus';
import { EducationMode } from '../../../../../../../_types/educantionmode';

export class CreateUserAcademicDto {

  registrationNumber: string;
  course: string;
  yearOfEntry: number;
  currentSemester: number;
  academicStatus: AcademicStatus;
  gpa?: number;
  educationMode: EducationMode;
}

