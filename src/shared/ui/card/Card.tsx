import {FC, HTMLAttributeAnchorTarget, HTMLAttributes} from "react"
import {Link} from "react-router-dom"

import {classnames} from "shared/lib/helpers/classnames"
import {ThemeVariant} from "shared/types/theme"
import {Flex} from "shared/ui/stack"

import cls from "./Card.module.sass"


export enum CardFeature {
    BLANK = "blank",
    INVERTED = "inverted",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: ThemeVariant
    feature?: CardFeature
    bordered?: boolean
    rounded?: boolean
    shadowed?: boolean
    direction?: "row" | "column"
    href?: string
    target?: HTMLAttributeAnchorTarget
    className?: string
}

export const Card: FC<CardProps> = (props) => {
    const {
        variant = "primary",
        feature = CardFeature.BLANK,
        bordered = false,
        rounded = false,
        shadowed = false,
        direction = "column",
        href,
        target,
        className,
        children,
        ...other
    } = props


    return (
        <Flex
            {...other}
            wrap
            fullWidth
            direction={direction}
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
        </Flex>
    )
}
