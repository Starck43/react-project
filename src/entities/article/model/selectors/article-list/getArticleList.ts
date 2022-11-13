import {StateSchema} from "app/providers/store-provider"
import {ArticleView} from "../../types/article"


export const getArticlesLoading = (state: StateSchema) => state.articles?.isLoading || false
export const getArticlesError = (state: StateSchema) => state.articles?.error
export const getArticlesView = (state: StateSchema) => state.articles?.view || ArticleView.LIST
