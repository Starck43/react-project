import {
    ReactNode,
    FC,
    SVGProps,
    ButtonHTMLAttributes,
    HTMLAttributeAnchorTarget,
    forwardRef,
    ForwardedRef,
} from "react"
import { Link } from "react-router-dom"

import { classnames } from "@/shared/lib/helpers/classnames"
import { ThemeVariant } from "@/shared/types/theme"
import { AlignType } from "@/shared/types/ui"

import { ButtonFeature, ButtonSize } from "./consts"

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

export const Button: FC<ButtonProps> = forwardRef(
    (props, ref: ForwardedRef<any>) => {
        const {
            variant,
            Icon,
            href,
            target = "_self",
            feature = ButtonFeature.BLANK,
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

        let content = (
            <>
                {Icon && <Icon className={cls.icon} />}
                {children}
            </>
        )

        if (href) {
            content = (
                <Link to={href} target={target} className={cls.link}>
                    {content}
                </Link>
            )
        }

        return (
            <button
                ref={ref}
                type="button"
                disabled={disabled}
                {...other}
                className={classnames(
                    cls,
                    [
                        "button",
                        variant,
                        feature,
                        size,
                        align,
                        Icon ? "with__icon" : undefined,
                        children ? "with__caption" : undefined,
                        href ? "is__link" : undefined,
                    ],
                    {
                        fullWidth,
                        bordered,
                        rounded,
                        squared,
                        shadowed,
                        disabled,
                    },
                    [className, variant],
                )}
            >
                {content}
            </button>
        )
    },
)
