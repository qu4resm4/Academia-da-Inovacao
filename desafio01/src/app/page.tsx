'use client'

import { SetStateAction, useState } from "react";
import Button from "./components/button/button";
import Card from "./components/card/card";
import Input from "./components/input/input";

export default function Home() {
  const [cardValor1, setCardValor1] = useState<number>()
  const [cardValor2, setCardValor2] = useState<number>()

  const [inputValor1, setInputValor1] = useState<number>()
  const [inputValor2, setInputValor2] = useState<number>()

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16">

      <Card 
        tituloCard={"Desafio Card"}
        tituloValor1={"Este é o valor 1"} 
        valor1={cardValor1} 
        tituloValor2={"Este é o valor 2"} 
        valor2={cardValor2}
        descriçãoCard={"Este é o meu Card interativo feito com React e Next para o Desafio01 da Academia da Inovação!"}/>

      <div>
        <Input onChange={(e: any) => setInputValor1(e.target.value)} label={"Valor 1"}/>
        <Button onClick={() => setCardValor1(inputValor1)} name={"Atualizar"}/>
      </div>
      <div>
        <Input onChange={(e: any) => setInputValor2(e.target.value)} label={"Valor 2"}/>
        <Button onClick={() => setCardValor2(inputValor2)} name={"Atualizar"}/>
      </div>
      

    </div>
  );
}
