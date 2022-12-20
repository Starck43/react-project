import {ReactNode, CSSProperties} from "react"
import {Popover as HeadlessPopover} from "@headlessui/react"

import {classnames} from "@/shared/lib/helpers/classnames"
import {ThemeVariant} from "@/shared/types/theme"

import type {PopupPositionType} from "../types"

import styles from "../styles/Popups.module.sass"
import cls from "./Popover.module.sass"


interface PopoverProps {
    variant?: ThemeVariant
    toggleElement: ReactNode
    rounded?: boolean
    shadowed?: boolean
    position?: PopupPositionType
    style?: CSSProperties
    className?: string
    children?: ReactNode
}

export const Popover = (props: PopoverProps) => {
    const {
        variant = "secondary",
        toggleElement,
        rounded = false,
        shadowed = true,
        position = "bottom_right",
        style = {},
        className,
        children,
    } = props

    return (
        <HeadlessPopover
            style={style}
            className={classnames(cls, [ "popover" ], {}, [
                styles.popup,
                styles[variant],
                className,
            ])}
        >
            <HeadlessPopover.Button as="div" className={styles.toggle__button}>
                {toggleElement}
            </HeadlessPopover.Button>

            <HeadlessPopover.Panel
                className={classnames(cls, [ "panel" ], {}, [
                    styles.inner_block,
                    styles[position],
                    rounded ? styles.rounded : "",
                    shadowed ? styles.shadowed : "",
                ])}
            >
                {children}
            </HeadlessPopover.Panel>
        </HeadlessPopover>
    )
}
