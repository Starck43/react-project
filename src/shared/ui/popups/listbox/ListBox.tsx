import {CSSProperties, Fragment, ReactNode, useMemo} from "react"
import {Listbox as HeadlessListBox} from "@headlessui/react"

import {classnames} from "@/shared/lib/helpers/classnames"
import {ThemeVariant} from "@/shared/types/theme"

import type {AlignType} from "@/shared/types/ui"
import {Button} from "@/shared/ui/button"
import {PopupPositionType} from "../types"
import styles from "../styles/Popups.module.sass"

import DropdownIcon from "./assets/arrow-down.svg"
import cls from "./ListBox.module.sass"


interface ListBoxOption {
    value: string
    content: ReactNode
    disabled?: boolean
}

interface ListBoxProps {
    variant?: ThemeVariant
    name?: string
    items: ListBoxOption[]
    selectedOption?: ListBoxOption
    defaultOption?: ListBoxOption
    position?: PopupPositionType
    label?: string | null
    align?: AlignType
    compact?: boolean
    rounded?: boolean
    bordered?: boolean
    shadowed?: boolean
    onChange: <T = string>(value: T | any) => void
    style?: CSSProperties
    className?: string
}

export const ListBox = (props: ListBoxProps) => {
    const {
        variant = "primary",
        name,
        items,
        selectedOption,
        defaultOption,
        compact = false,
        rounded = false,
        bordered = false,
        shadowed = true,
        align = "left",
        position = "bottom_right",
        label = "---",
        onChange,
        style = {},
        className,
    } = props

    const listBoxOptions = useMemo(() => (
        compact ? [ {value: "_label", content: `${label}:`, disabled: true}, ...items ] : items
    ), [ compact, items, label ])

    return (
        <HeadlessListBox
            as="div"
            name={name}
            value={selectedOption}
            defaultValue={defaultOption}
            // multiple
            onChange={onChange}
            style={style}
            className={classnames(cls, [ "listBox" ], {compact}, [
                styles.popup,
                styles[variant],
                className,
            ])}
        >
            {!compact && label
            && (
                <HeadlessListBox.Label className={cls.label}>
                    {label}
                </HeadlessListBox.Label>
            )}

            <HeadlessListBox.Button as="div" className="button__wrapper">
                {({open}) => (
                    <Button
                        variant={variant}
                        align={align}
                        bordered={bordered}
                        rounded={rounded}
                        style={style}
                        className={cls.toggle__button}
                    >
                        <>
                            {selectedOption?.content || defaultOption?.content || label}
                            <DropdownIcon className={classnames(cls, [ "dropdown__icon" ], {open})} />
                        </>
                    </Button>
                )}
            </HeadlessListBox.Button>

            <HeadlessListBox.Options
                style={style}
                className={classnames(cls, [ "options" ], {compact}, [
                    styles.inner_block,
                    styles[align],
                    styles[position],
                    rounded ? styles.rounded : "",
                    shadowed ? styles.shadowed : "",
                ])}
            >
                {listBoxOptions?.map((item) => (
                    <HeadlessListBox.Option
                        as={Fragment}
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                    >
                        {({active, selected, disabled}) => (
                            <li className={classnames(cls, [ "item" ], {
                                active,
                                selected,
                                disabled,
                            }, [
                                styles.item,
                                active ? styles.active : "",
                                selected ? styles.selected : "",
                                disabled ? styles.disabled : "",
                            ])}
                            >
                                {item.content}
                            </li>
                        )}
                    </HeadlessListBox.Option>
                ))}
            </HeadlessListBox.Options>
        </HeadlessListBox>
    )
}
