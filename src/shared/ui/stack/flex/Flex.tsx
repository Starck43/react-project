import { ReactNode, ElementType, ComponentProps } from "react"
import { Link } from "react-router-dom"

import { classnames } from "@/shared/lib/helpers/classnames"
import type { SizeType } from "@/shared/types/ui"

import cls from "./Flex.module.sass"

type FlexJustify = "start" | "end" | "center" | "between" | "evenly"
type FlexAlign = "start" | "end" | "center" | "baseline"
type FlexDirection = "row" | "rowReverse" | "column" | "columnReverse"

export interface FlexProps<E extends ElementType = ElementType> {
    as?: E // keyof HTMLElementTagNameMap
    href?: string
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    wrap?: boolean
    gap?: SizeType
    fullWidth?: boolean
    children?: ReactNode | ReactNode[]
}

export type FlexPropsType<E extends ElementType> = FlexProps<E> & Omit<ComponentProps<E>, keyof FlexProps>

export const Flex = <E extends ElementType = keyof HTMLElementTagNameMap>(props: FlexPropsType<E>) => {
    const {
        as = "div",
        href,
        justify = "center",
        align = "center",
        direction = "row",
        wrap = false,
        gap = "sm",
        fullWidth = false,
        style = {},
        className,
        children,
        ...others
    } = props

    const classes = classnames(
        cls,
        ["flex", `justify__${justify}`, `align__${align}`, `direction__${direction}`, `gap__${gap}`],
        { wrap, fullWidth },
        [className],
    )

    const Tag = as
    return href ? (
        <Link to={href} className={classes} style={style} {...others}>
            {children}
        </Link>
    ) : (
        <Tag className={classes} style={style} {...others}>
            {children}
        </Tag>
    )
}
