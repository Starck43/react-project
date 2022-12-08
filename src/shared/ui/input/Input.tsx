import {
    memo,
    forwardRef,
    ForwardedRef,
    InputHTMLAttributes,
    ChangeEvent,
} from "react"

import {classnames} from "@/shared/lib/helpers/classnames"

import cls from "./Input.module.sass"


type HTMLInputType<T> = Omit<InputHTMLAttributes<T>, "value" | "onChange" | "readOnly">

interface InputProps<T> extends HTMLInputType<T> {
    rounded?: boolean
    value?: string
    readonly?: boolean
    onChange?: (value: string, name?: string) => void
}

const Input = (props: InputProps<HTMLInputElement>, ref: ForwardedRef<HTMLInputElement>) => {
    const {
        type = "text",
        value = "",
        rounded = false,
        readonly = false,
        onChange,
        className,
        ...other
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value, e.target.name)
    }

    return (
        <input
            ref={ref}
            type={type}
            value={value}
            readOnly={readonly}
            {...other}
            onChange={onChangeHandler}
            className={classnames(cls, [ "input__text", "input" ], {rounded, readonly}, [ className ])}
        />
    )
}

export default memo(forwardRef(Input))


export const TextArea = memo((props: InputProps<HTMLTextAreaElement>) => {
    const {
        value = "",
        rounded = false,
        readonly = false,
        onChange,
        className,
        ...other
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value)
    }
    return (
        <textarea
            value={value}
            onChange={onChangeHandler}
            {...other}
            className={classnames(cls, [ "input__textarea", "input" ], {rounded, readonly}, [ className ])}
        />
    )
})
