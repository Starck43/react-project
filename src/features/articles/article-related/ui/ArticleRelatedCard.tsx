import React, {memo} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import {ArticleList, ArticleView} from "entities/article"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect"
import {classnames} from "shared/lib/helpers/classnames"
import Header from "shared/ui/header/Header"

import {getArticleRelatedError, getArticleRelatedLoading} from "../model/selectors/getArticleRelatedData"
import {articleRelatedReducer, getArticleRelatedData} from "../model/slice/articleRelatedSlice"
import {fetchArticleRelatedData} from "../model/services/fetchArticleRelatedData"

import cls from "./ArticleRelatedCard.module.sass"


interface ArticleRelatedProps {
    articleId: string
    className?: string
}

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
        <section className={classnames(cls, [ "related" ], {}, [ className ])}>
            <Header
                tag="h2"
                title={t("связанные статьи")}
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
    )
})
