import {EntityState} from "@reduxjs/toolkit"
import type {Article} from "entities/article"


export interface ArticleRelatedSchema extends EntityState<Article> {
    isLoading: boolean
    error?: string
}
