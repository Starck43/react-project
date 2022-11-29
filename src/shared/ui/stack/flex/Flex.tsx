import {ReactNode, ElementType, ComponentProps} from "react"

import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Flex.module.sass"


type FlexJustify = "start" | "end" | "center" | "between" | "evenly"
type FlexAlign = "start" | "end" | "center" | "baseline"
type FlexDirection = "row" | "rowReverse" | "column" | "columnReverse"
type FlexGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"

export interface FlexProps<E extends ElementType = ElementType> {
    as?: ElementType // keyof HTMLElementTagNameMap
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    wrap?: boolean
    gap?: FlexGap
    fullWidth?: boolean
    children?: ReactNode
}
export type FlexPropsType<E extends ElementType> = FlexProps<E> & Omit<ComponentProps<E>, keyof FlexProps>

export const Flex = <E extends ElementType = keyof HTMLElementTagNameMap>(props: FlexPropsType<E>) => {
    const {
        as = "div",
        justify = "center",
        align = "center",
        direction = "row",
        wrap = false,
        gap = "none",
        fullWidth = false,
        style = {},
        className,
        children,
    } = props

    const classes = classnames(cls, [
        "flex",
        `justify__${justify}`,
        `align__${align}`,
        `direction__${direction}`,
        `gap__${gap}`,
    ], {wrap, fullWidth}, [ className ])

    const Tag = as
    return (
        <Tag className={classes} style={style}>
            {children}
        </Tag>
    )
}
