import {
    memo, useMemo, ReactNode, ElementType, Fragment,
} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import {ThemeVariant} from "shared/types/theme"
import {Flex} from "../../ui/stack"

import cls from "./Header.module.sass"


export enum TagCase {
    FIRST = "firstcase",
    UPPER = "uppercase",
    LOWER = "lowercase",
}

type HeaderProps = {
    tag?: ElementType
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

    if (children || subtitle) {
        return (
            <Flex
                align={align}
                justify={inlined ? "start" : align}
                gap={inlined ? gap : "none"}
                wrap
                fullWidth={inlined}
                direction={inlined ? "row" : "column"}
                className={classnames(cls, [ "header", variant ], {inlined}, [ className ])}
            >
                {title
                && (
                <Title className={classnames(cls, [ "title", align, variant, transform ], {shadowed})}>
                    {title}
                </Title>
                )}
                {subtitle}
                {children}
            </Flex>
        )
    }

    return (
        <Title className={classnames(cls, [ "title", align, transform, variant ], {shadowed}, [ className ])}>
            {title}
        </Title>
    )
}

export default memo(Header)
