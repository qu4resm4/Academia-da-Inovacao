-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED', 'OTHER');

-- CreateEnum
CREATE TYPE "AcademicStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'GRADUATED', 'DROPPED_OUT', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "EducationMode" AS ENUM ('PRESENTIAL', 'REMOTE', 'HYBRID');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "maritalStatus" "MaritalStatus" NOT NULL,
    "address" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "yearOfEntry" INTEGER NOT NULL,
    "currentSemester" INTEGER NOT NULL,
    "academicStatus" "AcademicStatus" NOT NULL,
    "gpa" DOUBLE PRECISION,
    "educationMode" "EducationMode" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmergencyContact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "relationship" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "EmergencyContact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_registrationNumber_key" ON "User"("registrationNumber");

-- AddForeignKey
ALTER TABLE "EmergencyContact" ADD CONSTRAINT "EmergencyContact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
