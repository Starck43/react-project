import {ButtonHTMLAttributes, FC} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import {AppRoutes, RoutesPath} from "shared/config/router"
import {Theme} from "app/providers/theme-provider"
import {NavLink, NavLinkTheme} from "shared/ui/nav-link/NavLink"
import cls from "./Button.module.sass"

export enum ThemeButton {
    BLANK = "blank",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    href?: string
}

export const Button: FC<ButtonProps> = (props) => {
    const {
 theme = ThemeButton.BLANK, className, children, href, ...other
} = props
    return (
        <button
            type="button"
            {...other}
            className={classnames(cls, ["button", theme], {}, [className, theme])}
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
