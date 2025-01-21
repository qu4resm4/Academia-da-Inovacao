'use client'

export interface SelectInterface {
    label: string
    name?: string
    enumOptions: any
    onChange: any
}

export default function Button(props: SelectInterface) {
    return (
        <div className="flex flex-col">
            <label className="text-lg text-white">
                {props.label}
            </label>
            <select onChange={props.onChange} name={props.name} id="">
              <option value="">Selecione uma opção</option>
              {Object.keys(props.enumOptions).map((key) => (
                <option key={key} value={key}>
                  {props.enumOptions[key]}
                </option>
              ))}
            </select>
        </div>
    )
}