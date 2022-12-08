import {memo, useCallback, Suspense} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {getCommentsError, getCommentsLoading, NewCommentForm, CommentList} from "@/entities/comment"

import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "@/shared/lib/hooks/useInitialEffect"
import {classnames} from "@/shared/lib/helpers/classnames"
import Header from "@/shared/ui/header/Header"

import {getArticleCommentsData} from "../model/slice/articleCommentsSlice"
import {fetchArticleCommentsData} from "../model/services/fetchArticleCommentsData"
import {saveArticleComment} from "../model/services/saveArticleComment"

import cls from "./ArticleCommentsCard.module.sass"


interface CommentsCardProps {
    articleId?: string
    className?: string
}

export const ArticleCommentsCard = memo(({articleId, className}: CommentsCardProps) => {
    const {t} = useTranslation("comments")
    const comments = useSelector(getArticleCommentsData.selectAll)
    const isLoading = useSelector(getCommentsLoading)
    const error = useSelector(getCommentsError)
    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(fetchArticleCommentsData(articleId))
    })

    const onSaveComment = useCallback((text: string) => {
        dispatch(saveArticleComment(text))
    }, [ dispatch ])

    if (!articleId) return null

    return (
        <section className={classnames(cls, [ "article__comments" ], {}, [ className ])}>
            <Header tag="h2" title={t("комментарии")} shadowed className="mt-2" />

            <Suspense fallback="">
                <NewCommentForm className="mb-2" onSaveComment={onSaveComment} />
            </Suspense>

            {/* TODO: make lazy loading for comments after scrolling into viewport */}
            <CommentList comments={comments} isLoading={isLoading} error={error} />
        </section>
    )
})
