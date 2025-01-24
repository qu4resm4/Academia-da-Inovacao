export interface UserPublicDto {
    userIdentification: {
      name: string,
    };
    userAcademic: {
      course: string,
      yearOfEntry: string,
      currentSemester: string,
      academicStatus: string,
      educationMode: string
    }
}