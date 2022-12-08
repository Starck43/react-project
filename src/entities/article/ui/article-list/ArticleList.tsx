import {memo} from "react"
import {List, ListRowProps, WindowScroller} from "react-virtualized"

import {classnames} from "@/shared/lib/helpers/classnames"

import {PAGE_ID} from "@/widgets/page/ui/Page"

import {LIST_VIEW_PER_PAGE, TILE_VIEW_PER_PAGE} from "../../lib/constants"
import {ArticleView} from "../../model/consts"
import {Article} from "../../model/types/article"
import {ArticleListItem} from "../article-list-item/ArticleListItem"
import {renderArticlesSkeleton} from "../article-list-skeleton/ArticleListSkeleton"

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
        virtualized = true,
        inlined = false,
        className,
    } = props

    const container = document.getElementById(PAGE_ID) || document.body as Element

    const isTile = view === ArticleView.TILE
    const rowWidth = container?.clientWidth || 900
    const itemsPerRow = isTile && container ? Math.floor(rowWidth / 225) : 1

    const rowCount = isTile ? Math.ceil(articles.length / itemsPerRow) : articles.length || LIST_VIEW_PER_PAGE
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
                    target=""
                    className={isTile ? cls.tile : ""}
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
            </div>
        )
    }

    return (
        <>
            {/* @ts-ignore */}
            <WindowScroller scrollElement={container}>
                {(props) => {
                    const {
                        width, height, registerChild, onChildScroll, isScrolling, scrollTop,
                    } = props

                    return (
                        !virtualized
                            ? (
                                <div
                                    style={{gridTemplateColumns: inlined ? "" : `repeat(${itemsPerRow}, 1fr)`}}
                                    className={classnames(cls, [ "articles", view ], {virtualized, inlined}, [ className ])}
                                >
                                    {articles.map((item) => (
                                        <ArticleListItem
                                            key={item.id}
                                            article={item}
                                            view={view}
                                            shadowed={shadowed}
                                            className={cls.article_item}
                                        />
                                    ))}
                                </div>
                            )
                            : (
                                // @ts-ignore
                                <div ref={registerChild}>
                                    {/* @ts-ignore */}
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
                                </div>
)
                    )
                }}
            </WindowScroller>

            {isLoading && renderArticlesSkeleton({
                view,
                rowCount: isTile ? TILE_VIEW_PER_PAGE : LIST_VIEW_PER_PAGE,
                itemsPerRow,
                className: classnames(cls, [ "articles", view ], {virtualized, inlined}, [ className ]),
                style: {
                    gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
                    minHeight: virtualized ? rowHeight || 400 : "auto",
                },
            })}
        </>
    )
})
