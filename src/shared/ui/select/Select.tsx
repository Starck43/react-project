import {useMemo, ChangeEvent} from "react"

import {classnames} from "@/shared/lib/helpers/classnames"

import cls from "./Select.module.sass"


export interface SelectOption<T extends string> {
    value: T
    content: string
}

export interface SelectProps<T extends string> {
    label?: string | null
    compact?: boolean
    rounded?: boolean
    options: SelectOption<T>[]
    value?: T | undefined
    onChange?: (value: T) => void
    className?: string
}

// TODO: Multiselect option
export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        label = "", rounded = false, compact = false, options, value, onChange, className, ...other
    } = props

    const optionsList = useMemo(() => options?.map((opt) => (
        <option value={opt.value} key={opt.value} className={cls.option}>
            {opt.content}
        </option>
    )), [ options ])

    const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
    }

    return (
        <div className={classnames(cls, [ "select__wrapper" ], {compact}, [ className ])}>
            {!compact && label && <span className={cls.label}>{label}</span>}
            <select
                value={value}
                // defaultValue={value}
                onChange={selectHandler}
                className={classnames(cls, [ "select" ], {rounded})}
                {...other}
            >
                {label && compact && (
                    <option value="label" className={cls.option}>
                        {`${label}`}
                    </option>
                )}
                {optionsList}
            </select>
        </div>
    )
}
