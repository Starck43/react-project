import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit"
import {AxiosInstance} from "axios"

import {ArticleListSchema, ArticleSchema} from "entities/article"
import {CommentSchema} from "entities/comment"
import {CounterSchema} from "entities/counter"
import {ProfileSchema} from "entities/profile"
import {UserSchema} from "entities/user"

import {LoginSchema} from "features/auth"
import {NewCommentSchema} from "features/comments"
import {ArticleRelatedSchema} from "features/articles"

import {PageSchema} from "widgets/page"


export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    page: PageSchema

    // async reducers
    login?: LoginSchema
    profile?: ProfileSchema
    articles?: ArticleListSchema
    article?: ArticleSchema
    articleRelated?: ArticleRelatedSchema
    comments?: CommentSchema
    newComment?: NewCommentSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtra {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtra,
    state: StateSchema
}
