import { UserPrivateAcademicDto } from './partials/user-private-academic.dto';
import { UserPrivateAddressDto } from './partials/user-private-address.dto';
import { UserPrivateContactDto } from './partials/user-private-contact.dto';
import { UserPrivateIdentificationDto } from './partials/user-private-identification.dto';

export class UserPrivateDto {
  userIdentification: UserPrivateIdentificationDto;
  userAddress: UserPrivateAddressDto;
  userAcademic: UserPrivateAcademicDto;
  userEmergencyContact: UserPrivateContactDto;

  constructor(user, age, dateOfBirth){
    this.userIdentification = {
      name: user.name,
      dateOfBirth: dateOfBirth,
      age: age,
      gender: user.gender,
      cpf: user.cpf,
      phone: user.phone,
      email: user.email,
      nationality: user.nationality,
      maritalStatus: user.maritalStatus,
    };
    
    this.userAddress = {
      address: user.address,
      street: user.street,
      number: user.number,
      complement: user.complement || '',
      neighborhood: user.neighborhood,
      city: user.city,
      state: user.state,
      postalCode: user.postalCode,
      country: user.country,
    }
    
    this.userAcademic = {
      registrationNumber: user.registrationNumber,
      course: user.course,
      yearOfEntry: user.yearOfEntry,
      currentSemester: user.currentSemester,
      academicStatus: user.academicStatus,
      gpa: user.gpa || '',
      educationMode: user.educationMode
    };

    this.userEmergencyContact = {
      name: user.emergencyContact[0].name,
      relationship: user.emergencyContact[0].relationship,
      phone: user.emergencyContact[0].phone,
      email: user.emergencyContact[0].email
    };
    
  }
}