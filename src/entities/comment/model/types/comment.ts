import {EntityState} from "@reduxjs/toolkit"

import {User} from "@/entities/user"

import {ValidateCommentError} from "../consts"


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
