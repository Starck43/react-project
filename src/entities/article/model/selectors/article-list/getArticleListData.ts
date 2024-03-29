import { StateSchema } from "@/app/providers/store-provider"

import { ArticleOrderType, ArticleSortType, ArticleType, ArticleView } from "../../consts"
import { LIST_VIEW_PER_PAGE } from "../../../lib/constants"

export const getArticlesLoading = (state: StateSchema) => state.articles?.isLoading || false
export const getArticlesError = (state: StateSchema) => state.articles?.error
export const getArticlesPageNum = (state: StateSchema) => state.articles?.page || 1
export const getArticlesPageLimit = (state: StateSchema) => state.articles?.limit || LIST_VIEW_PER_PAGE
export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore
export const getArticlesMounted = (state: StateSchema) => state.articles?._mounted
export const getArticlesView = (state: StateSchema) => state.articles?.view ?? ArticleView.LIST
export const getArticlesSort = (state: StateSchema) => state.articles?.sort ?? ArticleSortType.CREATED
export const getArticlesOrder = (state: StateSchema) => state.articles?.order ?? ArticleOrderType.ASC
export const getArticlesSearch = (state: StateSchema) => state.articles?.search ?? ""
export const getArticlesType = (state: StateSchema) => state.articles?.type ?? ArticleType.ALL
