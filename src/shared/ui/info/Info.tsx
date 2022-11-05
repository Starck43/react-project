import {FC, ReactNode} from "react"
import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Info.module.sass"


export enum InfoStatus {
    DEFAULT = "default",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}

export enum InfoAlign {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right"
}

export enum InfoSize {
    XL = "extra_large",
    LG = "large",
    MD = "medium",
    SM = "small"
}

export type InfoProps = {
    title?: string
    icon?: ReactNode
    status?: InfoStatus
    align?: InfoAlign
    inlined?: boolean
    size?: InfoSize
    className?: string
}

export const Info: FC<InfoProps> = (props) => {
    const {
        children,
        icon,
        title,
        align = InfoAlign.LEFT,
        status = InfoStatus.DEFAULT,
        size = InfoSize.MD,
        inlined = false,
        className,
    } = props

    return (
        <div className={classnames(cls, [ "text", status, size, align ], {inlined}, [ className ])}>
            {title && <h2 className={cls.title}>{title}</h2>}
            <p className={classnames(cls, [ "subtitle", align ])}>
                {icon && <i className="icon">{icon}</i>}
                <span>{children}</span>
            </p>
        </div>
    )
}
