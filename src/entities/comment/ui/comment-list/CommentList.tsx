import React, {memo} from "react"


import type {Comment} from "../../model/types/comment"
import {CommentCard} from "../comment-card/CommentCard"
import {CommentSkeleton} from "../comment-skeleton/CommentSkeleton"

import cls from "./CommentList.module.sass"


interface CommentListProps {
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = memo(({comments, isLoading}: CommentListProps) => (
    <section
        data-testid="Comments.List"
        className={cls.comments__section}
    >
        {comments?.map((comment) => (
            <CommentCard data={comment} key={comment.id} />
        ))}
        {isLoading && new Array(3).fill(0).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CommentSkeleton rounded inlined key={index} />
        ))}
    </section>
))
