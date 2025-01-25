'use client'
import Pagina from "@/app/components/templates/pagina";
import Input from "../components/templates/input";
import Button from "../components/templates/button";
import { useForm } from "react-hook-form";
import userUsers from "../hooks/useUsers"
import { Toaster } from "sonner";

export interface LoginInterface {
    email: string,
    cpf: string
}

export default function Login() {
    const { register, handleSubmit } = useForm<LoginInterface>();

    const { fetchAuth } = userUsers();

    function handleAuthentication(data: LoginInterface){
        console.log(data)
        fetchAuth(data);
    }

    return (
        <Pagina>
            <Toaster />
            <div className="flex justify-center">
                <div className="m-8 p-8 bg-neutral-700 rounded-xl flex flex-col gap-6">
                    <h2 className="text-white">PARA SE AUTENTICAR INSIRA OS DADOS</h2>
                    <Input label={"Email"} type={'text'} register={register} name={"email"}/>
                    <Input label={"CPF"} type={'text'} register={register} name={"cpf"}/>

                    <div className="flex justify-center">
                        <Button onClick={handleSubmit(handleAuthentication)} name={"Acessar"}/>
                    </div>
                </div>
            </div>
        </Pagina>
    )
}