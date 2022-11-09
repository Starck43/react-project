import {CommentSkeleton} from "entities/comment/ui/comment-skeleton/CommentSkeleton"
import React, {memo} from "react"
import {useTranslation} from "react-i18next"

import {Avatar} from "shared/ui/avatar/Avatar"
import Header, {HeaderCase, TitleType} from "shared/ui/header/Header"

import {ArticleComment} from "../../model/types/comments"

import cls from "./CommentCard.module.sass"


interface CommentCardProps {
    data: ArticleComment
    isLoading?: boolean
}

export const CommentCard = memo(({data, isLoading}: CommentCardProps) => {
    const {t} = useTranslation("comments")

    if (isLoading) return <CommentSkeleton rounded inlined />

    return (
        <div data-testid="comment-card" className={cls.comment}>
            <Avatar size={50} src={data.user?.avatar} rounded bordered />
            <Header
                title={data.user.username}
                subTitle={data.text}
                titleType={TitleType.H5}
                className={cls.comment__header}
            />
        </div>
    )
})
