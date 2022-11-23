import {memo} from "react"
import {Skeleton, SkeletonElementType, SkeletonVariant} from "shared/ui/skeleton/Skeleton"


interface ArticleSkeletonProps {
    className?: string
}

export const ArticleDetailsSkeleton = memo(({className}: ArticleSkeletonProps) => (
    <>
        <Skeleton
            variant={SkeletonVariant.PRIMARY}
            elements={[ SkeletonElementType.TITLE ]}
            rounded
            inlined
            width="75%"
            height="2.2em"
            className="mb-1"
        />
        <Skeleton
            variant={SkeletonVariant.PRIMARY}
            elements={[ SkeletonElementType.TITLE ]}
            rounded
            width="50%"
            className="mb-2"
        />
        <Skeleton
            variant={SkeletonVariant.PRIMARY}
            elements={[ SkeletonElementType.AVATAR ]}
            rounded
            height={150}
            width={150}
            className="mb-2"
        />
        <Skeleton
            variant={SkeletonVariant.PRIMARY}
            elements={[ SkeletonElementType.BLOCK ]}
            rounded
            height="200px"
            className={className}
        />
    </>
))
