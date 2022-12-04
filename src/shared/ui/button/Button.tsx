import {
    ButtonHTMLAttributes, HTMLAttributeAnchorTarget, ReactNode, FC, SVGProps,
} from "react"
import {Link} from "react-router-dom"

import {classnames} from "shared/lib/helpers/classnames"
import {ThemeVariant} from "shared/types/theme"

import {ButtonFeature, ButtonSize} from "./consts"
import {AlignType} from "../../types/ui"

import cls from "./Button.module.sass"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ThemeVariant
    feature?: ButtonFeature
    Icon?: FC<SVGProps<SVGSVGElement>>
    size?: ButtonSize
    align?: AlignType
    fullWidth?: boolean
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
        variant,
        Icon,
        href,
        target,
        feature = ButtonFeature.CLEAR,
        size = ButtonSize.NORMAL,
        align = "center",
        fullWidth = false,
        rounded = false,
        bordered = false,
        squared = false,
        shadowed = false,
        disabled = false,
        className,
        children,
        ...other
    } = props


    return (
        <button
            type="button"
            disabled={disabled}
            {...other}
            className={classnames(cls, [
                "button", variant, feature, size, align, href ? "is__link" : "",
            ], {
                fullWidth,
                bordered,
                rounded,
                squared,
                shadowed,
                disabled,
            }, [ className, variant ])}
        >
            {Icon && <Icon className={cls.icon} />}
            {href
                ? (
                    <Link to={href} target={target} className={cls.link}>
                        {children}
                    </Link>
                )
                : children}
        </button>
    )
}
