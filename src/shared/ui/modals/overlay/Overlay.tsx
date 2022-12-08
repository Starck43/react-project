import {ElementType, memo} from "react"

import {classnames} from "@/shared/lib/helpers/classnames"

import cls from "./Overlay.module.sass"


interface OverlayProps {
    as?: ElementType
    open: boolean
    show: boolean
    onClick?: (() => void) | undefined
    className?: string
    style?: object
}

export const Overlay = memo((props: OverlayProps) => {
    const {
        as = "div", open, show, onClick, className, style,
    } = props

    const Tag = as
    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        <Tag
            aria-modal
            className={classnames(cls, [ "overlay" ], {open, show}, [ className ])}
            onClick={onClick}
            style={style}
        />
    )
})
