'use client'
import Pagina from "@/app/components/templates/pagina";
import Input from "../components/templates/input";
import Button from "../components/templates/button";
import { Gender } from "./_types/gender";
import { MaritalStatus } from "./_types/maritalstatus";
import { EducationMode } from "./_types/educantionmode";
import { AcademicStatus } from "./_types/academicstatus";
import { useState } from "react";
import Select from "../components/templates/select";

interface UserData {
    userIdentification: {
        name: string;
        dateOfBirth: string;
        gender: Gender | null;
        cpf: string;
        phone: string;
        email: string;
        nationality: string;
        maritalStatus: MaritalStatus | null;
      };
    userAddress: {
        address: string;
        street: string;
        number: string;
        complement: string;
        neighborhood: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
      };
    userAcademic: {
        registrationNumber: string;
        course: string;
        yearOfEntry: number;
        currentSemester: number;
        academicStatus: AcademicStatus | null;
        gpa: number;
        educationMode: EducationMode | null;
      };

    userContact: {
        name: string;
        relationship: string;
        phone: string;
        email: string;
      }[];
}

export default function Cadastro() {
    // userIdentification
    const [name, setName] = useState<string>("");
    const [dateOfBirth, setDateOfBirth] = useState<string>("");
    const [gender, setGender] = useState<Gender | null>(null);
    const [cpf, setCpf] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [nationality, setNationality] = useState<string>("");
    const [maritalStatus, setMaritalStatus] = useState<MaritalStatus | null>(null);

    // userAddress
    const [address, setAddress] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [complement, setComplement] = useState<string>("");
    const [neighborhood, setNeighborhood] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [postalCode, setPostalCode] = useState<string>("");
    const [country, setCountry] = useState<string>("");

    // userAcademic
    const [registrationNumber, setRegistrationNumber] = useState<string>("");
    const [course, setCourse] = useState<string>("");
    const [yearOfEntry, setYearOfEntry] = useState<number>(2023);
    const [currentSemester, setCurrentSemester] = useState<number>(1);
    const [academicStatus, setAcademicStatus] = useState<AcademicStatus | null>(null);
    const [gpa, setGpa] = useState<number>(0);
    const [educationMode, setEducationMode] = useState<EducationMode | null>(null);
    
    function submit() {
        const payload = {
          userIdentification: {
            name,
            dateOfBirth,
            gender,
            cpf,
            phone,
            email,
            nationality,
            maritalStatus,
          },
          userAddress: {
            address,
            street,
            number,
            complement,
            neighborhood,
            city,
            state,
            postalCode,
            country,
          },
          userAcademic: {
            registrationNumber,
            course,
            yearOfEntry,
            currentSemester,
            academicStatus,
            gpa,
            educationMode,
          },
        };
      
        console.log("Payload preparado para envio:", JSON.stringify(payload, null, 2));
        
        // Aqui você pode enviar o payload para o backend, por exemplo:
        // fetch("URL_DO_BACKEND", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(payload),
        // })
        //   .then(response => response.json())
        //   .then(data => console.log("Resposta do backend:", data))
        //   .catch(error => console.error("Erro ao enviar os dados:", error));
      }
      

    return (
            <Pagina>
                <div className="flex justify-center">
                    <div className="m-8 p-8 bg-neutral-700 rounded-xl flex flex-col gap-6">
                        <div className="flex gap-6">
                            {/*Informações de Identificação*/}
                            <div>
                                <Input
                                    onChange={(e: any) => setName(e.target.value)}
                                    label={"Nome"}
                                    type={'text'}
                                />

                                <Input
                                    onChange={(e: any) => setDateOfBirth(e.target.value)}
                                    label={"Data de Nascimento"}
                                    type={'date'}
                                />

                                <Select
                                    label="Gênero"
                                    name='Gender'
                                    onChange={(e: any) => setGender(e.target.value)}
                                    enumOptions={Gender}
                                />

                                <Input
                                    onChange={(e: any) => setCpf(e.target.value)}
                                    label={"CPF"}
                                    type={'text'}
                                />
                                <Input
                                    onChange={(e: any) => setPhone(e.target.value)}
                                    label={"Celular"}
                                    type={'text'}
                                />
                                <Input
                                    onChange={(e: any) => setEmail(e.target.value)}
                                    label={"E-mail"}
                                    type={'email'}
                                />
                                <Input
                                    onChange={(e: any) => setNationality(e.target.value)}
                                    label={"Nacionalidade"}
                                    type={'text'}
                                />
                                <Select
                                    label="Estado Civil"
                                    name='MaritalStatus'
                                    onChange={(e: any) => setMaritalStatus(e.target.value)}
                                    enumOptions={MaritalStatus}
                                />
                            </div>

                            {/*Informações de Endereço*/}
                            <div>
                                <Input
                                    onChange={(e: any) => setAddress(e.target.value)}
                                    label={"Endereço"}
                                    type={'text'}
                                />
                                <Input
                                    onChange={(e: any) => setStreet(e.target.value)}
                                    label={"Rua"}
                                    type={'text'}
                                />
                                <Input
                                    onChange={(e: any) => setNumber(e.target.value)}
                                    label={"Número"}
                                    type={'text'}
                                />
                                <Input
                                    onChange={(e: any) => setComplement(e.target.value)}
                                    label={"Complemento"}
                                    type={'text'}
                                />
                                <Input
                                    onChange={(e: any) => setNeighborhood(e.target.value)}
                                    label={"Bairro"}
                                    type={'text'}
                                />
                                <Input
                                    onChange={(e: any) => setCity(e.target.value)}
                                    label={"Cidade"}
                                    type={'text'}
                                />
                                <Input
                                    onChange={(e: any) => setState(e.target.value)}
                                    label={"Estado"}
                                    type={'text'}
                                />
                                <Input
                                    onChange={(e: any) => setPostalCode(e.target.value)}
                                    label={"CEP"}
                                    type={'text'}
                                />
                                <Input
                                    onChange={(e: any) => setCountry(e.target.value)}
                                    label={"País"}
                                    type={'text'}
                                />
                            </div>

                            {/*Informações Acadêmicas*/}
                            <div>
                                <Input
                                    onChange={(e: any) => setRegistrationNumber(e.target.value)}
                                    label={"Número de Matrícula"}
                                    type={'text'}
                                />
                                <Input
                                    onChange={(e: any) => setCourse(e.target.value)}
                                    label={"Curso"}
                                    type={'text'}
                                />
                                <Input
                                    onChange={(e: any) => setYearOfEntry(Number(e.target.value))}
                                    label={"Ano de Entrada"}
                                    type={'number'}
                                />
                                <Input
                                    onChange={(e: any) => setCurrentSemester(Number(e.target.value))}
                                    label={"Semestre Atual"}
                                    type={'number'}
                                />
                                <Select
                                    label="Status Acadêmico"
                                    name='AcademicStatus'
                                    onChange={(e: any) => setAcademicStatus(e.target.value)}
                                    enumOptions={AcademicStatus}
                                />
                                <Input
                                    onChange={(e: any) => setGpa(Number(e.target.value))}
                                    label={"GPA"}
                                    type={'number'}
                                />
                                <Select
                                    label="Modalidade de Ensino"
                                    name='EducationMode'
                                    onChange={(e: any) => setEducationMode(e.target.value)}
                                    enumOptions={EducationMode}
                                />
                            </div>
                        </div>
    
                        <div className="flex justify-center">
                            <Button onClick={submit()} name={"Cadastrar"}/>
                        </div>
                    </div>
                </div>
            </Pagina>
    )
}