import { useMemo, CSSProperties } from "react"
import { Image } from "@/shared/ui/image"

import type { SizeType } from "@/shared/types/ui"
import { classnames } from "@/shared/lib/helpers/classnames"
import { Flex } from "../stack"

import PlaceholderIcon from "./assets/avatar-placeholder.svg"
import cls from "./Avatar.module.sass"

type AvatarSize = number | SizeType

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
    const { src = "", alt = "", title, size, inlined = false, rounded = false, bordered = false, className } = props

    const style = useMemo<CSSProperties>(
        () => ({
            width: typeof size === "number" ? size : undefined,
            height: typeof size === "number" ? size : undefined,
            padding: typeof size === "number" ? 0 : undefined,
        }),
        [size],
    )

    return (
        <Flex
            direction={inlined ? "row" : "column"}
            gap={size === "xs" ? "xs" : "sm"}
            className={classnames(cls, ["avatar", typeof size === "string" ? size : ""], {}, [className])}
        >
            <Image
                src={src}
                alt={alt}
                errorFallback={<PlaceholderIcon className={cls.placeholder} />}
                className={classnames(cls, ["image__wrapper"], {
                    rounded,
                    bordered,
                })}
                style={style}
            />

            {title && <span className={cls.title}>{title}</span>}
        </Flex>
    )
}
