import {ButtonHTMLAttributes, FC, memo} from "react"

import {classnames} from "@/shared/lib/helpers/classnames"
import CloseIcon from "@/shared/assets/icons/close.svg"

import {ButtonFeature, ButtonSize} from "../button/consts"
import {Button} from "../button/Button"

import cls from "./CloseButton.module.sass"


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    handleClick: () => void
}

export const CloseButton: FC<ButtonProps> = memo((props) => {
    const {handleClick, className, children, ...other} = props

    return (
        <Button
            type="button"
            Icon={CloseIcon}
            feature={ButtonFeature.CLEAR}
            size={ButtonSize.LARGE}
            rounded
            className={classnames(cls, [ "close__button" ], {}, [ className ])}
            {...other}
            onClick={handleClick}
        >
            {children}
        </Button>
    )
})
