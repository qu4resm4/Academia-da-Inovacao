'use client'

import { FieldValues, UseFormRegister } from "react-hook-form"

interface InputInterface {
    label: string
    type: string
    value?: any
    error?: any
    register: any
    name: string
    disabled?: boolean
}

export default function Input(props: InputInterface) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-lg text-white">
                {props.label}
            </label>
            <input type={props.type} {...props.register(props.name)} value={props.value} disabled={props.disabled || false}/>
            {props.error && <p className="text-red-500 text-sm">{props.error}</p>}
        </div>
    )
}