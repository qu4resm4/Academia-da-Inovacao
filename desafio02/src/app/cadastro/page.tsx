'use client'
import Pagina from "@/app/components/templates/pagina";
import Input from "../components/templates/input";
import Button from "../components/templates/button";
import Select from "../components/templates/select";
import { Gender } from "../_types/gender";
import { MaritalStatus } from "../_types/maritalstatus";
import { EducationMode } from "../_types/educantionmode";
import { AcademicStatus } from "../_types/academicstatus";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const UserDataSchema = z.object({
  userIdentification: z.object({
    name: z.string().refine(value => value.trim() !== "", {
        message: "O campo não pode estar vazio ou conter apenas espaços.",
      }),
    dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)").refine(value => value.trim() !== "", {
        message: "O campo não pode estar vazio ou conter apenas espaços.",
      }),
    gender: z.nativeEnum(Gender).nullable(),
    cpf: z.string().regex(/^\d{11}$/, "CPF must be 11 digits"),
    phone: z.string().min(10, "Phone number must have at least 10 digits"),
    email: z.string().email("Invalid email format"),
    nationality: z.string().min(1, "Nationality is required"),
    maritalStatus: z.nativeEnum(MaritalStatus).nullable(),
  }),
  userAddress: z.object({
    address: z.string().refine(value => value.trim() !== "", "Address is required"),
    street: z.string().refine(value => value.trim() !== "", "Street is required"),
    number: z.string().refine(value => value.trim() !== "", "Number is required"),
    complement: z.string().optional(),
    neighborhood: z.string().refine(value => value.trim() !== "", "Neighborhood is required"),
    city: z.string().refine(value => value.trim() !== "", "City is required"),
    state: z.string().refine(value => value.trim() !== "", "State is required"),
    postalCode: z.string().regex(/^\d{5}-\d{3}$/, "Invalid postal code format (XXXXX-XXX)"),
    country: z.string().refine(value => value.trim() !== "", "Country is required"),
  }),
  userAcademic: z.object({
    registrationNumber: z.string().refine(value => value.trim() !== "", "Registration number is required"),
    course: z.string().refine(value => value.trim() !== "", "Course is required"),
    yearOfEntry: z.number().min(1900, "Year of entry must be valid").max(new Date().getFullYear()),
    currentSemester: z.number().min(1, "Semester must be at least 1").max(20, "Semester must not exceed 20"),
    academicStatus: z.nativeEnum(AcademicStatus).nullable(),
    gpa: z.number().min(0, "GPA must be at least 0").max(10, "GPA must not exceed 10"),
    educationMode: z.nativeEnum(EducationMode).nullable(),
  }),
  userEmergencyContact: z.object({
    name: z.string().refine(value => value.trim() !== "", "Contact name is required"),
    relationship: z.string().refine(value => value.trim() !== "", "Relationship is required"),
    phone: z.string().min(10, "Phone number must have at least 10 digits"),
    email: z.string().email("Invalid email format"),
  }),
});

export type CreateUser = z.infer<typeof UserDataSchema>;

export default function Cadastro() {    
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<CreateUser>(
        {
            resolver: zodResolver(UserDataSchema)
        }
    );

    function handleCreateUser(data: CreateUser) {
        console.log(data)
    }
    
    return (
            <Pagina>
                <div className="flex justify-center">
                    <div className="m-8 p-8 bg-neutral-700 rounded-xl flex flex-col gap-6">
                        <form className="flex flex-col gap-2">
                            <div className="flex gap-6">
                                {/* Informações de Identificação */}
                                <div>
                                    <h2 className="text-white text-2xl">Dados Pessoais</h2>
                                    <Input 
                                        register={register} 
                                        name="userIdentification.name"
                                        label="Nome"
                                        type="text" 
                                        error={errors.userIdentification?.name?.message}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userIdentification.dateOfBirth"
                                        label="Data de Nascimento" 
                                        type="date" 
                                        error={errors.userIdentification?.dateOfBirth?.message}
                                    />
                                    <Select
                                        register={register} 
                                        name="userIdentification.gender"
                                        label="Gênero"
                                        enumOptions={Gender}
                                        error={errors.userIdentification?.gender?.message}
                                    />
                                    <Input
                                        register={register} 
                                        name="userIdentification.cpf"
                                        label="CPF" 
                                        type="text"
                                        error={errors.userIdentification?.cpf?.message}
                                    />
                                    <Input
                                        register={register} 
                                        name="userIdentification.phone"
                                        label="Celular" 
                                        type="text" 
                                        error={errors.userIdentification?.phone?.message}
                                    />
                                    <Input
                                        register={register} 
                                        name="userIdentification.email"
                                        label="E-mail" 
                                        type="email"
                                        error={errors.userIdentification?.email?.message} 
                                    />
                                    <Input
                                        register={register} 
                                        name="userIdentification.nationality"
                                        label="Nacionalidade" 
                                        type="text" 
                                        error={errors.userIdentification?.nationality?.message}
                                    />
                                    <Select
                                        register={register} 
                                        name="userIdentification.maritalStatus"
                                        label="Estado Civil"
                                        enumOptions={MaritalStatus}
                                        error={errors.userIdentification?.maritalStatus?.message}
                                    />
                                </div>
                                
                                {/* Informações de Endereço */}
                                <div>
                                    <h2 className="text-white text-2xl">Dados Residenciais</h2>
                                    <Input 
                                        register={register} 
                                        name="userAddress.address"
                                        label="Endereço" 
                                        type="text" 
                                        error={errors.userAddress?.address?.message} 
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.street"
                                        label="Rua" 
                                        type="text" 
                                        error={errors.userAddress?.street?.message} 
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.number"
                                        label="Número" 
                                        type="text" 
                                        error={errors.userAddress?.number?.message} 
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.complement"
                                        label="Complemento" 
                                        type="text" 
                                        error={errors.userAddress?.complement?.message} 
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.neighborhood"
                                        label="Bairro" 
                                        type="text" 
                                        error={errors.userAddress?.neighborhood?.message} 
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.city"
                                        label="Cidade" 
                                        type="text" 
                                        error={errors.userAddress?.city?.message} 
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.state"
                                        label="Estado" 
                                        type="text" 
                                        error={errors.userAddress?.state?.message} 
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.postalCode"
                                        label="CEP" 
                                        type="text" 
                                        error={errors.userAddress?.postalCode?.message} 
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.country"
                                        label="País" 
                                        type="text" 
                                        error={errors.userAddress?.country?.message} 
                                    />
                                </div>

                                {/* Informações Acadêmicas */}
                                <div>
                                    <h2 className="text-white text-2xl">Dados Acadêmicos</h2>
                                    <Input 
                                        register={register} 
                                        name="userAcademic.registrationNumber"
                                        label="Número de Matrícula" 
                                        type="text" 
                                        error={errors.userAcademic?.registrationNumber?.message} 
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAcademic.course"
                                        label="Curso" 
                                        type="text" 
                                        error={errors.userAcademic?.course?.message} 
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAcademic.yearOfEntry"
                                        label="Ano de Entrada" 
                                        type="number" 
                                        error={errors.userAcademic?.yearOfEntry?.message} 
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAcademic.currentSemester"
                                        label="Semestre Atual" 
                                        type="number" 
                                        error={errors.userAcademic?.currentSemester?.message} 
                                    />
                                    <Select
                                        register={register} 
                                        name="userAcademic.academicStatus"
                                        label="Status Acadêmico"
                                        enumOptions={AcademicStatus}
                                        error={errors.userAcademic?.academicStatus?.message}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAcademic.gpa"
                                        label="GPA" 
                                        type="number" 
                                        error={errors.userAcademic?.gpa?.message} 
                                    />
                                    <Select
                                        register={register} 
                                        name="userAcademic.educationMode"
                                        label="Modalidade de Ensino"
                                        enumOptions={EducationMode}
                                        error={errors.userAcademic?.educationMode?.message}
                                    />
                                </div>

                                {/* Informações Emergenciais */}
                                <div>
                                    <h2 className="text-white text-2xl">Contato de Emergência</h2>
                                    <Input 
                                        register={register} 
                                        name="userEmergencyContact.name"
                                        label="Nome" 
                                        type="text" 
                                        error={errors.userEmergencyContact?.name?.message} 
                                    />
                                    <Input 
                                        register={register} 
                                        name="userEmergencyContact.relationship"
                                        label="Parentesco" 
                                        type="text" 
                                        error={errors.userEmergencyContact?.relationship?.message} 
                                    />
                                    <Input 
                                        register={register} 
                                        name="userEmergencyContact.phone"
                                        label="Telefone" 
                                        type="text" 
                                        error={errors.userEmergencyContact?.phone?.message} 
                                    />
                                    <Input 
                                        register={register} 
                                        name="userEmergencyContact.email"
                                        label="E-mail" 
                                        type="email" 
                                        error={errors.userEmergencyContact?.email?.message} 
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Button onClick={handleSubmit(handleCreateUser)} disabled={!isValid} name={"Cadastrar"}/>
                            </div>
                        </form>                    
                    </div>
                </div>
            </Pagina>
    )
}