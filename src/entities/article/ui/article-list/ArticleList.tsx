import { memo } from "react"

import { useWindowDimensions } from "@/shared/lib/hooks/useWindowDimensions"
import { classnames } from "@/shared/lib/helpers/classnames"

import type { Article } from "../../model/types/article"
import { LIST_VIEW_PER_PAGE, TILE_VIEW_PER_PAGE } from "../../lib/constants"
import { ArticleView } from "../../model/consts"
import { ArticleListItem } from "../article-list-item/ArticleListItem"
import { renderArticlesSkeleton } from "../article-list-skeleton/ArticleListSkeleton"

import cls from "./ArticleList.module.sass"

interface ArticleListProps {
    articles: Article[]
    isLoading: boolean
    view: ArticleView
    shadowed?: boolean
    virtualized?: boolean
    inlined?: boolean
    className?: string
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        articles,
        isLoading,
        view,
        shadowed,
        virtualized = false,
        inlined = false,
        className,
    } = props

    const container =
        document.getElementById("articleListPage") || (document.body as Element)
    const { width } = useWindowDimensions(container)
    const isTile = view === ArticleView.TILE
    const itemsPerRow = isTile && container ? Math.floor(width / 225) : 1

    const articleListRender = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
            shadowed={shadowed}
            className={cls.article_item}
        />
    )

    return (
        <section
            data-testid="ArticleList"
            style={{
                gridTemplateColumns: inlined
                    ? undefined
                    : `repeat(${itemsPerRow}, 1fr)`,
            }}
            className={classnames(
                cls,
                ["articles", view],
                { virtualized, inlined },
                [className],
            )}
        >
            {articles.map((article) => articleListRender(article))}
            {isLoading &&
                renderArticlesSkeleton({
                    view,
                    count: isTile ? TILE_VIEW_PER_PAGE : LIST_VIEW_PER_PAGE,
                })}
        </section>
    )
})
