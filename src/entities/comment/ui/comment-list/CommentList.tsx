import {memo} from "react"
import {useTranslation} from "react-i18next"

import {classnames} from "shared/lib/helpers/classnames"
import {Info, InfoAlign, InfoStatus} from "shared/ui/info/Info"

import {CommentCard} from "../comment-card/CommentCard"
import {ArticleComment} from "../../model/types/comments"

import cls from "./CommentList.module.sass"


interface CommentsListProps {
    comments?: ArticleComment[]
    isLoading: boolean
    error?: string
    className?: string
}

export const CommentList = memo(({comments, isLoading, error, className}: CommentsListProps) => {
    const {t} = useTranslation("comments")

    if (error) {
        return (
            <Info
                title={t("произошла ошибка")}
                subtitle={t("комментарии не найдены!")}
                status={InfoStatus.ERROR}
                align={InfoAlign.CENTER}
            />
        )
    }

    console.log(comments)
    return (
        <div className={classnames(cls, [ "comment__list" ], {}, [ className ])}>
            {comments?.length
                ? comments.map((comment) => <CommentCard data={comment} isLoading={isLoading} key={comment.id} />)
                : <Info subtitle={t("комментарий отсутствует!")} align={InfoAlign.CENTER} />}
        </div>
    )
})
