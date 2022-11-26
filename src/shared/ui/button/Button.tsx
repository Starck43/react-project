import {
    FC, ReactElement, ReactNode, ButtonHTMLAttributes, HTMLAttributeAnchorTarget,
} from "react"
import {Link} from "react-router-dom"

import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Button.module.sass"


export enum ButtonVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

export enum ButtonFeature {
    BLANK = "blank",
    INVERTED = "inverted",
}

export enum ButtonSize {
    SMALL = "small",
    NORMAL = "normal",
    LARGE = "large",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
    feature?: ButtonFeature
    icon?: ReactElement
    size?: ButtonSize
    align?: "left" | "center" | "right"
    bordered?: boolean
    rounded?: boolean
    squared?: boolean
    shadowed?: boolean
    disabled?: boolean
    href?: string
    target?: HTMLAttributeAnchorTarget
    className?: string
    children?: ReactNode
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        variant = ButtonVariant.PRIMARY,
        feature,
        size = ButtonSize.NORMAL,
        align = "center",
        rounded = false,
        bordered = false,
        squared = false,
        shadowed = false,
        disabled = false,
        href,
        target,
        className,
        children,
        ...other
    } = props


    return (
        <button
            type="button"
            disabled={disabled}
            {...other}
            className={classnames(cls, [ "button", variant, feature, size, align, href ? "is__link" : "" ], {
                bordered,
                rounded,
                squared,
                shadowed,
                disabled,
            }, [ className, variant ])}
        >
            {href
                ? (
                    <Link to={href} target={target} className={`${cls.link} centered`}>
                        {children}
                    </Link>
                )
                : children}
        </button>
    )
}
