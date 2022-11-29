import {EntityState} from "@reduxjs/toolkit"
import {User} from "entities/user"


export enum ValidateCommentError {
    NO_COMMENT = "INCORRECT_COMMENT",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR"
}

export interface Comment {
    id: string
    user: User
    text: string
}

export interface CommentSchema extends EntityState<Comment>{
    data?: Comment[]
    isLoading: boolean
    error?: string
    validateErrors?: ValidateCommentError[]
}
