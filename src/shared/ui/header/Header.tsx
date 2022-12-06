import {ElementType, memo, ReactNode} from "react"
import {Link} from "react-router-dom"

import {classnames} from "shared/lib/helpers/classnames"
import {ThemeVariant} from "shared/types/theme"

import {TagCase} from "./consts"
import {Flex} from "../../ui/stack"

import cls from "./Header.module.sass"


type HeaderProps = {
    tag?: ElementType
    href?: string
    variant?: ThemeVariant
    title: ReactNode
    subTitle?: ReactNode
    inlined?: boolean
    align?: "start" | "center" | "end"
    gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
    transform?: TagCase
    shadowed?: boolean
    className?: string
    children?: ReactNode
}

const Header = (props: HeaderProps) => {
    const {
        tag = "div",
        href,
        variant = "primary",
        title,
        subTitle,
        align = "start",
        inlined = false,
        gap = "xs",
        transform = TagCase.FIRST,
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
            variant ], {shadowed}, [ (!children && !subtitle) ? className : "" ])}
        >
            {title}
        </Title>
    )

    if (children || subtitle) {
        return (
            <Flex
                align={align}
                justify={inlined ? "start" : align}
                gap={inlined ? gap : "none"}
                href={href}
                wrap
                fullWidth={inlined}
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
}

export default memo(Header)
