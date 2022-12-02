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
    Tag?: keyof HTMLElementTagNameMap
    title?: string
    subtitle?: string
    icon?: ReactNode
    status?: InfoStatus
    align?: AlignType
    inlined?: boolean
    size?: InfoSize
    className?: string

    "data-testid"?: string
}

export const Info = (props: InfoProps) => {
    const {
        Tag = "h3",
        subtitle,
        icon,
        title,
        align = "left",
        status = InfoStatus.DEFAULT,
        size = InfoSize.MD,
        inlined = false,
        className,
        "data-testid": dataTestId = "Info",
    } = props

    return (
        <div className={classnames(cls, [ "info__block", status, size, align ], {inlined}, [ className ])}>
            {title && <Tag data-testid={`${dataTestId}.Title`} className={cls.title}>{title}</Tag>}
            {subtitle && (
                <p data-testid={`${dataTestId}.SubTitle`} className={classnames(cls, [ "subtitle", align ], {}, [ "inline" ])}>
                    {icon && <i className="icon">{icon}</i>}
                    <span>{subtitle}</span>
                </p>
            )}
        </div>
    )
}
