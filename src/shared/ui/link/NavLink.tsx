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

export enum NavLinkAlign {
    LEFT = "left",
    RIGHT = "right",
}

export interface NavLinkProps extends LinkProps {
    variant?: NavLinkVariant
    feature?: NavLinkFeature
    align?: NavLinkAlign
    className?: string
}

export const NavLink: FC<NavLinkProps> = (props) => {
    const {
        children,
        to,
        variant = NavLinkVariant.PRIMARY,
        feature = NavLinkFeature.UNDERLINED,
        align = NavLinkAlign.LEFT,
        className,
        ...other
    } = props

    return (
        <Link
            to={to}
            {...other}
            className={classnames(cls, [ "link", variant, feature, align ], {}, [ className ])}
        >
            {children}
        </Link>
    )
}
