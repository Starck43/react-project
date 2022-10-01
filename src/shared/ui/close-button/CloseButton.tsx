import {ButtonHTMLAttributes, FC} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import cls from "./CloseButton.module.sass"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    handleClick: () => void
}

export const CloseButton: FC<ButtonProps> = (props) => {
    const {handleClick, className, children, ...other} = props

    return (
        <button
            type="button"
            className={classnames(cls, [ "close__button" ], {}, [ className ])}
            {...other}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}
