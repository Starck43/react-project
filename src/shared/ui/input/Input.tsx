import {
    memo,
    forwardRef,
    ForwardedRef,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
    ChangeEvent,
} from "react"
import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Input.module.sass"


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly" >

interface InputProps extends HTMLInputProps {
    rounded?: boolean
    value?: string
    readonly? : boolean
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: string, name?: string) => void
}

const Input = (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
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

export const TextArea = memo((props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    const {className, ...other} = props

    return (
        <textarea
            {...other}
            className={classnames(cls, [ "input__textarea", "input" ], {}, [ className ])}
        />
    )
})
