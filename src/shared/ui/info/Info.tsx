import {ReactNode} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import {AlignType} from "shared/types/ui"

import cls from "./Info.module.sass"


export enum InfoStatus {
    DEFAULT = "default",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}


export enum InfoSize {
    XL = "extra_large",
    LG = "large",
    MD = "medium",
    SM = "small"
}

export type InfoProps = {
    title?: string
    subtitle?: string
    icon?: ReactNode
    status?: InfoStatus
    align?: AlignType
    inlined?: boolean
    size?: InfoSize
    className?: string
}

export const Info = (props: InfoProps) => {
    const {
        subtitle,
        icon,
        title,
        align = "left",
        status = InfoStatus.DEFAULT,
        size = InfoSize.MD,
        inlined = false,
        className,
    } = props

    return (
        <div className={classnames(cls, [ "info__block", status, size, align ], {inlined}, [ className ])}>
            {title && <h3 className={cls.title}>{title}</h3>}
            {subtitle && (
                <p className={classnames(cls, [ "subtitle", align ], {}, [ "inline" ])}>
                    {icon && <i className="icon">{icon}</i>}
                    <span>{subtitle}</span>
                </p>
            )}
        </div>
    )
}
