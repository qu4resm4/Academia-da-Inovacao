'use client'

import { InputInterface } from "./input.interface"

export default function Input(props: InputInterface) {
    return (
        <div>
            <label className="">
                {props.label}
            </label>
            <input onChange={props.onChange} className="" type="number"/>
        </div>
    )
}