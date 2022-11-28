import {memo} from "react"
import {useTranslation} from "react-i18next"
import {List, ListRowProps, WindowScroller} from "react-virtualized"

import {classnames} from "shared/lib/helpers/classnames"
import {Info} from "shared/ui/info/Info"

import {PageLoader} from "widgets/page-loader/PageLoader"
import {PAGE_ID} from "widgets/page/ui/Page"

import {Article, ArticleView} from "../../model/types/article"
import {ArticleListItem} from "../article-list-item/ArticleListItem"

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
    const container = document.getElementById(PAGE_ID) as Element

    const isTile = view === ArticleView.TILE
    const rowWidth = container?.clientWidth || 900
    const itemsPerRow = isTile && container ? Math.floor(rowWidth / 225) : 1

    const rowCount = isTile ? Math.ceil(articles.length / itemsPerRow) : articles?.length || 3
    const rowHeight = !isTile || !container ? 400 : Math.round(
        (((rowWidth - rowWidth * 0.05 * (itemsPerRow - 1)) / itemsPerRow)) * 1.5,
    )

    const articleListRender = ({index, key, style}: ListRowProps) => {
        const items = []
        const begin = index * itemsPerRow
        const end = Math.min(begin + itemsPerRow, articles.length)

        for (let i = begin; i < end; i++) {
            items.push(
                <ArticleListItem
                    key={articles[i].id}
                    article={articles[i]}
                    view={view}
                    shadowed={shadowed}
                    target={isRelated ? "_blank" : ""}
                    className={isRelated ? cls.related__card : isTile ? cls.tile : ""}
                />,
            )
        }
        return (
            <div
                key={key}
                style={{...style, gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`}}
                className={classnames(cls, [ "articles", view ], {}, [ className ])}
            >
                {items}
                {/* {isLoading && renderArticlesSkeleton(view)} */}
            </div>
        )
    }

    if (error) {
        return <Info title={t("ошибка загрузки статей!")} align="center" />
    }

    if (!isLoading && !articles?.length) {
        return <Info title={t("статьи не найдены!")} align="center" />
    }

    return (
        <WindowScroller scrollElement={container}>
            {(props) => {
                const {
                    width, height, registerChild, onChildScroll, isScrolling, scrollTop,
                } = props

                return (
                    <div ref={registerChild}>
                        <List
                            rowCount={rowCount}
                            height={height || 400}
                            width={width || 900}
                            rowHeight={rowHeight}
                            autoHeight
                            autoWidth
                            autoContainerWidth
                            scrollTop={scrollTop}
                            onScroll={onChildScroll}
                            isScrolling={isScrolling}
                            rowRenderer={articleListRender}
                        />
                        {isLoading && <PageLoader />}
                    </div>
                )
            }}
        </WindowScroller>
    )
})
