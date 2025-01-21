'use client'

interface InputInterface {
    label: string
    onChange: any
    type: string
    value?: any
}

export default function Input(props: InputInterface) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-lg text-white">
                {props.label}
            </label>
            <input onChange={props.onChange} type={props.type} value={props.value}/>
        </div>
    )
}