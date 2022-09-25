import {ButtonHTMLAttributes, FC} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import cls from "./Button.module.sass"

export enum ThemeButton {
    BLANK = "blank",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        theme, className, children, ...other
    } = props
    return (
        <button
            type="button"
            {...other}
            className={classnames(cls, ["button", theme], {}, [className, theme])}
        >
            {children}
        </button>
    )
}
