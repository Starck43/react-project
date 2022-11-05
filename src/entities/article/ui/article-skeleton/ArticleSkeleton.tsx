import {memo} from "react"
import {Skeleton, SkeletonElementType, SkeletonVariant} from "shared/ui/skeleton/Skeleton"


interface ArticleSkeletonProps {
    rounded?: boolean
    inlined?: boolean
    className?: string
}

export const ArticleSkeleton = memo(({rounded = false, inlined = false, className}: ArticleSkeletonProps) => (
    <Skeleton
        variant={SkeletonVariant.PRIMARY}
        elements={[ SkeletonElementType.AVATAR, SkeletonElementType.TITLE, SkeletonElementType.BLOCK ]}
        rounded={rounded}
        inlined={inlined}
        className={className}
    />
))
