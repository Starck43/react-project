import {memo} from "react"
import {Skeleton, SkeletonElementType} from "@/shared/ui/skeleton/Skeleton"


interface ArticleSkeletonProps {
    className?: string
}

export const ArticleDetailsSkeleton = memo(({className}: ArticleSkeletonProps) => (
    <>
        <Skeleton
            variant="primary"
            elements={[ SkeletonElementType.TITLE ]}
            rounded
            inlined
            width="75%"
            height="2.2em"
            className="mb-1"
        />
        <Skeleton
            variant="primary"
            elements={[ SkeletonElementType.TITLE ]}
            rounded
            width="50%"
            className="mb-2"
        />
        <Skeleton
            variant="primary"
            elements={[ SkeletonElementType.AVATAR ]}
            rounded
            height={150}
            width={150}
            className="mb-2"
        />
        <Skeleton
            variant="primary"
            elements={[ SkeletonElementType.BLOCK ]}
            rounded
            height="200px"
            className={className}
        />
    </>
))
