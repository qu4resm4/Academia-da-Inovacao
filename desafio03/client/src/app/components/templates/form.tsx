'use client'

import Input from "./input";
import Button from "./button";
import Select from "./select";
import { Gender } from "../../_types/gender";
import { MaritalStatus } from "../../_types/maritalstatus";
import { EducationMode } from "../../_types/educantionmode";
import { AcademicStatus } from "../../_types/academicstatus";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import useUsers from '../../hooks/useUsers'
import { Toaster, toast } from "sonner";

const UserDataSchema = z.object({
  userIdentification: z.object({
    name: z.string().refine(value => value.trim() !== "", {
        message: "O campo não pode estar vazio ou conter apenas espaços.",
      }),
    dateOfBirth: z.coerce.date(),
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
    yearOfEntry: z.string().transform((value) => Number(value)).refine((value) => !isNaN(value) && value >= 1900 && value <= new Date().getFullYear(), "Year of entry must be valid"),
    currentSemester: z.string().transform((value) => Number(value)).refine((value) => !isNaN(value) && value >= 1 && value <= 20, "Semester must be between 1 and 20"),
    academicStatus: z.nativeEnum(AcademicStatus).nullable(),
    gpa: z.string().transform((value) => Number(value)).refine(
        (value) => !isNaN(value) && value >= 0 && value <= 10,"GPA must be between 0 and 10"),
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

interface FormInterface {
    isDisabled: boolean
}

interface UserData {
    data?: CreateUser;
    error?: any;
}

export default function Form(props: FormInterface) {
    const { fetchUsers, fetchCurrentUser, create, update, deleteUser } = useUsers()

    /* REGISTRAR */
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<CreateUser>(
        {
            resolver: zodResolver(UserDataSchema)
        }
    );

    function handleCreateUser(data: CreateUser) {
        create(data)
    }

    /* LER, ATUALIZAR E DELETAR */
    const isDashboard = props.isDisabled;

    /* LENDO DADOS EXISTENTES */
    let userId = 3;
    useEffect(() => {
        if (isDashboard) {
            const fetchData = async () => {
                try {
                    const dataUser = await fetchCurrentUser(userId);
                    reset(dataUser.data)
                } catch (err) {
                    console.error("Error fetching user:", err);
                }
            };

            fetchData();
        }
    }, [isDashboard, userId, reset]); 

    /* ATUALIZAR */
    const [isDisabled, setIsDisabled] = useState<boolean>(props.isDisabled);

    function handleIsEditing() {
        setIsDisabled(!isDisabled);
    }

    function handleUpdateUser(data: CreateUser, jwt: any) {
        update(jwt, data)
    }

    /* DELETE */
    function handleDeleteUser(jwt: any) {
        deleteUser(jwt)
    }

    return (
                <div className="flex justify-center">
                    <Toaster />
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
                                        disabled={isDisabled}
                                        
                                    />
                                    <Input 
                                        register={register} 
                                        name="userIdentification.dateOfBirth"
                                        label="Data de Nascimento" 
                                        type="date" 
                                        error={errors.userIdentification?.dateOfBirth?.message}
                                        disabled={isDisabled}
                                    />
                                    <Select
                                        register={register} 
                                        name="userIdentification.gender"
                                        label="Gênero"
                                        enumOptions={Gender}
                                        error={errors.userIdentification?.gender?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input
                                        register={register} 
                                        name="userIdentification.cpf"
                                        label="CPF" 
                                        type="text"
                                        error={errors.userIdentification?.cpf?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input
                                        register={register} 
                                        name="userIdentification.phone"
                                        label="Celular" 
                                        type="text" 
                                        error={errors.userIdentification?.phone?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input
                                        register={register} 
                                        name="userIdentification.email"
                                        label="E-mail" 
                                        type="email"
                                        error={errors.userIdentification?.email?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input
                                        register={register} 
                                        name="userIdentification.nationality"
                                        label="Nacionalidade" 
                                        type="text" 
                                        error={errors.userIdentification?.nationality?.message}
                                        disabled={isDisabled}
                                    />
                                    <Select
                                        register={register} 
                                        name="userIdentification.maritalStatus"
                                        label="Estado Civil"
                                        enumOptions={MaritalStatus}
                                        error={errors.userIdentification?.maritalStatus?.message}
                                        disabled={isDisabled}
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
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.street"
                                        label="Rua" 
                                        type="text" 
                                        error={errors.userAddress?.street?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.number"
                                        label="Número" 
                                        type="text" 
                                        error={errors.userAddress?.number?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.complement"
                                        label="Complemento" 
                                        type="text" 
                                        error={errors.userAddress?.complement?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.neighborhood"
                                        label="Bairro" 
                                        type="text" 
                                        error={errors.userAddress?.neighborhood?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.city"
                                        label="Cidade" 
                                        type="text" 
                                        error={errors.userAddress?.city?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.state"
                                        label="Estado" 
                                        type="text" 
                                        error={errors.userAddress?.state?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.postalCode"
                                        label="CEP" 
                                        type="text" 
                                        error={errors.userAddress?.postalCode?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAddress.country"
                                        label="País" 
                                        type="text" 
                                        error={errors.userAddress?.country?.message}
                                        disabled={isDisabled}
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
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAcademic.course"
                                        label="Curso" 
                                        type="text" 
                                        error={errors.userAcademic?.course?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAcademic.yearOfEntry"
                                        label="Ano de Entrada" 
                                        type="number" 
                                        error={errors.userAcademic?.yearOfEntry?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAcademic.currentSemester"
                                        label="Semestre Atual" 
                                        type="number" 
                                        error={errors.userAcademic?.currentSemester?.message}
                                        disabled={isDisabled}
                                    />
                                    <Select
                                        register={register} 
                                        name="userAcademic.academicStatus"
                                        label="Status Acadêmico"
                                        enumOptions={AcademicStatus}
                                        error={errors.userAcademic?.academicStatus?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userAcademic.gpa"
                                        label="GPA" 
                                        type="number" 
                                        error={errors.userAcademic?.gpa?.message}
                                        disabled={isDisabled}
                                    />
                                    <Select
                                        register={register} 
                                        name="userAcademic.educationMode"
                                        label="Modalidade de Ensino"
                                        enumOptions={EducationMode}
                                        error={errors.userAcademic?.educationMode?.message}
                                        disabled={isDisabled}
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
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userEmergencyContact.relationship"
                                        label="Parentesco" 
                                        type="text" 
                                        error={errors.userEmergencyContact?.relationship?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userEmergencyContact.phone"
                                        label="Telefone" 
                                        type="text" 
                                        error={errors.userEmergencyContact?.phone?.message}
                                        disabled={isDisabled}
                                    />
                                    <Input 
                                        register={register} 
                                        name="userEmergencyContact.email"
                                        label="E-mail" 
                                        type="email" 
                                        error={errors.userEmergencyContact?.email?.message}
                                        disabled={isDisabled}
                                    />
                                </div> 
                            </div>        
                            <div className="flex justify-center">
                                {
                                    isDashboard
                                    ?
                                    null
                                    :
                                    <Button onClick={handleSubmit(handleCreateUser)} name={"Cadastrar"}/>
                                }
                                {
                                    isDashboard && isDisabled
                                    ?
                                    <Button onClick={handleIsEditing} name={"Editar"}/>
                                    :
                                    null
                                }
                                {   
                                    isDashboard && !isDisabled
                                    ?
                                    <Button onClick={handleSubmit((data) => handleUpdateUser(data, userId))} name={"Atualizar"}/>
                                    :
                                    null
                                }
                                {
                                    isDashboard
                                    ?
                                    <Button onClick={() => handleDeleteUser(userId)} name={"Excluir"}/>
                                    :
                                    null
                                }
                            </div>
                        </form>             
                    </div>
                </div>
    )
}