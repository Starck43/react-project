import {memo, ReactNode, ElementType} from "react"
import {Link} from "react-router-dom"

import {classnames} from "@/shared/lib/helpers/classnames"
import {ThemeVariant} from "@/shared/types/theme"
import type {SizeType} from "@/shared/types/ui"
import {Flex} from "@/shared/ui/stack"

import cls from "./Header.module.sass"


type HeaderProps = {
    tag?: ElementType
    href?: string
    title: ReactNode
    subTitle?: ReactNode
    variant?: ThemeVariant
    align?: "start" | "center" | "end"
    inlined?: boolean
    fullWidth?: boolean
    gap?: SizeType
    transform?: "upper_first" | "upper_case" | "lower_case"
    shadowed?: boolean
    className?: string
    children?: ReactNode
}

export const Header = memo((props: HeaderProps) => {
    const {
        tag = "h3",
        href,
        title,
        subTitle,
        variant = "primary",
        align = "start",
        gap = "xs",
        inlined = false,
        fullWidth = true,
        transform,
        shadowed = false,
        className,
        children,
    } = props

    const subtitle = typeof subTitle === "string"
        ? <p className={cls.subtitle}>{subTitle}</p>
        : subTitle

    const Title = tag
    const content = (
        <Title
            className={classnames(cls, [
            "title",
            align,
            transform,
            children ? "fullWidth" : undefined,
            variant ], {shadowed}, [ (!children && !subtitle) ? className : undefined ])}
        >
            {title}
        </Title>
    )

    if (children || subtitle) {
        return (
            <Flex
                align={align}
                justify={inlined ? "start" : align}
                gap={gap}
                href={href}
                wrap
                fullWidth={inlined || fullWidth}
                direction={inlined ? "row" : "column"}
                className={classnames(cls, [ "header", variant ], {inlined}, [ className ])}
            >
                {title && content}
                {subtitle}
                {children}
            </Flex>
        )
    }

    return (
        href
            ? (
                <Link to={href} className={cls.link}>
                    {content}
                </Link>
            )
            : content
    )
})
