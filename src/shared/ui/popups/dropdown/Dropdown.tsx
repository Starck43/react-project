import {ReactNode, Fragment, memo, CSSProperties} from "react"
import {Menu} from "@headlessui/react"

import {classnames} from "@/shared/lib/helpers/classnames"
import {ThemeVariant} from "@/shared/types/theme"

import {Button} from "../../button/Button"
import styles from "../styles/Popups.module.sass"

import type {PopupPositionType} from "../types"

import cls from "./Dropdown.module.sass"


export interface DropdownItem {
    value: ReactNode
    disabled?: boolean
    href?: string
    onClick?: () => void
}

interface DropdownProps {
    variant?: ThemeVariant
    items: DropdownItem[]
    toggleElement: ReactNode
    rounded?: boolean
    shadowed?: boolean
    position?: PopupPositionType
    style?: CSSProperties
    className?: string
}

const Dropdown = (props: DropdownProps) => {
    const {
        variant = "primary",
        items,
        toggleElement,
        rounded = false,
        shadowed = true,
        position = "bottom_right",
        style = {},
        className,
    } = props

    return (
        <Menu
            as="div"
            style={style}
            className={classnames(cls, [ "dropdown" ], {}, [
                styles.popup,
                styles[variant],
                className,
            ])}
        >
            <Menu.Button as="div" className={styles.toggle__button}>
                {toggleElement}
            </Menu.Button>
            <Menu.Items
                className={classnames(cls, [ "menu" ], {}, [
                    styles.inner_block,
                    styles[position],
                    rounded ? styles.rounded : "",
                    shadowed ? styles.shadowed : "",
                ])}
            >
                {items.map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Menu.Item as={Fragment} disabled={item.disabled} key={index}>
                        {({active, disabled}) => (
                            <Button
                                variant={variant}
                                fullWidth
                                disabled={disabled}
                                href={item.href}
                                onClick={item.onClick}
                                className={classnames(cls, [ "item" ], {
                                    active,
                                    disabled,
                                }, [
                                    styles.item,
                                    active ? styles.active : "",
                                    disabled ? styles.disabled : "",
                                ])}
                            >
                                {item.value}
                            </Button>
                        )}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    )
}

export default memo(Dropdown)
