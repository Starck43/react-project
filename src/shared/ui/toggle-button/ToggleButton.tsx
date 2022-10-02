import {ButtonHTMLAttributes, FC} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import cls from "./ToggleButton.module.sass"


export enum ToggleButtonVariant {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

export interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string
    className?: string
}

export const ToggleButton: FC<ToggleButtonProps> = (props) => {
    const {
        variant = ToggleButtonVariant.DOWN,
        className,
        children,
        ...other
    } = props

    return (
        <button
            type="button"
            {...other}
            className={classnames(cls, [ "toggle__button", variant ], {}, [ className ])}
        >
            {children}
        </button>
    )
}
