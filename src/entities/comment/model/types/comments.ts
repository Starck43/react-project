import {EntityState} from "@reduxjs/toolkit"
import {User} from "entities/user"


export enum ValidateCommentError {
    NO_COMMENT = "INCORRECT_COMMENT",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR"
}

export interface ArticleComment {
    id: string
    user: User
    text: string
}

export interface ArticleCommentsSchema extends EntityState<ArticleComment>{
    data?: ArticleComment[]
    isLoading: boolean
    error?: string
    validateErrors?: ValidateCommentError[]
}
