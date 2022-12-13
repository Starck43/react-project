import React, {memo} from "react"
import {useTranslation} from "react-i18next"
import {Button} from "@/shared/ui/button/Button"
import {ButtonSize} from "@/shared/ui/button/consts"

import {classnames} from "@/shared/lib/helpers/classnames"
import {Info, InfoStatus} from "@/shared/ui/info/Info"

import type {Comment} from "../../model/types/comment"
import {CommentCard} from "../comment-card/CommentCard"
import {CommentSkeleton} from "../comment-skeleton/CommentSkeleton"

import cls from "./CommentList.module.sass"


interface CommentListProps {
    comments?: Comment[]
    isLoading?: boolean
    className?: string
}

export const CommentList = memo((props: CommentListProps) => {
    const {comments, isLoading, className} = props

    return (
        <section className={classnames(cls, [ "comments__list" ], {}, [ className ])}>
            <div className={cls.comment__list}>
                {!isLoading && comments?.length && comments.map((comment) => (
                    <CommentCard data={comment} key={comment.id} />
                ))}
                {isLoading && new Array(3).fill(0).map((_, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <CommentSkeleton rounded inlined key={index} />
                ))}
            </div>
        </section>
    )
})
