import {memo, ReactNode, SVGProps, FC} from "react"
import {Link, LinkProps} from "react-router-dom"

import {classnames} from "@/shared/lib/helpers/classnames"
import {ThemeVariant} from "@/shared/types/theme"

import cls from "./NavLink.module.sass"


export type NavLinkFeatureType = "clear" | "inverted" | "underlined" | "bordered"

export interface NavLinkProps extends Omit<LinkProps, "title"> {
    variant?: ThemeVariant
    title?: ReactNode
    alt?: string
    Icon?: FC<SVGProps<SVGSVGElement>>
    feature?: NavLinkFeatureType
    fullWidth?: boolean
    disabled?: boolean
    rounded?: boolean
    animation?: boolean
    reverse?: boolean
    className?: string
}

export const NavLink: FC<NavLinkProps> = memo((props) => {
    const {
        variant,
        title,
        alt,
        Icon,
        feature = "clear",
        fullWidth = false,
        disabled = false,
        reverse = false,
        rounded = false,
        animation = false,
        className,
        ...other
    } = props

    return (
        <Link
            title={alt}
            {...other}
            className={classnames(cls, [
                "link", variant, feature,
            ], {
                fullWidth, disabled, reverse, rounded, animation,
            }, [ className ])}
        >
            {Icon && <Icon className={cls.icon} />}
            {title}
        </Link>
    )
})
