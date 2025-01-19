import { IsString, IsNumber, IsEnum, IsOptional, Min, Max, IsNotEmpty } from 'class-validator';
import { AcademicStatus } from '../../../../types/academicstatus';
import { EducationMode } from '../../../../types/educantionmode';

export class CreateUserAcademicDto {
  @IsString()
  @IsNotEmpty()
  registrationNumber: string;

  @IsString()
  @IsNotEmpty()
  course: string;

  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear())
  @IsNotEmpty()
  yearOfEntry: number;

  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  currentSemester: number;

  @IsEnum(AcademicStatus)
  @IsNotEmpty()
  academicStatus: AcademicStatus;

  @IsNumber()
  @Min(0)
  @Max(10)
  @IsOptional()
  gpa?: number;

  @IsEnum(EducationMode)
  @IsNotEmpty()
  educationMode: EducationMode;
}

