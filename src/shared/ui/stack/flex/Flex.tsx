import {ReactNode, CSSProperties, DetailedHTMLProps, HTMLAttributes} from "react"
import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Flex.module.sass"


type FlexJustify = "start" | "end" | "center" | "between" | "evenly"
type FlexAlign = "start" | "end" | "center" | "baseline"
type FlexDirection = "row" | "rowReverse" | "column" | "columnReverse"
type FlexGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps {
    tag?: keyof HTMLElementTagNameMap
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    wrap?: boolean
    gap?: FlexGap
    fullWidth?: boolean
    // style?: CSSProperties
    // className?: string
    children?: ReactNode
}

export const Flex = (props: FlexProps) => {
    const {
        tag = "div",
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

    const Tag = tag
    const classes = classnames(cls, [
        "flex",
        `justify__${justify}`,
        `align__${align}`,
        `direction__${direction}`,
        `gap__${gap}`,
    ], {wrap, fullWidth}, [ className ])

    return (
        <Tag className={classes} style={style}>
            {children}
        </Tag>
    )
}
