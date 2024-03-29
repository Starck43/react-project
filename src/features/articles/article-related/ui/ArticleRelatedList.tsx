import React, { memo } from "react"
import { useTranslation } from "react-i18next"

import { ArticleList, ArticleView } from "@/entities/article"

import { classnames } from "@/shared/lib/helpers/classnames"
import { Header } from "@/shared/ui/header"
import { Loader } from "@/shared/ui/loader"

import { useArticleRelatedList } from "../api"

import cls from "./ArticleRelatedList.module.sass"

interface ArticleRelatedProps {
    articleId?: string
    className?: string
}

export const ArticleRelatedList = memo(({ articleId, className }: ArticleRelatedProps) => {
    const { t } = useTranslation("articles")
    const { isLoading, data: related, error } = useArticleRelatedList({ limit: 4 })

    if (!related || error) return null

    if (isLoading) {
        return <Loader />
    }

    return (
        <section data-testid="Article.Related" className={classnames(cls, ["related"], {}, [className])}>
            <Header tag="h2" title={t("связанные статьи")} shadowed align="center" className="mt-2" />
            <div className={cls.articles__wrapper}>
                <ArticleList
                    articles={related}
                    view={ArticleView.TILE}
                    isLoading={isLoading}
                    inlined
                    virtualized={false}
                    className={cls.related__list}
                />
            </div>
        </section>
    )
})
