import {memo, useMemo, CSSProperties} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import {ThemeVariant} from "shared/types/theme"

import cls from "./Skeleton.module.sass"


export enum SkeletonElementType {
    AVATAR = "avatar",
    TITLE = "title",
    BLOCK = "block",
}

interface SkeletonProps {
    elements?: SkeletonElementType[]
    variant?: ThemeVariant
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
        variant = "primary",
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
        elements?.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className={classnames(cls, [ "shimmer__element", item ])} />
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
