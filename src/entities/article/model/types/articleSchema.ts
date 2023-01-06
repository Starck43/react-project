import { Article } from "./article"

export interface ArticleSchema {
    data?: Article
    copy?: Article
    isLoading: boolean
    error?: string
    validateErrors?: undefined
}
