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
    borderRadius?: string
    rounded?: boolean
    inlined?: boolean
    className?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        elements = [ SkeletonElementType.TITLE ],
        variant = SkeletonVariant.PRIMARY,
        width = "100%",
        height,
        rounded = false,
        borderRadius,
        inlined = false,
        className,
    } = props

    const styles: CSSProperties = {
        width,
        height: height || (inlined ? "1.6em" : "auto"),
        borderRadius: rounded ? borderRadius : "none",
    }

    // TODO: styles for every shimmer element inside skeleton
    const shimmerElements = useMemo(() => (
        elements?.map((item, i) => (
            <div key={i} className={classnames(cls, [ "shimmer__element", item ])} />
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
