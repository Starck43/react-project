import {FC, ReactNode} from "react"
import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Info.module.sass"


export enum InfoStatus {
    DEFAULT = "default",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}

export type InfoProps = {
    title?: string
    icon?: ReactNode
    status?: InfoStatus
    align?: string
    className?: string
}

export const Info: FC<InfoProps> = (props) => {
    const {
        children,
        icon,
        title,
        align = "left",
        status = InfoStatus.DEFAULT,
        className,
    } = props

    return (
        <div className={classnames(cls, [ "text", status, align ], {}, [ className ])}>
            {title && <h3>{title}</h3>}
            <p className={classnames(cls, [ "paragraph", align ])}>
                {icon && <i className={cls.icon}>{icon}</i>}
                <span>{children}</span>
            </p>
        </div>
    )
}
