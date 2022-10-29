import {memo, ReactNode} from "react"

import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Title.module.sass"


export enum TitleCase {
    FIRST = "firstcase",
    UPPER = "uppercase",
    LOWER = "lowercase",
}

type TitleProps = {
    children: ReactNode
    subTitle?: ReactNode
    align?: string
    transform?: TitleCase
    shadowed?: boolean
}

const Title = memo((props: TitleProps) => {
    const {
children, subTitle, align = "left", shadowed = false, transform = TitleCase.FIRST,
} = props
    return (
        <div className={classnames(cls, [ "header" ], {}, [])}>
            <h1 className={classnames(cls, [ "title", align, transform ], {shadowed})}>
                {children}
            </h1>
            {subTitle && subTitle}
        </div>
    )
})

export default Title
