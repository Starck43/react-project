import {CombinedState, configureStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit"
import {To} from "@remix-run/router"
import {AxiosInstance} from "axios"
import {NavigateOptions} from "react-router/dist/lib/context"

import {StateSchema, ThunkExtra} from "app/providers/store-provider/config/stateSchema"
import {counterReducer} from "entities/counter"
import {userReducer} from "entities/user"
import {$api} from "shared/api/api"
import {ReducerList} from "shared/lib/components/DynamicModuleLoader"

import {createReducerManager} from "./reducerManager"


export function createStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducerList = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers as ReducersMapObject<StateSchema>)

    const args: ThunkExtra = {
        api: $api,
        navigate,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        preloadedState: initialState,
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: {extraArgument: args}}),
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createStore>["dispatch"]
