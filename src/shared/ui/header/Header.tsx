import {createElement, memo, ReactNode, useMemo} from "react"

import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Header.module.sass"


export enum TitleType {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
}

export enum HeaderAlign {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right"
}

export enum HeaderCase {
    FIRST = "firstcase",
    UPPER = "uppercase",
    LOWER = "lowercase",
}

type HeaderProps = {
    children?: ReactNode
    title: ReactNode | string
    subTitle?: string
    titleType?: TitleType
    align?: HeaderAlign
    transform?: HeaderCase
    shadowed?: boolean
    className?: string
}

const Header = (props: HeaderProps) => {
    const {
        children,
        title,
        subTitle,
        titleType = TitleType.H1,
        align = HeaderAlign.LEFT,
        transform = HeaderCase.FIRST,
        shadowed = false,
        className,
    } = props

    const titleElement = useMemo(() => (
        typeof title === "string"
            ? createElement(titleType, {className: classnames(cls, [ "title", transform ])}, title)
            : title
    ), [ title, titleType, transform ])

    return (
        <div className={classnames(cls, [ "header", align ], {shadowed}, [ className ])}>
            {titleElement}
            {subTitle && <p className={cls.subtitle}>{subTitle}</p>}
            {children}
        </div>
    )
}

export default memo(Header)
