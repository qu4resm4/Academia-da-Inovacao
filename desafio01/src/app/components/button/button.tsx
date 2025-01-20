'use client'

import { ButtonInterface } from "./button.interface"

export default function Button(props: ButtonInterface) {
    return (
        <div>
            <button 
                className=""
                onClick={props.onClick}>
                {props.name}
            </button>
        </div>
    )
}