import { User, $Enums } from '@prisma/client'

export class UserEntity implements User {
    number: string;
    name: string;
    id: number;
    dateOfBirth: Date;
    age: number;
    gender: $Enums.Gender;
    cpf: string;
    phone: string;
    email: string;
    nationality: string;
    maritalStatus: $Enums.MaritalStatus;
    address: string;
    street: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    registrationNumber: string;
    course: string;
    yearOfEntry: number;
    currentSemester: number;
    academicStatus: $Enums.AcademicStatus;
    gpa: number;
    educationMode: $Enums.EducationMode;

    constructor(user: any) {
        this.id = user.id;
        this.name = user.name;
        this.dateOfBirth = user.dateOfBirth;
        this.age = this.calculateAge(user.dateOfBirth);
        this.gender = user.gender;
        this.cpf = user.cpf;
        this.phone = user.phone;
        this.email = user.email;
        this.nationality = user.nationality;
        this.maritalStatus = user.maritalStatus;
        this.address = user.address;
        this.street = user.street;
        this.complement = user.complement;
        this.neighborhood = user.neighborhood;
        this.city = user.city;
        this.state = user.state;
        this.postalCode = user.postalCode;
        this.country = user.country;
        this.registrationNumber = user.registrationNumber;
        this.course = user.course;
        this.yearOfEntry = user.yearOfEntry;
        this.currentSemester = user.currentSemester;
        this.academicStatus = user.academicStatus;
        this.gpa = user.gpa;
        this.educationMode = user.educationMode;
    }
    
    private calculateAge(dateOfBirth: Date): number {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
    
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
    
        return age;
      }
}