import React, {memo} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import {
    fetchArticleRelatedData,
    getArticleRelatedData,
    getArticleRelatedError,
    getArticleRelatedLoading,
} from "features/articles"
import {ArticleList, ArticleView} from "entities/article"

import {articleRelatedReducer} from "features/articles/article-related/slice/articleRelatedSlice"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {classnames} from "shared/lib/helpers/classnames"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect"
import Header, {TitleType} from "shared/ui/header/Header"

import cls from "./ArticleRelatedCard.module.sass"


interface ArticleRelatedProps {
    articleId: string
    className?: string
}

const initialReducers: ReducerList = {articleRelated: articleRelatedReducer}

export const ArticleRelatedCard = memo(({articleId, className}: ArticleRelatedProps) => {
    const {t} = useTranslation("articles")
    const related = useSelector(getArticleRelatedData.selectAll)
    const isLoading = useSelector(getArticleRelatedLoading)
    const error = useSelector(getArticleRelatedError)
    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(fetchArticleRelatedData())
    })

    if (!articleId) return null

    return (
        <DynamicModuleLoader reducers={initialReducers} destroyOnUnmount={false}>
            <section className={classnames(cls, [ "related" ], {}, [ className ])}>
                <Header
                    title={t("связанные статьи")}
                    titleType={TitleType.H2}
                    shadowed
                    className="mt-2"
                />
                <ArticleList
                    articles={related}
                    isLoading={isLoading}
                    error={error}
                    view={ArticleView.TILE}
                    isRelated
                    className={cls.related__articles}
                />
            </section>
        </DynamicModuleLoader>
    )
})
