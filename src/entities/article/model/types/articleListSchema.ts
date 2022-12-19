import {EntityState} from "@reduxjs/toolkit"

import type {Article} from "./article"
import {ArticleOrderType, ArticleSortType, ArticleType, ArticleView} from "../consts"


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
