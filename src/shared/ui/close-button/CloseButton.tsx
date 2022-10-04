import {ButtonHTMLAttributes, FC} from "react"

import {classnames} from "shared/lib/helpers/classnames"

import {Button, ButtonFeature} from "shared/ui/button/Button"
import cls from "./CloseButton.module.sass"


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    handleClick: () => void
}

export const CloseButton: FC<ButtonProps> = (props) => {
    const {handleClick, className, children, ...other} = props

    return (
        <Button
            type="button"
            feature={ButtonFeature.INVERTED}
            rounded
            className={classnames(cls, [ "close__button" ], {}, [ className ])}
            {...other}
            onClick={handleClick}
        >
            {children}
        </Button>
    )
}
