import React, {memo, useCallback} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {CommentList, getCommentsData, getCommentsError, getCommentsLoading} from "entities/comment"

import {fetchCommentsData, saveCommentForArticle} from "features/articles"
import {NewCommentForm} from "features/comments/new-comment"

import {classnames} from "shared/lib/helpers/classnames"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect"
import Header, {TitleType} from "shared/ui/header/Header"

import cls from "./ArticleCommentsCard.module.sass"


interface CommentsCardProps {
    articleId: string
	className?: string
}

export const ArticleCommentsCard = memo(({articleId, className}: CommentsCardProps) => {
	const {t} = useTranslation("comments")
    const comments = useSelector(getCommentsData.selectAll)
    const isLoading = useSelector(getCommentsLoading)
    const error = useSelector(getCommentsError)
    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(fetchCommentsData(articleId))
    })

    const onSaveComment = useCallback((text: string) => {
        dispatch(saveCommentForArticle(text))
    }, [ dispatch ])

    return (
        <section className={classnames(cls, [ "article__comments" ], {}, [ className ])}>
            <Header title={t("комментарии")} shadowed titleType={TitleType.H2} className="mt-2" />
            <NewCommentForm className="mb-2" onSaveComment={onSaveComment} />
            {/* TODO: make lazy loading for comments on scroll to comments Header */}
            <CommentList comments={comments} isLoading={isLoading} error={error} />
        </section>
    )
})
