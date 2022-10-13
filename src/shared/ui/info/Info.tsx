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
    icon?: ReactNode
    status?: InfoStatus,
    className?: string
}

export const Info: FC<InfoProps> = (props) => {
    const {children, icon, status = InfoStatus.DEFAULT, className} = props

    return (
        <div className={classnames(cls, [ "text", status ], {}, [ className ])}>
            <i className={cls.icon}>{icon}</i>
            <p className={cls.paragraph}>{children}</p>
        </div>
    )
}
