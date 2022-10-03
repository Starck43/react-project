import {ButtonHTMLAttributes, FC, ReactElement} from "react"

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
    bordered?: boolean
    rounded?: boolean
    shadowed?: boolean
    href?: string
    className?: string
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        variant = ButtonVariant.PRIMARY,
        feature,
        size = ButtonSize.NORMAL,
        rounded = false,
        bordered = false,
        shadowed = false,
        href = null,
        className,
        children,
        ...other
    } = props


    return (
        <button
            type="button"
            {...other}
            className={classnames(cls, [ "button", variant, feature, size, href && "is__link" ], {
                bordered,
                rounded,
                shadowed,
            }, [ "centered", className, variant ])}
        >
            {href
                ? (
                    <a href={href} className={`${cls.link} centered`}>
                        {children}
                    </a>
                )
                : children}
        </button>
    )
}