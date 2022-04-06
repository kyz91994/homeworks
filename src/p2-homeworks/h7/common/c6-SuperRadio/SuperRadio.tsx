import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions = options ? options.map((o, i) => (
        // map options with key
        <div>
        <label key={name + '-' + i} className={s.customRadio}>
            <input
                type='radio'
                name={name}
                checked={value===o}
                value={o}
                onChange={onChangeCallback}
            />
            <span>{o}</span>
        </label>
            </div>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
