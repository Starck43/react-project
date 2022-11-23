import {memo} from "react"
import {useTranslation} from "react-i18next"

import {classnames} from "shared/lib/helpers/classnames"
import {Info, InfoAlign} from "shared/ui/info/Info"

import {Article, ArticleView} from "../../model/types/article"
import {ArticleListItem} from "../article-list-item/ArticleListItem"
import {renderArticlesSkeleton} from "../article-list-skeleton/ArticleListSkeleton"

import cls from "./ArticleList.module.sass"


interface ArticleListProps {
    articles: Article[]
    isLoading: boolean
    error?: string
    view: ArticleView
    shadowed?: boolean
    isRelated?: boolean
    className?: string
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        articles, isLoading, error, view, shadowed, isRelated = false, className,
    } = props

    const {t} = useTranslation("articles")

    const renderArticleList = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            shadowed={shadowed}
            target={isRelated ? "_blank" : ""}
            className={isRelated ? cls.related__card : ""}
            key={article.id}
        />
    )

    if (error) {
        return <Info title={t("ошибка загрузки статей!")} align={InfoAlign.CENTER} />
    }

    if (!isLoading && !articles.length) {
        return <Info title={t("статьи не найдены!")} align={InfoAlign.CENTER} />
    }

    return (
        <div className={classnames(cls, [ "articles", view ], {}, [ className ])}>
            {articles.length ? articles.map(renderArticleList) : null}
            {isLoading && renderArticlesSkeleton(view)}
        </div>
    )
})
