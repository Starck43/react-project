import { StateSchema } from "@/app/providers/store-provider"

export const getArticleRelatedLoading = (state: StateSchema) =>
    state.articleRelated?.isLoading || false
export const getArticleRelatedError = (state: StateSchema) =>
    state.articleRelated?.error
