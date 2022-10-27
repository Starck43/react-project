import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit"
import {AxiosInstance} from "axios"
import {To} from "@remix-run/router"

import {CounterSchema} from "entities/counter"
import {UserSchema} from "entities/user"
import {ProfileSchema} from "entities/profile"
import {LoginSchema} from "features/auth/login/by-username"
import {NavigateOptions} from "react-router/dist/lib/context"


export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // async reducers
    login?: LoginSchema
    profile?: ProfileSchema
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
    extra: ThunkExtra,
    state: StateSchema
}
