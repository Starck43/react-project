import {StateSchema} from "app/providers/store-provider"
import {ArticleView} from "../../types/article"


export const getArticlesLoading = (state: StateSchema) => state.articles?.isLoading || false
export const getArticlesError = (state: StateSchema) => state.articles?.error
export const getArticlesView = (state: StateSchema) => state.articles?.view || ArticleView.LIST
export const getArticlesPageNum = (state: StateSchema) => state.articles?.page || 1
export const getArticlesPageLimit = (state: StateSchema) => state.articles?.limit || 3
export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore
export const getArticlesMounted = (state: StateSchema) => state.articles?._mounted
