'use client'

import { ButtonInterface } from "./button.interface"

export default function Button(props: ButtonInterface) {
    return (
        <div className="flex ">
            <button 
                className="bg-white mt-3 rounded-lg border-black p-1"
                onClick={props.onClick}>
                {props.name}
            </button>
        </div>
    )
}