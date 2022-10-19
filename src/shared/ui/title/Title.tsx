import {memo, ReactNode} from "react"

import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Title.module.sass"


export enum TitleCase {
    FIRST = "firstcase",
    UPPER = "uppercase",
    LOWER = "lowercase",
}

type TitleProps = {
    align?: string
    transform?: TitleCase
    shadowed?: boolean
    children: ReactNode
}

const Title = memo((props: TitleProps) => {
    const {children, align = "center", shadowed = false, transform = TitleCase.FIRST} = props
    return (
        <h1 className={classnames(cls, [ "title", align, transform ], {shadowed})}>{children}</h1>
    )
})

export default Title
