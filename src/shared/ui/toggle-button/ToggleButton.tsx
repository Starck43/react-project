import {ButtonHTMLAttributes, FC, SVGProps} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import {PositionType} from "shared/types/ui"
import cls from "./ToggleButton.module.sass"



export interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    IconOpen?: FC<SVGProps<SVGSVGElement>>
    IconClose?: FC<SVGProps<SVGSVGElement>>
    position?: PositionType
    className?: string
}

// TODO: add Icons and status
export const ToggleButton: FC<ToggleButtonProps> = (props) => {
    const {
        position = "down",
        className,
        ...other
    } = props

    return (
        <button
            type="button"
            {...other}
            className={classnames(cls, [ "toggle__button", position ], {}, [ className ])}
        />
    )
}
