import {memo, useMemo, CSSProperties} from "react"

import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Skeleton.module.sass"


export enum SkeletonElementType {
    AVATAR = "avatar",
    TITLE = "title",
    BLOCK = "block",
}

export enum SkeletonVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface SkeletonProps {
    elements?: SkeletonElementType[]
    variant?: SkeletonVariant
    width?: string | number
    height?: string | number
    rounded?: boolean
    borderRadius?: string
    inlined?: boolean
    className?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        elements,
        variant = SkeletonVariant.PRIMARY,
        width = "100%",
        height = "100%",
        rounded = false,
        borderRadius,
        inlined = false,
        className,
    } = props

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: rounded ? borderRadius : "none",
    }

    // TODO: styles for every shimmer element inside skeleton
    const shimmerElements = useMemo(() => (
        elements?.map((item) => (
            <div key={item} className={classnames(cls, [ "shimmer__element", item ])} />
        ))
    ), [ elements ])

    return (
        <div
            className={classnames(cls, [ "skeleton", variant ], {rounded, inlined}, [ className ])}
            style={styles}
        >
            {elements && shimmerElements}
        </div>
    )
})
