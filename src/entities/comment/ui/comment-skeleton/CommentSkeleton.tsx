import {memo} from "react"
import {Skeleton, SkeletonElementType, SkeletonVariant} from "shared/ui/skeleton/Skeleton"


interface CommentSkeletonProps {
    rounded?: boolean
    inlined?: boolean
    className?: string
}

export const CommentSkeleton = memo(({rounded = false, inlined = false, className}: CommentSkeletonProps) => (
    <>
        <Skeleton
            variant={SkeletonVariant.PRIMARY}
            elements={[ SkeletonElementType.AVATAR, SkeletonElementType.TITLE, SkeletonElementType.BLOCK ]}
            rounded={rounded}
            inlined={inlined}
            className={className}
        />
        <Skeleton
            variant={SkeletonVariant.PRIMARY}
            elements={[ SkeletonElementType.AVATAR, SkeletonElementType.TITLE, SkeletonElementType.BLOCK ]}
            rounded={rounded}
            inlined={inlined}
            className={className}
        />
        <Skeleton
            variant={SkeletonVariant.PRIMARY}
            elements={[ SkeletonElementType.AVATAR, SkeletonElementType.TITLE, SkeletonElementType.BLOCK ]}
            rounded={rounded}
            inlined={inlined}
            className={className}
        />
    </>
))
