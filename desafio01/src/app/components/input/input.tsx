'use client'

import { InputInterface } from "./input.interface"

export default function Input(props: InputInterface) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-lg text-white">
                {props.label}
            </label>
            <input onChange={props.onChange} type="number"/>
        </div>
    )
}