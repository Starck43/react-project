import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit"

import {CounterSchema} from "entities/counter"
import {UserSchema} from "entities/user"
import {ViewerSchema} from "entities/viewer"
import {LoginSchema} from "features/auth/by-username"


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
