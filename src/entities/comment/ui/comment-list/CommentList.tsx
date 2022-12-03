import React, {memo} from "react"
import {useTranslation} from "react-i18next"

import {classnames} from "shared/lib/helpers/classnames"
import {Info, InfoStatus} from "shared/ui/info/Info"

import {Comment} from "../../model/types/comment"
import {CommentCard} from "../comment-card/CommentCard"
import {CommentSkeleton} from "../comment-skeleton/CommentSkeleton"

import cls from "./CommentList.module.sass"


interface CommentListProps {
    comments?: Comment[]
    isLoading?: boolean
    error?: string
    className?: string
}

export const CommentList = memo((props: CommentListProps) => {
    const {comments, isLoading, error, className} = props
    const {t} = useTranslation("comments")

    if (error) {
        return (
            <Info
                subTitle={t("комментарии не найдены!")}
                status={InfoStatus.ERROR}
            />
        )
    }

    if (isLoading) return <CommentSkeleton rounded inlined />


    return (
        <section className={classnames(cls, [ "comments__list" ], {}, [ className ])}>
            <div className={cls.comment__list}>
                {comments?.length
                    ? comments.map((comment) => <CommentCard data={comment} key={comment.id} />)
                    : <Info subTitle={t("комментарии отсутствуют!")} />}
            </div>
        </section>
    )
})
