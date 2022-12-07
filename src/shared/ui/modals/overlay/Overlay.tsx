import {memo} from "react"
import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Overlay.module.sass"


interface OverlayProps {
    open: boolean
    show: boolean
    onClick?: (() => void) | undefined
    animationTime?: number
    className?: string
}

export const Overlay = memo((props: OverlayProps) => {
    const {
open, show, onClick, animationTime = 220, className,
} = props
    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        <div
            aria-modal
            className={classnames(cls, [ "overlay" ], {open, show}, [ className ])}
            onClick={onClick}
            style={{transitionDuration: `${animationTime}ms`}}
        />
    )
})
