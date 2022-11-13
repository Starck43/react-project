import {HTMLAttributes} from "react"
import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Card.module.sass"


interface CardProps extends HTMLAttributes<HTMLDivElement> {
    bordered?: boolean
    rounded?: boolean
    shadowed?: boolean
    className?: string
}

export const Card = (props: CardProps) => {
    const {
        bordered = false, rounded = false, shadowed = false, children, className, ...other
    } = props
    return (
        <div
            {...other}
            className={classnames(cls, [ "card" ], {bordered, rounded, shadowed}, [ className ])}
        >
            {children}
        </div>
    )
}
