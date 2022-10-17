import {configureStore, ReducersMapObject} from "@reduxjs/toolkit"

import {StateSchema} from "app/providers/store-provider/config/stateSchema"
import {counterReducer} from "entities/counter"
import {userReducer} from "entities/user"
import {createReducerManager} from "./reducerManager"


export function createStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        preloadedState: initialState,
        devTools: __IS_DEV__,
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}
