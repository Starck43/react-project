import {EntityState} from "@reduxjs/toolkit"
import {Article, ArticleView} from "./article"

export interface ArticleListSchema extends EntityState<Article>{
    isLoading: boolean
    error?: string
    view?: ArticleView
    // pagination properties
    page: number
    limit?: number
    hasMore: boolean

    _mounted: boolean
}