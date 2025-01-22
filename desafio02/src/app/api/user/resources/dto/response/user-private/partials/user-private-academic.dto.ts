import { AcademicStatus } from '../../../../types/academicstatus';
import { EducationMode } from '../../../../types/educantionmode';

export class UserPrivateAcademicDto {
  registrationNumber: string;
  course: string;
  yearOfEntry: number;
  currentSemester: number;
  academicStatus: AcademicStatus;
  gpa?: number;
  educationMode: EducationMode;
}

