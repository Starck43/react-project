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
    className?: string
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        articles, isLoading, error, view, className,
    } = props

    const {t} = useTranslation("articles")

    const renderArticleList = (article: Article) => (
        <ArticleListItem article={article} view={view} key={article.id} />
    )

    if (!isLoading && !articles.length) {
        return <Info title={t("статьи не найдены!")} align={InfoAlign.CENTER} />
    }

    if (error) {
        return <Info title={t("ошибка загрузки статей!")} align={InfoAlign.CENTER} />
    }

    return (
        <div className={classnames(cls, [ "articles", view ], {}, [ className ])}>
            {articles.length ? articles.map(renderArticleList) : null}
            {isLoading && renderArticlesSkeleton(view)}
        </div>
    )
})
