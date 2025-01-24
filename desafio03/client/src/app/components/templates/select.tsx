'use client'

export interface SelectInterface {
    label: string
    name?: string
    enumOptions: any
    error?: any
    register: any
    disabled?: boolean
    value?: any
}

export default function Button(props: SelectInterface) {
    return (
        <div className="flex flex-col">
            <label className="text-lg text-white">
                {props.label}
            </label>
            <select value={props.value} disabled={props.disabled} {...props.register(props.name)} name={props.name} id="">
              <option value="">Selecione uma opção</option>
              {Object.keys(props.enumOptions).map((key) => (
                <option key={key} value={props.enumOptions[key]}>
                  {key}
                </option>
              ))}
            </select>
            {props.error && <p className="text-red-500 text-sm">{props.error}</p>}
        </div>
    )
}