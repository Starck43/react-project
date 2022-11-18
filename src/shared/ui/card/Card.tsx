import {FC, HTMLAttributeAnchorTarget, HTMLAttributes} from "react"
import {Link} from "react-router-dom"
import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Card.module.sass"


export enum CardVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

export enum CardFeature {
    BLANK = "blank",
    INVERTED = "inverted",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant
    feature?: CardFeature
    bordered?: boolean
    rounded?: boolean
    shadowed?: boolean
    href?: string
    target?: HTMLAttributeAnchorTarget
    className?: string
}

export const Card: FC<CardProps> = (props) => {
    const {
        variant = CardVariant.PRIMARY,
        feature = CardFeature.BLANK,
        bordered = false,
        rounded = false,
        shadowed = false,
        href,
        target,
        className,
        children,
        ...other
    } = props


    return (
        <div
            {...other}
            className={classnames(
                cls,
                [
                    "card",
                    variant,
                    feature,
                    href ? "linked" : "",
                ],
                {bordered, rounded, shadowed},
                [ className ],
            )}
        >
            {
                href
                    ? (
                        <Link to={href} target={target} className={cls.link}>
                            {children}
                        </Link>
                    )
                    : children
            }
        </div>
    )
}
