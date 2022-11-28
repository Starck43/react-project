import {memo, useMemo, ReactNode} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import {ThemeVariant} from "shared/types/theme"
import {Flex} from "../../ui/stack"

import cls from "./Header.module.sass"

// TODO: Semantic review TitleType to any variants without mapping
type TitleTagType = "h1" | "h2" | "h3" | "h4" | "h5"

export enum TitleType {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
}

const mapTitleTypeToTag : Record<TitleType, TitleTagType> = {
    [TitleType.H1]: "h1",
    [TitleType.H2]: "h2",
    [TitleType.H3]: "h3",
    [TitleType.H4]: "h4",
    [TitleType.H5]: "h5",
}

export enum HeaderCase {
    FIRST = "firstcase",
    UPPER = "uppercase",
    LOWER = "lowercase",
}

type HeaderProps = {
    children?: ReactNode
    variant?: ThemeVariant
    title: ReactNode | string
    subTitle?: string
    titleType?: TitleType
    align?: "start" | "end" | "center" | "baseline"
    transform?: HeaderCase
    inlined?: boolean
    shadowed?: boolean
    className?: string
}

const Header = (props: HeaderProps) => {
    const {
        variant = "primary",
        title,
        subTitle,
        titleType = TitleType.H1,
        align = "start",
        inlined = false,
        transform = HeaderCase.FIRST,
        shadowed = false,
        className,
        children,
    } = props

    const titleElement = useMemo(() => {
        const TitleTag = mapTitleTypeToTag[titleType]
        return (
            typeof title === "string"
                ? <TitleTag className={classnames(cls, [ "title", transform ])}>{title}</TitleTag>
                : title
        )
    }, [ title, titleType, transform ])

    return (
        <Flex
            fullWidth
            align={align}
            justify="start"
            direction={inlined ? "row" : "column"}
            wrap={inlined}
            className={classnames(cls, [ "header", variant ], {shadowed}, [ className ])}
        >
            {titleElement}
            {subTitle && <p className={cls.subtitle}>{subTitle}</p>}
            {children}
        </Flex>
    )
}

export default memo(Header)
