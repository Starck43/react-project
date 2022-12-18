import {memo} from "react"

import {classnames} from "@/shared/lib/helpers/classnames"
import {Card} from "@/shared/ui/card"
import {Skeleton, SkeletonElementType} from "@/shared/ui/skeleton"

import cls from "../comment-card/CommentCard.module.sass"

interface CommentSkeletonProps {
    rounded?: boolean
    inlined?: boolean
    className?: string
}

export const CommentSkeleton = memo(({rounded = false, inlined = false, className}: CommentSkeletonProps) => (
    <Card
        direction="row"
        rounded={rounded}
        bordered
        className={classnames(cls, [ "comment" ], {}, [ "my-1", className ])}
    >
        <Skeleton
            variant="primary"
            elements={[ SkeletonElementType.AVATAR, SkeletonElementType.TITLE, SkeletonElementType.BLOCK ]}
            rounded={rounded}
            inlined={inlined}
            className={className}
        />
    </Card>
))
