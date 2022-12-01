import {ArticleList, ArticleView} from "entities/article"
import React, {memo} from "react"
import {useTranslation} from "react-i18next"

import {classnames} from "shared/lib/helpers/classnames"
import Header from "shared/ui/header/Header"
import {PageLoader} from "widgets/page-loader/PageLoader"

import {useArticleRelatedList} from "../api"

import cls from "./ArticleRelatedList.module.sass"


interface ArticleRelatedProps {
    className?: string
}

export const ArticleRelatedList = memo(({className}: ArticleRelatedProps) => {
    const {t} = useTranslation("articles")
    const {isLoading, data: related, error} = useArticleRelatedList({limit: 3})

    if (isLoading) {
        return <PageLoader />
    }
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
                view={ArticleView.TILE}
                isLoading={isLoading}
                isRelated
                className={cls.related__articles}
            />
        </section>
    )
})
