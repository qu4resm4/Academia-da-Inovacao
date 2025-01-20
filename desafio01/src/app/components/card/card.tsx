'use client'

import { CardInterface } from "./card.interface"

export default function Card(props: CardInterface) {
    return (
        <div className="bg-gray-700 flex flex-col gap-4 p-4 border-4 border-t-green-700 border-l-green-700 border-b-yellow-400 border-r-yellow-400">
            <h2 className="text-center text-2xl">
                {props.tituloCard}
            </h2>
            <div>
                <div>
                    <h3 className="text-white">
                        {props.tituloValor1}
                    </h3>
                    <span className="text-green-700">
                        {props.valor1}
                    </span>
                </div>
                <div>
                    <h3 className="text-white">
                        {props.tituloValor2}
                    </h3>
                    <span className="text-yellow-400">
                        {props.valor2}
                    </span>
                </div>
            </div>
            <div>
                <p className="w-80 text-center">
                    {props.descriçãoCard}
                </p>
            </div>
        </div>
    )
}