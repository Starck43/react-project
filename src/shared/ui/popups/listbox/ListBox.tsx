import {
    memo, useMemo, FC, Fragment, ReactNode, CSSProperties,
} from "react"
import {Listbox as HeadlessListBox} from "@headlessui/react"

import {classnames} from "shared/lib/helpers/classnames"
import {ThemeVariant} from "shared/types/theme"

import {PositionType} from "../../../types/ui"
import {Button} from "../../button/Button"
import DropdownIcon from "./assets/arrow-down.svg"

import cls from "./ListBox.module.sass"
import styles from "../styles/Popups.module.sass"


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
    position?: PositionType
    label?: string | null
    compact?: boolean
    rounded?: boolean
    shadowed?: boolean
    onChange: <T = string>(value: T | any) => void
    style?: CSSProperties
    className?: string
}

const ListBox = (props: ListBoxProps) => {
    const {
        variant = "primary",
        name,
        items,
        selectedOption,
        defaultOption,
        compact = false,
        rounded = false,
        shadowed = true,
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
                <Button
                    align="left"
                    bordered
                    rounded={rounded}
                    style={style}
                    className={cls.toggle__button}
                >
                    {selectedOption?.content || defaultOption?.content || label}
                    <DropdownIcon className={cls.dropdown__icon} />
                </Button>
            </HeadlessListBox.Button>

            <HeadlessListBox.Options
                style={style}
                className={classnames(cls, [ "options" ], {compact}, [
                    styles.inner_block,
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

export default memo(ListBox)
