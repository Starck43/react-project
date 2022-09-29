import {ButtonHTMLAttributes, FC} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import {NavLink} from "shared/ui/nav-link/NavLink"

import cls from "./Button.module.sass"


export enum ThemeButton {
    BLANK = "blank",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton
    href?: string
    className?: string
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        theme = ThemeButton.BLANK,
        href = null,
        className,
        children,
        ...other
    } = props
    return (
        <button
            type="button"
            {...other}
            className={classnames(cls, [ "button", theme ], {}, [ className, theme ])}
        >
            {href
                ? (
                    <NavLink to={href}>
                        {children}
                    </NavLink>
                )
                : children}
        </button>
    )
}
