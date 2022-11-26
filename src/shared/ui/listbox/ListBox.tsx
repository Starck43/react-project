import {
    CSSProperties, FC, Fragment, ReactNode, useMemo,
} from "react"
import {Listbox as HeadlessListBox} from "@headlessui/react"

import {classnames} from "shared/lib/helpers/classnames"
import {Button, ButtonFeature} from "shared/ui/button/Button"

import DropdownIcon from "./assets/arrow-down.svg"

import cls from "./ListBox.module.sass"


export enum ListBoxVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

type DropdownDirectionType = "top" | "bottom"

interface ListBoxOption {
    value: string
    content: ReactNode
    disabled?: boolean
}

interface ListBoxProps {
    variant?: ListBoxVariant
    name?: string
    items: ListBoxOption[]
    selectedOption?: ListBoxOption
    defaultOption?: ListBoxOption
    direction?: DropdownDirectionType
    label?: string
    compact?: boolean
    rounded?: boolean
    onChange: <T = string>(value: T) => void
    style?: CSSProperties
    className?: string
}

const ListBox: FC<ListBoxProps> = (props) => {
    const {
        variant = ListBoxVariant.PRIMARY,
        name,
        items,
        selectedOption,
        defaultOption,
        direction = "bottom",
        label = "---",
        compact = false,
        rounded = false,
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
            className={classnames(cls, [ "listBox" ], {compact}, [ className ])}
        >
            {!compact && label
            && (
                <HeadlessListBox.Label className={cls.label}>
                    {label}
                </HeadlessListBox.Label>
            )}

            <HeadlessListBox.Button as="div" className="button__wrapper">
                <Button
                    feature={ButtonFeature.BLANK}
                    align="left"
                    bordered
                    rounded={rounded}
                    style={style}
                    className={cls.trigger}
                >
                    {selectedOption?.content || defaultOption?.content || label}
                    <DropdownIcon className={cls.dropdown__icon} />
                </Button>
            </HeadlessListBox.Button>

            <HeadlessListBox.Options
                style={style}
                className={classnames(cls, [ "listBox__options", variant, direction ], {compact, rounded})}
            >
                {listBoxOptions?.map((item) => (
                    <HeadlessListBox.Option
                        as={Fragment}
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                    >
                        {({active, selected, disabled}) => (
                            <li className={classnames(cls, [ "item" ], {active, selected, disabled})}>
                                {item.content}
                            </li>
                        )}
                    </HeadlessListBox.Option>
                ))}
            </HeadlessListBox.Options>
        </HeadlessListBox>
    )
}

export default ListBox
