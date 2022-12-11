import {useMemo, CSSProperties} from "react"

import {classnames} from "@/shared/lib/helpers/classnames"
import {Flex} from "../stack"

import PlaceholderIcon from "./assets/avatar-placeholder.svg"
import cls from "./Avatar.module.sass"


type AvatarSize = number | "xs" | "sm" | "md" | "lg" | "xl"

interface AvatarProps {
    src?: string
    alt?: string
    title?: string
    size?: AvatarSize
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
        <Flex
            direction={inlined ? "row" : "column"}
            gap="xs"
            className={classnames(cls, [ "avatar", typeof size === "string" ? size : "" ], {}, [ className ])}
        >
            <div className={classnames(cls, [ "image__wrapper" ], {rounded, bordered})} style={style}>
                <PlaceholderIcon className={classnames(cls, [ "placeholder" ])} />
                {src && <img src={src as string} alt={alt} className={classnames(cls, [ "img" ])} />}
            </div>
            {title && <span className={cls.title}>{title}</span>}
        </Flex>
    )
}
