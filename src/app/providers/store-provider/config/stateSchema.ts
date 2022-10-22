import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit"
import {To} from "@remix-run/router"
import {AxiosInstance} from "axios"

import {CounterSchema} from "entities/counter"
import {UserSchema} from "entities/user"
import {ViewerSchema} from "entities/viewer"
import {LoginSchema} from "features/auth/by-username"
import {NavigateOptions} from "react-router/dist/lib/context"


export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // async reducers
    login?: LoginSchema
    viewer: ViewerSchema
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
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtra
}
