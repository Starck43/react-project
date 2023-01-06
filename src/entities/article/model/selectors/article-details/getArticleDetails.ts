import { StateSchema } from "@/app/providers/store-provider"

export const getArticleData = (state: StateSchema) => state.article?.data
export const getArticleCopy = (state: StateSchema) => state.article?.copy
export const getArticleLoading = (state: StateSchema) =>
    state.article?.isLoading || false
export const getArticleError = (state: StateSchema) => state.article?.error
