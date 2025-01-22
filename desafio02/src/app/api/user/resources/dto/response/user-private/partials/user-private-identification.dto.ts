import { Gender } from '../../../../types/gender';
import { MaritalStatus } from '../../../../types/maritalstatus';

export class UserPrivateIdentificationDto {
  name: string;
  dateOfBirth: Date;
  age: number;
  gender: Gender;
  cpf: string;
  phone: string;
  email: string;
  nationality: string;
  maritalStatus: MaritalStatus;
}
