import { Article } from "./article"

export interface ArticleSchema {
    data?: Article
    form?: Article
    isLoading: boolean
    error?: string
    validateErrors?: undefined
}
