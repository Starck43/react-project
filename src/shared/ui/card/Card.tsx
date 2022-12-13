import {FC, HTMLAttributeAnchorTarget, HTMLAttributes} from "react"
import {Link} from "react-router-dom"

import {classnames} from "@/shared/lib/helpers/classnames"
import {ThemeVariant} from "@/shared/types/theme"
import {DirectionType, SizeType, UIFeatureType} from "@/shared/types/ui"

import {Flex} from "../stack"

import cls from "./Card.module.sass"


interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: ThemeVariant
    feature?: UIFeatureType
    gap?: SizeType
    bordered?: boolean
    rounded?: boolean
    shadowed?: boolean
    direction?: DirectionType
    href?: string
    target?: HTMLAttributeAnchorTarget
    className?: string
}

export const Card: FC<CardProps> = (props) => {
    const {
        variant = "primary",
        feature = "blank",
        gap = "none",
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
            wrap={direction === "column"}
            fullWidth
            gap={gap}
            direction={direction}
            className={classnames(cls, [
                    "card",
                    variant,
                    feature,
                    href ? "linked" : "",
                ], {bordered, rounded, shadowed}, [ className ])}
            {...other}
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
