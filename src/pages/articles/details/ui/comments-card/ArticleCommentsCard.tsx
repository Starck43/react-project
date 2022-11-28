import React, {memo, useCallback} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {
    CommentList, commentsReducer, getCommentsData, getCommentsError, getCommentsLoading,
} from "entities/comment"

import {fetchCommentsData, saveCommentForArticle} from "features/articles"
import {NewCommentForm} from "features/comments"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect"
import {classnames} from "shared/lib/helpers/classnames"
import Header, {TitleType} from "shared/ui/header/Header"

import cls from "./ArticleCommentsCard.module.sass"


interface CommentsCardProps {
    articleId: string
    className?: string
}

const initialReducers: ReducerList = {comments: commentsReducer}

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

    if (!articleId) return null

    return (
        <DynamicModuleLoader reducers={initialReducers} destroyOnUnmount={false}>
            <section className={classnames(cls, [ "article__comments" ], {}, [ className ])}>
                <Header title={t("комментарии")} shadowed titleType={TitleType.H2} className="mt-2" />
                <NewCommentForm className="mb-2" onSaveComment={onSaveComment} />
                {/* TODO: make lazy loading for comments on scroll to comments Header */}
                <CommentList comments={comments} isLoading={isLoading} error={error} />
            </section>
        </DynamicModuleLoader>
    )
})
