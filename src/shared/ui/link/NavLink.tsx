import {FC} from "react"
import {Link, LinkProps} from "react-router-dom"

import {classnames} from "shared/lib/helpers/classnames"

import cls from "./NavLink.module.sass"


export enum NavLinkVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

export enum NavLinkFeature {
    CLEAR = "clear",
    UNDERLINED = "underlined",
}

export interface NavLinkProps extends LinkProps {
    variant?: NavLinkVariant
    feature?: NavLinkFeature
    className?: string
}

export const NavLink: FC<NavLinkProps> = (props) => {
    const {
        variant = NavLinkVariant.PRIMARY,
        feature = NavLinkFeature.UNDERLINED,
        to,
        className,
        children,
        ...other
    } = props

    return (
        <Link
            to={to}
            {...other}
            className={classnames(cls, [ "link", variant, feature ], {}, [ className ])}
        >
            {children}
        </Link>
    )
}
