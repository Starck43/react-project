import {HTMLAttributes} from "react"
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
    className?: string
}

export const Card = (props: CardProps) => {
    const {
        variant = CardVariant.PRIMARY,
        feature = CardFeature.BLANK,
        bordered = false,
        rounded = false,
        shadowed = false,
        children,
        className,
        ...other
    } = props
    return (
        <div
            {...other}
            className={classnames(cls, [ "card", variant, feature ], {bordered, rounded, shadowed}, [ className ])}
        >
            {children}
        </div>
    )
}
