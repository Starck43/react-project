import {ArticleListSkeleton} from "entities/article/ui/article-list-skeleton/ArticleListSkeleton"
import {memo} from "react"

import {classnames} from "shared/lib/helpers/classnames"

import {Article, ArticleView} from "../../model/types/article"
import {ArticleListItem} from "../article-list-item/ArticleListItem"

import cls from "./ArticleList.module.sass"


interface ArticleListProps {
    articles: Article[]
    isLoading: boolean
    view?: ArticleView
    className?: string
}

const createArticleSkeleton = (view: ArticleView) => (
    new Array(view === ArticleView.TILE ? 12 : 4)
    .fill(0)
    .map((_, i) => <ArticleListSkeleton view={view} key={i} className={cls.shimmer} />)
)

export const ArticleList = memo((props: ArticleListProps) => {
    const {articles, isLoading, view = ArticleView.TILE, className} = props

    const renderArticleList = (article: Article) => (
        <ArticleListItem article={article} view={view} key={article.id} />
    )

    return (
        <div className={classnames(cls, [ "articles", view ], {}, [ className ])}>
            {isLoading
                ? createArticleSkeleton(view)
                : articles.length && articles.map(renderArticleList)}
        </div>
    )
})
