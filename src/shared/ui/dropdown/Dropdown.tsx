import {memo, ReactNode, CSSProperties, Fragment} from "react"
import {Menu} from "@headlessui/react"

import {classnames} from "shared/lib/helpers/classnames"
import {ThemeVariant} from "shared/types/theme"
import {PositionType} from "shared/types/ui"

import {Button} from "../button/Button"

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
    control: ReactNode
    position?: PositionType
    style?: CSSProperties
    className?: string
}

export const Dropdown = memo((props: DropdownProps) => {
    const {
        variant = "primary",
        items,
        control,
        position = "bottom_right",
        style = {},
        className,
    } = props

    return (
        <Menu as="div" style={style} className={classnames(cls, [ "dropdown" ], {}, [ className ])}>
            <Menu.Button as="div" className={cls.trigger}>
                {control}
            </Menu.Button>
            <Menu.Items className={classnames(cls, [ "menu", variant, position ])}>
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
                                className={classnames(cls, [ "item" ], {active, disabled})}
                            >
                                {item.value}
                            </Button>
                        )}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    )
})
