import React, {CSSProperties, useMemo} from "react"
import {classnames} from "shared/lib/helpers/classnames"
import {isNumber} from "util"

import PlaceholderIcon from "./avatar-placeholder.svg"
import cls from "./Avatar.module.sass"


export enum AvatarSize {
    XL = "extra_large",
    LG = "large",
    MD = "medium",
    SM = "small"
}

type SizeType = number | AvatarSize

interface AvatarProps {
    src?: string
    alt?: string
    title?: string
    size?: SizeType
    inlined?: boolean
    bordered?: boolean
    rounded?: boolean
    className?: string
}

export const Avatar = (props: AvatarProps) => {
    const {
        src = "",
        alt = "",
        title,
        size,
        inlined = false,
        rounded = false,
        bordered = false,
        className,
    } = props

    const style = useMemo<CSSProperties>(() => ({
        width: typeof size === "number" ? size : undefined,
        height: typeof size === "number" ? size : undefined,
    }), [ size ])

    return (
        <div
            className={classnames(cls, [ "avatar__wrapper", typeof size === "string" ? size : undefined ], {inlined}, [ className ])}
        >
            <div className={classnames(cls, [ "image" ], {rounded, bordered})} style={style}>
                {src
                ? <img src={src as string} alt={alt} className={cls.img} />
                : <PlaceholderIcon className={cls.placeholder} />}

            </div>
            {title && <span className={cls.title}>{title}</span>}
        </div>
    )
}
