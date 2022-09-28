import {FC} from "react"
import {Link, LinkProps} from "react-router-dom"

import {classnames} from "shared/lib/helpers/classnames"

import cls from "./NavLink.module.sass"

export enum NavLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface NavLinkProps extends LinkProps {
    className?: string
    theme?: NavLinkTheme
}

export const NavLink: FC<NavLinkProps> = (props) => {
    const {
        theme = NavLinkTheme.PRIMARY, to, className, children, ...other
    } = props

    return (
        <Link
            to={to}
            {...other}
            className={classnames(cls, ["navLink", theme], {}, [className])}
        >
            {children}
        </Link>
    )
}
