import { $Enums } from '@prisma/client';

export class UserPublicAcademicDto {
  course: string;
  yearOfEntry: number;
  currentSemester: number;
  academicStatus: $Enums.AcademicStatus;
  educationMode: $Enums.EducationMode;
}

