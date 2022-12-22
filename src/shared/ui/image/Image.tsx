import {
    useLayoutEffect, useState, memo,
    ImgHTMLAttributes, ReactElement,
} from "react"

import {classnames} from "@/shared/lib/helpers/classnames"

import cls from "./Image.module.sass"


interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallback?: ReactElement
    errorFallback?: ReactElement
    className?: string
}

export const LazyImage = memo((props: LazyImageProps) => {
    const {
        src,
        alt = "",
        fallback,
        errorFallback,
        className,
        style,
        ...others
    } = props
    const [ isLoading, setIsLoading ] = useState(true)
    const [ noImage, setNoImage ] = useState(false)

    useLayoutEffect(() => {
        const img: HTMLImageElement = new Image()
        img.src = src ?? ""
        img.onload = () => {
            setIsLoading(false)
        }
        img.onerror = () => {
            setIsLoading(false)
            setNoImage(true)
        }
    }, [ src ])

    let content = (
        <img
            src={src}
            alt={alt}
            className={cls.img}
            loading="lazy"
            {...others}
        />
    )

    if (isLoading && fallback) {
        content = fallback
    }

    if (noImage && errorFallback) {
        content = errorFallback
    }

    return (
        <div
            className={classnames(cls, [ "wrapper" ], {isLoading, noImage}, [ className ])}
            style={style}
        >
            {content}
        </div>
    )
})
