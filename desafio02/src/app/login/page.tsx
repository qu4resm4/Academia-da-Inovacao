import Pagina from "@/app/components/templates/pagina";
import Input from "../components/templates/input";
import Button from "../components/templates/button";

export default function Login() {

    return (
        <Pagina>
            <div className="flex justify-center">
                <div className="m-8 p-8 bg-neutral-700 rounded-xl flex flex-col gap-6">
                    <Input onChange={''} label={"Login"} type={'text'}/>
                    <Input onChange={''} label={"Senha"} type={'password'}/>

                    <div className="flex justify-center">
                        <Button onClick={''} name={"Acessar"}/>
                    </div>
                </div>
            </div>
        </Pagina>
    )
}