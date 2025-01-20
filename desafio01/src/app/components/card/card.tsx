'use client'

import { CardInterface } from "./card.interface"

export default function Card(props: CardInterface) {
    return (
        <div>
            <h2>
                {props.tituloCard}
            </h2>
            <div>
                <div>
                    <h3>
                        {props.tituloValor1}
                    </h3>
                    <span>
                        {props.valor1}
                    </span>
                </div>
                <div>
                    <h3>
                        {props.tituloValor2}
                    </h3>
                    <span>
                        {props.valor2}
                    </span>
                </div>
            </div>
            <div>
                <p>
                    {props.descriçãoCard}
                </p>
            </div>
        </div>
    )
}