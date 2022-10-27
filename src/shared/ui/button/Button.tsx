import {
FC, memo, ReactElement, ReactNode, ButtonHTMLAttributes,
} from "react"

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
    squared?: boolean
    shadowed?: boolean
    disabled?: boolean
    href?: string
    className?: string
    children?: ReactNode
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        variant = ButtonVariant.PRIMARY,
        feature,
        size = ButtonSize.NORMAL,
        rounded = false,
        bordered = false,
        squared = false,
        shadowed = false,
        disabled = false,
        href = null,
        className,
        children,
        ...other
    } = props


    return (
        <button
            type="button"
            disabled={disabled}
            {...other}
            className={classnames(cls, [ "button", variant, feature, size, href ? "is__link" : "" ], {
                bordered,
                rounded,
                squared,
                shadowed,
                disabled,
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
