import React, {CSSProperties, useMemo} from "react"
import {classnames} from "shared/lib/helpers/classnames"

import PlaceholderIcon from "shared/assets/icons/avatar-default.svg"
import cls from "./Avatar.module.sass"


interface AvatarProps {
    src?: string
    alt?: string
    size?: number
    rounded?: boolean
    className?: string
}

export const Avatar = (props: AvatarProps) => {
    const {
        src = "", alt = "", size = 100, rounded = false, className,
    } = props

    const style = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [ size ])

    return (
        <div className={classnames(cls, [ "avatar__wrapper" ], {rounded}, [ className ])} style={style}>
            {src
                ? <img src={src as string} alt={alt} className={cls.img} />
                : <PlaceholderIcon className={cls.placeholder} />}
        </div>
    )
}
