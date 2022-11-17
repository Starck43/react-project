import {EntityState} from "@reduxjs/toolkit"

import {
    Article, ArticleOrderType, ArticleSortType, ArticleType, ArticleView,
} from "./article"


export interface ArticleListSchema extends EntityState<Article>{
    isLoading: boolean
    error?: string
    // filter & sort
    view?: ArticleView
    order: ArticleOrderType
    sort: ArticleSortType
    search: string
    type: ArticleType
    // pagination properties
    page: number
    limit: number
    hasMore: boolean

    _mounted: boolean
}
